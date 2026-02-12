type TooltipValue =
  | string
  | {
      text: string
      position?: 'top' | 'bottom' | 'left' | 'right'
    }

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', {
    mounted(el, binding) {
      const value = binding.value as TooltipValue

      const tooltip = document.createElement('div')
      tooltip.className = 'nuxt-tooltip'
      tooltip.textContent =
        typeof value === 'string' ? value : value.text

      document.body.appendChild(tooltip)

      const getPosition = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const tooltipRect = tooltip.getBoundingClientRect()
        const position =
          typeof value === 'string'
            ? 'top'
            : value.position || 'top'

        const scrollX = window.scrollX
        const scrollY = window.scrollY

        switch (position) {
          case 'bottom':
            return {
              left:
                rect.left +
                rect.width / 2 -
                tooltipRect.width / 2 +
                scrollX,
              top: rect.bottom + 8 + scrollY,
            }
          case 'left':
            return {
              left: rect.left - tooltipRect.width - 8 + scrollX,
              top:
                rect.top +
                rect.height / 2 -
                tooltipRect.height / 2 +
                scrollY,
            }
          case 'right':
            return {
              left: rect.right + 8 + scrollX,
              top:
                rect.top +
                rect.height / 2 -
                tooltipRect.height / 2 +
                scrollY,
            }
          default: // top
            return {
              left:
                rect.left +
                rect.width / 2 -
                tooltipRect.width / 2 +
                scrollX,
              top: rect.top - tooltipRect.height - 8 + scrollY,
            }
        }
      }

      const show = (e: MouseEvent) => {
        tooltip.style.display = 'block'
        const { left, top } = getPosition(e)
        tooltip.style.left = `${left}px`
        tooltip.style.top = `${top}px`

        requestAnimationFrame(() => {
          tooltip.classList.add('nuxt-tooltip--visible')
        })
      }

      const hide = () => {
        tooltip.classList.remove('nuxt-tooltip--visible')
      }

      el.addEventListener('mouseenter', show)
      el.addEventListener('mouseleave', hide)

      el._tooltip = tooltip
      el._tooltipHandlers = { show, hide }
    },

    updated(el, binding) {
      if (el._tooltip) {
        el._tooltip.textContent =
          typeof binding.value === 'string'
            ? binding.value
            : binding.value.text
      }
    },

    unmounted(el) {
      const { show, hide } = el._tooltipHandlers || {}

      el.removeEventListener('mouseenter', show)
      el.removeEventListener('mouseleave', hide)

      if (el._tooltip) {
        document.body.removeChild(el._tooltip)
      }
    },
  })
})