<template>
    <div class="page-wrapper-login">
        <div class="login">
            <div class="login--header">
                <h2>Sign in system</h2>
            </div>
            <div class="login--body">
                <LoginInput v-model="login" icon="mdiAt"  type="text" placeholder="email"/>
                <LoginInput style="margin-top: 15px;" icon="mdiKey" v-model="password" type="password" placeholder="password"/>
            </div>
            <div class="login--actions">
                <button class="primary-button">Login</button>
                <ButtonIcon icon="../assets/static/twitch-svgrepo-com.svg" size="35" style="margin-left:  10px;"/>
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
    height: 330px;
    overflow: hidden;
    padding: 20px;
    -webkit-boxв-shadow: 4px 4px 33px 0px var(--primary-color);
    -moz-box-shadow: 4px 4px 33px 0px var(--primary-color);
    box-shadow: 4px 4px 33px 0px var(--primary-color);
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
.icon {
    color: var(--primary-color);
}
</style>