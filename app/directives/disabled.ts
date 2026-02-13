import type { Directive } from 'vue'

export const vDisabled: Directive = {
  mounted(el, binding) {
    toggle(el, binding.value)
  },
  updated(el, binding) {
    toggle(el, binding.value)
  }
}

function toggle(el: HTMLElement, value: boolean) {
  let overlay = el.querySelector(':scope > .v-disabled-overlay') as HTMLElement

  if (value) {
    if (getComputedStyle(el).position === 'static') {
      el.style.position = 'relative'
    }

    el.style.pointerEvents = 'none'

    if (!overlay) {
      overlay = document.createElement('div')
      overlay.className = 'v-disabled-overlay'
      el.appendChild(overlay)
    }
  } else {
    overlay?.remove()
    el.style.pointerEvents = ''
  }
}
