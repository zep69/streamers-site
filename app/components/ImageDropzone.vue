<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', files: File[]): void
}>()

const props = defineProps<{
  modelValue?: File[]
  maxFiles?: number
  maxSizeMB?: number
}>()

const files = ref<File[]>(props.modelValue ?? [])
const previews = ref<string[]>([])
const isDragging = ref(false)
const error = ref<string | null>(null)

const inputRef = ref<HTMLInputElement | null>(null)

const maxFiles = props.maxFiles ?? 5
const maxSizeBytes = (props.maxSizeMB ?? 5) * 1024 * 1024

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      files.value = newVal
      generatePreviews()
    }
  }
)

function openFileDialog() {
  inputRef.value?.click()
}

function handleFiles(selectedFiles: FileList | null) {
  if (!selectedFiles) return

  error.value = null

  const imageFiles = Array.from(selectedFiles).filter(file =>
    file.type.startsWith('image/')
  )

  // Проверка на общее количество
  if (files.value.length + imageFiles.length > maxFiles) {
    error.value = `Можно загрузить максимум ${maxFiles} файлов`
    return
  }

  // Проверка размера
  const oversized = imageFiles.find(file => file.size > maxSizeBytes)
  if (oversized) {
    error.value = `Файл "${oversized.name}" превышает ${props.maxSizeMB ?? 5} MB`
    return
  }

  files.value = [...files.value, ...imageFiles]
  generatePreviews()
  emit('update:modelValue', files.value)
}

function generatePreviews() {
  previews.value.forEach(url => URL.revokeObjectURL(url))
  previews.value = files.value.map(file => URL.createObjectURL(file))
}

function onDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
  handleFiles(e.dataTransfer?.files ?? null)
}

function removeFile(index: number) {
  const preview = previews.value[index]

  if (preview) {
    URL.revokeObjectURL(preview)
  }

  files.value.splice(index, 1)
  generatePreviews()
  emit('update:modelValue', files.value)
}
</script>

<template>
  <div>
    <div
      class="dropzone"
      :class="{ dragging: isDragging }"
      @click="openFileDialog"
      @dragover.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop="onDrop"
    >
      <p style="color:  var(--primary-color);">
        Перетащите изображения сюда или нажмите для выбора
      </p>
      <p class="hint">
        Макс: {{ maxFiles }} файлов, до {{ props.maxSizeMB ?? 5 }} MB каждый
      </p>

      <input
        ref="inputRef"
        type="file"
        accept="image/*"
        multiple
        hidden
        @change="handleFiles(($event.target as HTMLInputElement).files)"
      />
    </div>

    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="previews.length" class="preview-grid">
      <div v-for="(src, index) in previews" :key="index" class="preview-item">
        <img :src="src" alt="preview" />
        <button type="button" @click="removeFile(index)">✕</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropzone {
  border: 2px dashed var(--primary-color);
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 12px;
}

.dropzone.dragging {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.hint {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
}

.error {
  color: #dc2626;
  margin-top: 10px;
  font-size: 14px;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 20px;
}

.preview-item {
  position: relative;
}

.preview-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.preview-item button {
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
