<template>
    <div>
        <Dialog v-model="props.modelValue">
            <template #header>
                <div class="header">
                    <h2>Стикеры</h2>
                    <button class="button-close" @click="close">
                        <BaseIcon icon="mdiClose" class="button-close--icon "     />
                    </button>
                </div>
            </template>
            <template #default>
                <div>
                    <span style="color: var(--text-color)">Прикрепите картинку чтобы отправить ее стримеру</span>
                    <ImageDropzone style="margin-top: 10px;" v-model="files"/>
                </div>
            </template>
            <template #footer>
                <div class="footer">
                    <button class="footer--button">Отправить за {{ props.price * files.length }}</button>
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
    type Props = {
        modelValue: boolean
        price: number
    }
    const emit = defineEmits<{ 
        ( e: 'update:modelValue', value: boolean): void 
    }>()
    const close = () => {
        emit('update:modelValue', false)
    }

    const files = ref<File[]>([])

    const props = withDefaults(defineProps<Props>(),{
        modelValue : false
    })
</script>

<style scoped lang="scss">
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    &--button {
        background-color: var(--primary-color);
        padding: 10px;
        border-radius: 10px;
        color: var(--text-color);
        border: none;
        transition: 250ms;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: 250ms;
        }
        &:active {
            transition: 250ms;
            background-color: var(--secondary-color);
        }
    }
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.button-close {
    background: none;
    border: none;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 250ms;
    &--icon {
        color: red;
    }
    &:hover {
        cursor: pointer;
        transition: 250ms;
        background-color: rgb(51, 36, 36);
    }
}
</style>