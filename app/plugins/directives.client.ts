import { vDisabled } from '~/directives/disabled'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('disabled', vDisabled)
})