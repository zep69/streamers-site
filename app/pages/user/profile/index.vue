<template>
    <div class="profile-root">
        <div>
            <h2>Profile </h2>
            <div class="profile-root--card-profile ">
                <div style="display: flex; justify-content: center; align-items: center;padding-top: 40px;">
                    <div class="profile-root--card-profile--avatar"></div>
                </div>
                <div style="display: flex; justify-content: center;align-items: center; margin-top: 20px;">
                    <span class="profile-root--card-profile--name">zepter69</span>
                </div>
                <div class="profile-root--card-profile--info">
                    <div style="color: var(--primary-color);">
                        email: <span style="color: var(--text-color);">zepter69@gmail.com</span>
                    </div>
                    <div style="color: var(--primary-color);">
                        telegram: <span style="color: var(--text-color);">@zepter69</span>
                    </div>
                    <div style="color: var(--primary-color);">
                        Twitch: <span style="color: var(--text-color);">zepter69</span>
                    </div>
                </div>
                <div style="color: var(--primary-color);padding: 20px;">
                    Привязанные аккаунты:
                    <div style="display: flex;justify-content: start; flex-wrap: wrap;">
                        <div class="integration integration--twitch integration--twitch--active">
                            <img src="../../../assets/static/twitch-svgrepo-com.svg" height="20" width="20" style="margin-right: 5px;">
                            Twitch
                            <BaseIcon style="margin-left: 5px;" icon="mdiCheck"/>
                        </div>
                        <!-- <div class="integration integration--kick">
                            Kick
                        </div> -->
                        
                        <div class="integration integration--google">
                            <img src="../../../assets/static/google-color-svgrepo-com.svg" height="20" width="20" style="margin-right: 5px;">
                            Google
                        </div>
                        <div class="integration integration--telegram integration--telegram--active">
                            <img src="../../../assets/static/telegram-svgrepo-com.svg" height="20" width="20" style="margin-right: 5px;">
                            Telegram
                            <BaseIcon style="margin-left: 5px;" icon="mdiCheck"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-left: 10px;width: 100%;">
            <h2>Инфо</h2>
            <div class="profile-root--card-info">
                <div class="profile-root--card-info--subscribe">
                    <span>Отслеживаемые каналы: </span>
                    <div class="profile-root--card-info--subscribe--item" v-for="item in streamers" :key="item.id">
                        <img :src="item.avatar" alt="" height="30px">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
                <div class="profile-root--card-info--last-activity">
                    <span>Последняя активность:</span>
                    <div v-for="item in activities" :key="item.date" style="margin-top: 10px;">
                        <div class="profile-root--card-info--last-activity--item">
                            <div>
                                <span class="profile-root--card-info--last-activity--item--date">{{ formDate(item.date) }}</span>
                                <span>{{ item.streamerName }}</span>
                               
                                <span class="profile-root--card-info--last-activity--item--name">{{ item.type }}</span>
                            </div>
                            
                            <span>{{ item.sum }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    type Activity = {
        type: string,
        streamerName: string,
        date: string,
        sum: number,
    }

    function formDate(date:string): string{
        const dateTemp = new Date(date)
        return dateTemp.toLocaleDateString('ru-RU')
    }
        
        
        
        
        const activities: Activity[] = [
            {
                type: 'Сообщение на экран',
                streamerName: 'Streamer1',
                date: '12.06.2024 12:00',
                sum: -100
            },
            {
                type: 'Перелив',
                streamerName: 'Streamer2',
                date: '11.06.2024 18:00',
                sum: +200
            },
            {
                type: 'СВО',
                streamerName: 'Streamer2',
                date: '11.06.2024 18:00',
                sum: -200
            },
            {
                type: 'Гамба',
                streamerName: 'Streamer3',
                date: '10.06.2024 20:00',
                sum: -5000
            },
            {
                type: 'Гамба',
                streamerName: 'Streamer3',
                date: '10.06.2024 18:00',
                sum: -50
            },
            {
                type: 'Гамба',
                streamerName: 'Streamer3',
                date: '10.06.2024 16:00',
                sum: -50
            },
            {
                type: 'Гамба',
                streamerName: 'Streamer3',
                date: '10.06.2024 20:00',
                sum: -50
            },
    ]

    type Streamer = {
        name : string,
        avatar: string,
        id: number,
    }

    const streamers: Streamer[] = [
        {
            name: 'Streamer1',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            id: 1
        },
        {
            name: 'Streamer2',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            id: 2
        },
        {
            name: 'Streamer3',
            avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
            id: 3
        },
    ]
</script>

<style scoped lang="scss">
.integration {
    margin: 5px;
    padding: 20px;
    width: 150px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: 500ms;
    &--twitch {
        background-color: rgb(29, 23, 32);
        &:hover {
         background-color: rgb(45, 35, 50);
         cursor: pointer;
        }
        &--active {
            border: thin solid var(--primary-color);
        }
    }
    &--kick {
        color: rgb(1, 206, 1);
        background-color: rgb(23, 32, 23);
        &:hover {
         background-color: rgb(35, 50, 35);
         cursor: pointer;
        }
    }
    &--google {
        color: rgb(1, 97, 206);
        background-color: rgb(23, 25, 32);
        &:hover {
            background-color: rgb(35, 40, 55);
            cursor: pointer;
        }
    }
    &--telegram {
        color: rgb(1, 148, 206);
        background-color: rgb(23, 32, 32);
        &:hover {
            background-color: rgb(35, 44, 50);
            cursor: pointer;
        }
        &--active {
            border: thin solid rgb(1, 148, 206);
        }
    }
}
.profile-root {
    padding: 10px;
    display: flex;
    &--card-info {
        padding: 20px;
        margin-top: 10px;
        height: 600px;
        width: 100%;
        border-radius: 20px;
        background-color: var(--bg-color-secondary);
        -webkit-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        -moz-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        display: flex;
        justify-content: start;
        &--last-activity {
            color: var(--primary-color);
            width: 400px;
            margin-left: 20px;
            &--item {
                display: flex; 
                justify-content: space-between;
                padding: 10px;
                background-color: rgb(29, 23, 32);
                border-radius: 10px;
                &--name {
                    color: var(--text-color);
                    margin-left: 5px;
                }
                &--date {
                    color: var(--text-color-secondary);
                    margin-right: 5px;
                }
                &:hover {
                    background-color: rgb(45, 35, 50);
                    cursor: pointer;
                }
            }
        }
        &--subscribe {
            color: var(--primary-color);
            width: 200px;
            &--item {
                display: flex;
                align-items: center;
                margin-top: 10px;
                padding: 10px;
                background-color: rgb(29, 23, 32);
                border-radius: 10px;
                transition: 500ms;
                img {
                    border-radius: 50%;
                    margin-right: 10px;
                }
                span {
                    color: var(--text-color);
                    margin-left: 10px;
                }
                &:hover {
                    background-color: rgb(45, 35, 50);
                    cursor: pointer;
                }
            }
        }
    }
    &--card-profile {
        margin-top: 10px;
        height: 600px;
        width: 530px;
        border-radius: 20px;
        background-color: var(--bg-color-secondary);
        -webkit-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        -moz-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        &--avatar {
            height: 150px;
            width: 150px;
            border-radius: 50%;
            background-image: url('https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png');
            background-size: contain;
             -webkit-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
             -moz-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
             box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
        }
        &--name {
            font-size: 20px;
            font-weight: bold;
            color: var(--primary-color);
        }
        &--info {
            margin-top: 20px;
            padding: 20px;
        }
    }
}
</style>