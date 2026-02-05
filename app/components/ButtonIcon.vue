<template>
    <button class="button-icon">
        <img src="../assets/static/twitch-svgrepo-com.svg" :height="props.size" />
    </button>
</template>

<script setup lang="ts">

    const props = withDefaults(
        defineProps<{
            size?: number | string
        }>(),
        {
            size: 20
        }
    )

</script>

<style scoped lang="scss">
.button-icon  {
    background-color: var(--bg-color);
    border: none;
    padding: 5px;
    border-radius: 10px;

}
.button-icon:hover {
    cursor: pointer;
    filter: brightness(0.8);
}
</style>