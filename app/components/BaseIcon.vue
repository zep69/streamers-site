<script setup lang="ts">
import { computed } from 'vue'
import * as mdiIcons from '@mdi/js'

const props = withDefaults(
  defineProps<{
    icon: string | null
    size?: number | string
  }>(),
  {
    size: 20
  }
)

const path = computed(() => {
  if (!props.icon) return null

  // mdi-home → mdiHome
  const key = props.icon
    .replace(/^mdi-/, 'mdi')
    .replace(/-([a-z])/g, (_, c) => c.toUpperCase())

  return (mdiIcons as Record<string, string>)[key] ?? null
})
</script>

<template>
  <svg
    v-if="path"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    style="display: inline-block"
  >
    <path :d="path" />
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
