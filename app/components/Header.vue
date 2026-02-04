<template>
    <div class="header">
        <div class="header--btn-row">
            <div>
                <button class="primary-button">Click</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header{
    height: 70px;
    border: thin solid var(--secondary-color);
    background-color: var(--bg-color-secondary);
    border-radius: 15px;
    &--btn-row  {
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 100%;
        padding: 0px 10px 0 10px;
    }
            
}
</style>