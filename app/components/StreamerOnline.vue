<template>
    <div class="online-line">
        <div class="online-line--avatart-row">
            <img class="online-line--avatart-row--avatar" :src="props.avatar" alt="" height="25">
            <span style="margin-left: 10px;">{{ props.name }}</span>
        </div>
        <div class="online-line--viewers-row">
            <span v-if="props.status === 'offline'">{{ props.status }}</span>
            <div v-if="props.status === 'online'" class="red-dot"></div>
            <span v-if="props.status === 'online'">{{ props.viewers }}</span>
            
        </div>
        
    </div>
</template>

<script setup lang="ts">
 const props = withDefaults(defineProps<{
    name: string,
    viewers: number,
    status: 'online' | 'offline',
    avatar?: string
 }>(), {

 })
</script>

<style scoped lang="scss">
.online-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 5px;
    border-radius: 15px;
    transition: 500ms;
    &--avatart-row {
        display: flex;
        justify-self: start;
        align-items: center;
        color: var(--text-color);
        &--avatar {
            border-radius: 50%;
        }
    }
    &--viewers-row {
        display: flex;
        justify-self: end;
        align-items: center;
        gap: 10px;
        color: var(--text-color);
    }
}:hover{
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: 500ms;
}
.red-dot {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%; 
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0; 
  }
}
</style>