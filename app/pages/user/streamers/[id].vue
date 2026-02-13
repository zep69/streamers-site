<template>
    <div class="page-wrapper">
        <div class="card-streamer">
            <img class="card-streamer--avatar" :src="streamer.avatar" alt="">
            <h2>{{ streamer.name }}</h2>
            <button v-if="!streamer?.isSubscribed" class="card-streamer--unsubscribed">Подписаться</button>
            <button v-else class="card-streamer--subscribed">Вы уже подписаны</button>
        </div>
        <div class="card-activity">
            <h2>Ваш баланс</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const id = ref<string>('')

    type Streamer = {
        name: string,
        subs: number,
        online: boolean,
        viewers?: number,
        status: 'online' | 'offline',
        avatar?: string,
        description?: string,
        modules: string[],
        lastStream?: Date,
        isSubscribed?: boolean,
        balanceName?: string,
    }
    const streamer  = ref<Streamer>({
        name: 'Streamer1',
        subs: 1000,
        online: true,
        viewers: 500,
        status: 'online',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
        description: 'Описание стримера 1 фдыловфлыодв длфыов длфыовдло фырвдлофырвд лофрывд лофывдлофрывдлоф ыдлфоыв дфлоывр дфлоырвд лофрвд лофрывдлофрывдлфоыврдлор',
        modules: ['Стикеры', 'Голосовые сообщения', 'Рулетка'],
        lastStream: new Date('2024-06-01T20:00:00'),
        isSubscribed: true,
        balanceName:'Негры',
    })

    onMounted(()=>{
        id.value = typeof route.params.id === 'string' ? route.params.id : ''
    })
</script>

<style scoped lang="scss">
.page-wrapper {
    display: flex;
    padding: 10px;
    align-items: flex-start;
}
.card-streamer {
    height: 300px;
    width: 300px;
    background-color: var(--bg-color-secondary);
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &--avatar {
        height: 150px;
        width: 150px;
        border-radius: 50%;

    }
    &--unsubscribed {
        background-color: var(--primary-color); 
        color: white; 
        border: none; 
        padding: 5px 10px; 
        border-radius: 5px;
        transition: 500ms;
        &:hover {
            background-color: rgb(136, 2, 170);
            cursor: pointer;
            transition: 500ms;
        }
    }
    &--subscribed {
        background-color: transparent; 
        color: var(--primary-color); 
        border: solid var(--primary-color) thin; 
        padding: 5px 10px; 
        border-radius: 5px;
        transition: 500ms;
        &:hover {
            background-color: rgb(136, 2, 170);
            color: white;
            cursor: pointer;
            transition: 500ms;
        }
    }
}

.card-activity {
    background-color: var(--bg-color-secondary);
    margin-left: 10px;
    border-radius: 10px;
    padding: 10px;

}
</style>