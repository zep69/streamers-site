<template>
    <div>
        <h2>Стримеры</h2>
        <div style="display: flex;">
            <div class="streamers">
                <div v-for="item of streamers" :key="item.name" class="streamers--item">
                    <div class="streamers--item--header">
                        <div style="display: flex; align-items: center;">
                            <img :src="item.avatar" alt="avatar" class="streamers--item--header--avatar">
                            <span class="streamers--item--header--name">{{ item.name }}</span>
                        </div>
                        <div class="streamers--item--header--subs">
                            <span >{{ item.subs }} подписчиков</span>
                        </div>
                    </div>
                    <div class="streamers--item--body">
                        <p class="streamers--item--body--description" style="color: var(--text-color);">{{ item.description }}</p>
                        <ClientOnly>
                            <button   v-if="!item.isSubscribed" class="streamers--item--body--unsubscribed">Подписаться</button>
                            <button v-tooltip="{ text: 'Вы хотите отписаться?', position: 'top' }" v-else class="streamers--item--body--subscribed">Вы подписаны</button>
                        </ClientOnly>
                    </div>
                
                </div>
            </div>
            <div style="width: 50%; background-color: var(--bg-color-secondary); border-radius: 15px; padding: 10px; margin-left: 10px;margin-right: 10px;">
                <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;flex-direction: column;">
                    <BaseIcon icon="mdiTwitch" size="200" style="color: var(--primary-color);"/>
                    <h2>Для просмотра выберите стримера</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    }

    const streamers: Streamer[] = [
        {
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
        },
        {
            name: 'Streamer2',
            subs: 500,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 2',
            modules: ['Голосовые сообщения', 'Рулетка'],
            lastStream: new Date('2024-05-30T18:00:00'),
            isSubscribed: true,
        },
        {
            name: 'Streamer3',
            subs: 2000,
            online: true,
            viewers: 1500,
            status: 'online',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 3',
            modules: ['Стикеры', 'Голосовые сообщения', 'Рулетка', 'Гамба'],
            lastStream: new Date('2024-06-02T19:00:00'),
            isSubscribed: false,
        },
        {
            name: 'Streamer4',
            subs: 800,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 4',
            modules: ['Стикеры', 'Голосовые сообщения'],
            lastStream: new Date('2024-05-28T17:00:00'),
            isSubscribed: false,
        },
        {
            name: 'Streamer2',
            subs: 500,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 2',
            modules: ['Голосовые сообщения', 'Рулетка'],
            lastStream: new Date('2024-05-30T18:00:00'),
            isSubscribed: true,
        },
        {
            name: 'Streamer3',
            subs: 2000,
            online: true,
            viewers: 1500,
            status: 'online',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 3',
            modules: ['Стикеры', 'Голосовые сообщения', 'Рулетка', 'Гамба'],
            lastStream: new Date('2024-06-02T19:00:00'),
            isSubscribed: false,
        },
        {
            name: 'Streamer4',
            subs: 800,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 4',
            modules: ['Стикеры', 'Голосовые сообщения'],
            lastStream: new Date('2024-05-28T17:00:00'),
            isSubscribed: false,
        },
         {
            name: 'Streamer2',
            subs: 500,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 2',
            modules: ['Голосовые сообщения', 'Рулетка'],
            lastStream: new Date('2024-05-30T18:00:00'),
            isSubscribed: true,
        },
        {
            name: 'Streamer3',
            subs: 2000,
            online: true,
            viewers: 1500,
            status: 'online',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 3',
            modules: ['Стикеры', 'Голосовые сообщения', 'Рулетка', 'Гамба'],
            lastStream: new Date('2024-06-02T19:00:00'),
            isSubscribed: false,
        },
        {
            name: 'Streamer4',
            subs: 800,
            online: false,
            status: 'offline',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            description: 'Описание стримера 4',
            modules: ['Стикеры', 'Голосовые сообщения'],
            lastStream: new Date('2024-05-28T17:00:00'),
            isSubscribed: false,
        }
    ]
</script>

<style scoped lang="scss">
.streamers {
    width: 50%; 
    background-color: var(--bg-color-secondary); 
    border-radius: 15px; 
    padding: 20px; 
    margin-right: 10px;
    margin-left: 10px;
    max-height: 90vh;
    overflow: scroll;
    &--item {
        background-color: rgb(29, 23, 32);
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 20px;
        transition: 500ms;
        &--header {
            display: flex; 
            align-items: center; 
            color: var(--primary-color); 
            justify-content: space-between;
            &--avatar {
                width: 50px; 
                height: 50px; 
                border-radius: 50%; 
                margin-right: 10px;
            }
            &--name {
                font-size: 24px;
            }
            &--subs {
                display: flex; 
                align-items: center; 
                justify-content: end;
                color: var(--text-color);
            }
        }
        &--body {
            display: flex; 
            justify-content: space-between; 
            margin-top: 10px; 
            align-items: start;
            &--description {
                max-width: 600px;
                max-height: 200px;
                overflow: hidden;
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
        &:hover {
            background-color: rgb(45, 35, 50);
            cursor: pointer;
            transition: 500ms;
        }
        &:active {
            transform: scale(0.98);
        }
    }
}
</style>