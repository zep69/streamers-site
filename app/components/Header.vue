<template>
    <div class="header">
        <div class="header--btn-row">
            <div>
                <h2>Twitch pidarasi</h2>
            </div>
            <div class="btn-wrapper">
                <button class="btn-group btn-group--start">Главная</button>
                <button class="btn-group">О проекте</button>
                <button class="btn-group btn-group--end" @click="$router.push('/login')">Войти</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header{
    height: 70px;
    border: none;
    background-color: none;
    border-radius: 15px;
    &--btn-row  {
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 100%;
        padding: 0px 10px 0 10px;
    }
            
}
.btn-wrapper {
    -webkit-box-shadow: 4px 4px 15px 0px var(--primary-color);
    -moz-box-shadow: 4px 4px 15px 0px var(--primary-color);
    box-shadow: 4px 4px 15px 0px var(--primary-color);
}
.btn-group{
    background-color: none;
    color: var(--primary-color);
    background: none;
    font-size: 15px;
    padding: 8px;
    border: solid var(--primary-color) thin;
    &--start{
        border-radius: 5px 0 0 5px;
    }
    &--end{
        border-radius: 0 5px 5px 0;
    }
}
.btn-group:hover{
    background-color: var(--primary-color);
    color: var(--bg-color-secondary);
    cursor: pointer;
}
</style>