<template>
    <div class="root-user">
        <div>
            <h2>Сейчас онлайн</h2>
            <div class="root-user--now-online">
                <div style="width: 100%;">
                    <StreamerOnline v-for="item in streamers" :key="item.name" v-bind="item" />
                </div>
            </div>
        </div>
        <div style="margin-left: 10px; width: 100%;">
            <h2>Ваша статистика</h2>
            <div class="root-user--statistics">
                <UserStatOnStreamer v-for="item in statistic" :key="item.streamerName" v-bind="item" :streamer-name="item.streamerName" :hours-watched="item.hoursWatched" :avatar="item.avatar" :balance="item.balance" :balance-name="item.balanceName" :online="item.online"/>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
 type Streamer = {
    name: string,
    viewers: number,
    status: 'online' | 'offline',
    avatar?: string
 }

 type UserStatStreamer = {
    streamerName: string,
    hoursWatched: number,
    avatar?: string,
    balance: number,
    balanceName?: string
    online: boolean,
    availableModules?: AvalivableModule[],
 }

 type AvalivableModule = {
    name: string,
    description: string,
 }
 const statistic: UserStatStreamer[] = [
    {
        streamerName: 'Streamer1',
        hoursWatched: 100,
        balance: 500,
        online: true,
        balanceName:'Негров',
        availableModules: [
            {
                name: 'Стикеры',
                description: 'Описание модуля 1'
            },
            {
                name: 'Голосовые сообщения',
                description: 'Описание модуля 2'
            },
            {
                name: 'Рулетка',
                description: 'Описание'
            },
            {
                name: 'Гамба',
                description: 'Описание'
            },
            {
                name: 'Сообщения на экране',
                description: 'Описание'
            },
            {
                name: 'Мемы',
                description: 'Описание'
            },
            {
                name: 'СВО',
                description: 'Описание'
            },
        ]
    },
    {
        streamerName: 'Streamer2',
        hoursWatched: 50,
        balance: 200,
        online: false,
        balanceName:'Сухареков',
        availableModules: [
            {
                name: 'Голосовые сообщения',
                description: 'Описание модуля 1'
            },
            {
                name: 'Сообщения на экране',
                description: 'Описание модуля 2'
            },
            {
                name: 'Анальная модерация',
                description: 'Описание модуля 3'
            },

        ]
    },
    {
        streamerName: 'Streamer3',
        hoursWatched: 200,
        balance: 1000,
        online: true,
        balanceName: 'Украинских детей',
        availableModules: [
            {
                name: 'Гамба',
                description: 'Описание модуля 1'
            },
            {
                name: 'Мемы',
                description: 'Описание модуля 2'
            },
            {
                name: 'СВО',
                description: 'Описание модуля 3'
            },
        ]
    }
 ]

 const streamers: Streamer[] = [
    {
        name: 'Daun',
        viewers: 100,
        status: 'online',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Pidar',
        viewers: 50,
        status: 'offline',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Gandon',
        viewers: 200,
        status: 'online',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Streamer228',
        viewers: 1488,
        status: 'online',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Kaloed',
        viewers: 200,
        status: 'offline',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Aboba',
        viewers: 322,
        status: 'online',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Hitler',
        viewers: 200,
        status: 'offline',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Ben Ladden',
        viewers: 200,
        status: 'offline',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
    {
        name: 'Mussolini',
        viewers: 200,
        status: 'offline',
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png'
    },
 ]
</script>

<style scoped lang="scss">
.root-user {
    padding: 10px;
    display: flex;
    &--now-online {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        background-color: var(--bg-color-secondary);
        border-radius: 20px;
        width: 600px;
        margin-top: 10px;
        padding: 10px;
    }
    &--statistics {
        background-color: var(--bg-color-secondary);
        border-radius: 20px;
        width: 100%;
        margin-top: 10px;
        padding: 10px;
    }
    
}
</style>