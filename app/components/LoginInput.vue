<template>
  <div class="wrapper-input">
    <BaseIcon
      v-if="icon"
      :icon="icon"
      class="icon-color"
      size="25"
    />

    <input
    :type="inputType"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    :class="[
        'login-input',
        `login-input--${icon ? 'icon' : 'null'}`,
        `login-input--${icon ? 'icon' : 'null'}--${inputType}`
    ]"
    />

    <BaseIcon
      v-if="type === 'password'"
      :icon="eye ? 'mdiEyeOff' : 'mdiEye'"
      @click="toggleEye"
      class="icon-eye"
      size="25"
    />
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

type Props = {
    modelValue: string | null
    type?: 'text' | 'password'
    placeholder?: string
    icon?: string | null
}

const props = withDefaults(
  defineProps<Props>(),
  {
    placeholder: '',
    type: 'text',
    icon: null,
    modelValue: '',
  }
)

const eye = ref(false)

const inputType = computed(() => {
  if (props.type !== 'password') return props.type
  return eye.value ? 'text' : 'password'
})

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const toggleEye = () => {
  eye.value = !eye.value
}
</script>




<style scoped lang="scss">
.wrapper-input {
    position: relative;
      &--null {
    width: 100%;
    height: 40px;
    
    font-size: 14px;
  }
  &--icon {
    font-size: 14px;
    width: 100%;
    padding-left: 38px;
    height: 40px;
  }
}
.login-input{
    background-color: var(--bg-color-secondary);
    border: thin var(--primary-color) solid;
    border-radius: 15px;
    width: 100%;
    height: 50px;
    padding:0 5px 0 10px;
    font-size: 25px;
    color: var(--text-color-secondary);
    &--null {
        width: 100%;
        height: 50px;
    }
    &--icon {
        padding-left: 42px;

        &--password {
            padding-right: 42px;
        }
        &--text {
            padding-right: 0px;
        }
    }
}
.login-input:focus{
    outline: none;
}
.icon-color {
    color: var(--primary-color);
    position: absolute;
    left: 10px;
    top:15px
 
}
.icon-eye {
    color: var(--primary-color);
    position: absolute;
    right: 10px;
    top:15px
}
.icon-eye:hover {
    cursor: pointer;
}
</style>