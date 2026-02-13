<template>
    <div style="margin-top: 10px;">
        <div style="display: flex;">
            <div class="streamers">
                <div v-for="item of streamers" :key="item.name" class="streamers--item" @click="pickStreamer(item)">
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
            <div class="card-streamer">
                <ClientOnly v-if="view">
                    <div class="card-streamer--empty" >
                        <BaseIcon icon="mdiTwitch" size="200" style="color: var(--primary-color);"/>
                        <h2>Для просмотра выберите стримера</h2>
                    </div>
                </ClientOnly>
                
                <div v-else style="padding: 20px;">
                    <div style="display: flex;justify-content: space-between;align-items: center;">
                        <div style="display: flex;align-items: center; color: var(--primary-color);">
                            <img :src="pickedStreamer?.avatar" alt="avatar" style="width: 200px; height: 200px; border-radius: 50%;">
                            <span style="margin-left: 20px;font-size: 48px;">{{ pickedStreamer?.name }}</span>
                        </div>
                        <div  style="display: flex; align-items: center;justify-content: end;">
                            <button v-if="pickedStreamer?.isSubscribed" class="streamers--item--body--subscribed">Вы подписаны</button>
                            <button v-else class="streamers--item--body--unsubscribed">Подписаться</button>
                        </div>

                    </div>

                    <div style="display: flex;justify-content: start; flex-direction: column; margin-top: 40px; padding: 20px; border: solid thin var(--primary-color);border-radius: 15px;">
                        <div>
                            <span style="color: var(--primary-color);font-weight: bold;">Валюта на стриме: </span>
                            <span style="color: var(--text-color);">{{ pickedStreamer?.balanceName }}</span>
                        </div>
                        <div>
                            <span style="color: var(--primary-color); font-weight: bold;">Зрителей:</span>
                            <span style="color: var(--text-color); margin-left: 10px;" v-if="pickedStreamer?.status === 'online'">{{ pickedStreamer?.viewers }}</span>
                            <span style="color: var(--text-color); margin-left: 10px;" v-else>{{ pickedStreamer?.status }}</span>
                        </div>
                        <div>
                            <span style="color: var(--primary-color); font-weight: bold;">Подписчиков:</span>
                            <span style="color: var(--text-color); margin-left: 10px;">{{ pickedStreamer?.subs }}</span>
                        </div>
                        <span style="color: var(--primary-color); font-weight: bold;">Описание:</span>
                        <span style="color: var(--text-color);">{{ pickedStreamer?.description }}</span>
                    </div>
                    <div style="margin-top: 10px;">
                        <h2 style="margin-bottom: 10px;">Доступные модули на стриме:</h2>
                        <div v-for="item in pickedStreamer?.modules" :key="item" style="display: flex;flex-direction: column; margin-bottom: 10px;">
                            <div style="display: flex; justify-content: start; align-items: center;">
                                <div class="primary-dot"></div>
                                <span style="color: var(--text-color); margin-left: 10px;">{{ item }}</span>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h2>Крайний стрим: 
                            <span v-if="pickedStreamer && pickedStreamer.lastStream">
                                {{ russianDate(pickedStreamer.lastStream) }}
                            </span>
                            <span v-else>
                                Неизвестно
                            </span>
                        </h2>
                    </div>
                    <div>
                        <h2>Статус: 
                            <span v-if="pickedStreamer?.status === 'online'" style="color: var(--primary-color);">Онлайн</span>
                            <span v-else style="color: var(--text-color);">Оффлайн</span>
                        </h2>
                    </div>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <button class="primary-button">Перейти на Twitch</button>
                        <button  class="primary-button" style="margin-left: 10px;">Пойти тратить баллы</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    function pickStreamer(streamer: Streamer) {
        pickedStreamer.value = streamer;
        view.value = false;

    }

    function russianDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('ru-RU', options);
    }

    const view = ref<boolean>(true)

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

    const pickedStreamer = ref<Streamer | null>({
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

.card-streamer {
    width: 50%; 
    background-color: var(--bg-color-secondary); 
    border-radius: 15px; 
    padding: 10px; 
    margin-left: 10px;
    margin-right: 10px;
    &--empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}

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

.red-dot {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%; 
  animation: blinker 1.5s linear infinite;
}
.primary-dot {
  width: 10px;
  height: 10px;
  background-color: var(--primary-color);
  border-radius: 50%; 
}

@keyframes blinker {
  50% {
    opacity: 0; 
  }
}
</style>