<template>
    <div class="page-wrapper-login">
        <div class="login">
            <div class="login--header">
                <h2>Sign in system</h2>
            </div>
            <div class="login--body">
                <LoginInput v-model="login" type="text" placeholder="email"/>
                <LoginInput style="margin-top: 15px;" v-model="password" type="password" placeholder="password"/>
            </div>
            <div class="login--actions">
                <button class="primary-button">Login</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const login = ref<string>('')
    const password = ref<string>('')

</script>

<style scoped lang="scss">
.page-wrapper-login {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.login{
    background-color: var(--bg-color-secondary);
    border: thin var(--primary-color) solid;
    border-radius: 20px;
    width: 450px;
    height: 350px;
    overflow: hidden;
    padding: 20px;
    &--header {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        padding: 5px;
    }
    &--body {
        margin: 30px 10px 30px 10px;
    }
    &--actions {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>