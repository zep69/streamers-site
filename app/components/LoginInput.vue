<template>
    <div>
        <input :type="type" :placeholder="placeholder" :value="modelValue" class="login-input">
    </div>
</template>

<script setup lang="ts">
   const props = withDefaults(
        defineProps<{
            modelValue: null | string
            type?:  'text'|'password'
            placeholder?:   string
            icon?:  null | string
        }>(),{
            placeholder:'',
            type: 'text',
            icon:null,
            modelValue:null   
        }
   ) 
</script>

<style scoped lang="scss">
.login-input{
    background-color: var(--bg-color-secondary);
    border: thin var(--primary-color) solid;
    border-radius: 15px;
    width: 100%;
    height: 50px;
    padding:0 5px 0 10px;
    font-size: 25px;
    color: var(--text-color-secondary);
}
.login-input:focus{
    outline: none;
}
</style>