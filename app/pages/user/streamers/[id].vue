<template>
    <div class="page-wrapper">
        <div class="card-streamer">
            <img class="card-streamer--avatar" :src="streamer.avatar" alt="">
            <h2>{{ streamer.name }}</h2>
            <button v-if="!streamer?.isSubscribed" class="card-streamer--unsubscribed">Подписаться</button>
            <button v-else class="card-streamer--subscribed">Вы уже подписаны</button>
        </div>
        <div class="card-activity">
            <h2>Ваш баланс: {{ balance }} {{ streamer.balanceName }}(ов)</h2>
            <br>
            <div>
                <h2>Модули:</h2>
                <div class="card-activity--modules">
                    <div v-for="item in streamer.modules" class="card-activity--modules--item">
                        <div class="card-activity--modules--item--header">
                            <span>{{ item.name }}</span>
                        </div>
                        <div class="card-activity--modules--item--description">
                            {{ item.description }}
                        </div>
                        <div class="card-activity--modules--item--actives">
                            <button>
                                Взаимодействовать
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const id = ref<string>('')

    const balance = ref<number>(3122)

    type Streamer = {
        name: string,
        subs: number,
        online: boolean,
        viewers?: number,
        status: 'online' | 'offline',
        avatar?: string,
        description?: string,
        modules: any[],
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
        modules: [
            {
                name: 'Стикеры',
                description: 'Отправить стикер стримеру'
            },
            {
                name: 'Голосовые сообщения',
                description: 'Отправить голосовое сообщение'
            },
            {
                name: 'Рулетка',
                description: 'Прокрутить рулетку'
            },
            {
                name: 'Гамба',
                description: "Let's go gambling!"
            },
            {
                name: 'Сообщения на экране',
                description: 'А-ля донат, но не донат'
            },
            {
                name: 'Мемы',
                description: 'Отправить мем'
            },
            {
                name: 'СВО',
                description: 'Устроить стримеру СВО!ГОЙДА!ПЕРЕМОГА!'
            },
        ],
        lastStream: new Date('2024-06-01T20:00:00'),
        isSubscribed: true,
        balanceName:'Негр',
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
        margin-top: 10px;
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
        margin-top: 10px;
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
    width: 100%;
    &--modules {
        display: flex;
        flex-wrap: wrap;
        &--item {
            padding: 10px;
            margin: 5px;
            border: solid var(--primary-color) thin;
            border-radius: 10px;
            background-color: var(--bg-color-secondary);
            -webkit-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
            -moz-box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
            box-shadow: 4px 4px 10px 10px rgba(13, 13, 13, 0.2);
            display: flex;
            justify-content: center;
            flex-direction: column;
            max-width: 250px;
            transition: 250ms;
            &--header {
                display: flex;
                justify-content: center;
                color: var(--primary-color);
                font-size: 20px;
            }
            &--description {
                display: flex;
                justify-content: center;
                color: var(--text-color);
            }
            &--actives {
                display: flex;
                justify-content: center;
                button {
                    background: none;
                    padding: 10px;
                    margin: 5px;
                    border-radius: 10px;
                    border: solid var(--primary-color) thin;
                    color: var(--primary-color);
                    transition: 500ms;
                }
                :hover {
                    cursor: pointer;
                    background-color: var(--primary-color);
                    color: var(--bg-color-secondary);
                    transition: 500ms;
                }
            }
            &:hover{
            transform: scale(1.1);
            margin:0 10px 0 10px;
            transition: 250ms;

            }
        }
        

    }

}
</style>