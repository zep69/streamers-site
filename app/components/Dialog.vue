<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="modelValue"
        class="dialog-backdrop"
        @click.self="close"
      >
        <div class="dialog-window" :style="windowStyle">
          <header v-if="$slots.header" class="dialog-header">
            <slot name="header" />
          </header>

          <section class="dialog-content">
            <slot />
          </section>

          <footer v-if="$slots.footer" class="dialog-footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ 
  modelValue: boolean
  width?: string | number
  blur?: number
}>()

const emit = defineEmits<{ 
  (e: 'update:modelValue', value: boolean): void 
}>()

const close = () => {
  emit('update:modelValue', false)
}

const windowStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width || '500px'
}))
</script>

<style scoped>
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(var(--blur, 8px));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog-window {
  background: var(--bg-color-secondary);
  border-radius: 16px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.dialog-header,
.dialog-footer {
  padding: 16px 20px;
  /*border-bottom: 1px solid var(--text-color-secondary); */
}

.dialog-footer {
    color: var(--primary-color);
 /* border-top: 1px solid var(--text-color-secondary);
  border-bottom: none;*/
}

.dialog-content {
  padding: 20px;
  overflow: auto;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
