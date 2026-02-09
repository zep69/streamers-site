<template>
    <div class="profile-root">
        <div>
            <h2>Profile </h2>
            <div class="profile-root--card-profile ">

            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.profile-root {
    padding: 10px;
    display: flex;
    &--card-profile {
        margin-top: 10px;
        height: 600px;
        width: 500px;
        border-radius: 20px;
        background-color: var(--bg-color-secondary);
        -webkit-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        -moz-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
    }
}
</style>