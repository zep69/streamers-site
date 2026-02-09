<template>
    <div class="statistic-item">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="statistic-item--info">
                <div class="statistic-item--avatar" :style="{ backgroundImage: `url(${props.avatar})` }"></div>
                <div class="statistic-item--info--name">{{ props.streamerName }}</div>
            </div>
            
            <div class="statistic-item--info">
                <div class="statistic-item--info--balance">
                    <span style="display: flex; align-items: center;">Ваш баланс: <h2 style="margin: 0 5px 0 5px;">{{ props.balance }}</h2> {{ props.balanceName }}</span>
                </div>
            </div>
        </div>
        <div class="statistic-item--body">
            <div>
                <div class="statistic-item--body--status">
                    <span style="display: flex; align-items: center;">Вы смотрели этого стримера   <h2 style="margin: 0 5px 0 5px;">{{ props.hoursWatched }}</h2>  часов</span>
                </div>
                <div class="statistic-item--body--status">
                    <div v-if="props.online">
                        <span >Стример сейчас онлайн</span>
                        <br>
                        <button class="primary-button" style="margin-top: 10px;">
                            Смотреть стрим
                        </button>
                    </div>
                    <div v-else>
                        <span >Стример сейчас оффлайн</span>
                    </div>
                </div>
            </div>
            <div class="statistic-item--body--module">
                <span class="statistic-item--body--status">Доступно на стриме:</span>
                <div v-for="module in props.availableModules" :key="module.name" class="statistic-item--body--module--item">
                    <div class="statistic-item--body--module--item--dote"></div>
                    <span style="font-weight: bold;">{{ module.name }}</span>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script setup lang="ts">

 type AvalivableModule = {
    name: string,
    description: string,
 }

 const props = withDefaults(defineProps<{
    streamerName: string,
    hoursWatched: number,
    avatar?: string,
    balance: number,
    balanceName?: string
    online: boolean,
    availableModules?: AvalivableModule[]}>(), 
    {
        avatar: 'https://s3.twcstorage.ru/cd58536-mhand-bucket/crm/22-223863_no-avatar-png-circle-transparent-png.png',
        balanceName: 'Points',
        online: false
    })
</script>

<style scoped lang="scss">
.statistic-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: var(--bg-color-secondary);
    border-radius: 10px;
    border: solid var(--primary-color) thin;

    &--avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }

    &--info {
        display: flex;
        align-items: center;

        &--name {
            font-weight: bold;
            font-size: 16px;
            color: var(--primary-color);
        }

        &--hours {
            font-size: 14px;
            color: var(--text-color-secondary);
        }

        &--balance {
            font-size: 14px;
            color: var(--text-color-secondary);
        }
    }

    &--body {
        display: flex;
        justify-content: space-between;
        background-color: rgb(27, 27, 27);
        border-radius: 15px;
        margin-top: 10px;
        padding: 10px;
        &--status {
            font-size: 14px;
            color: var(--text-color-secondary);
        }
        &--module {
            display: flex;
            max-width: 300px;
            flex-wrap: wrap;
            background-color: rgb(27, 27, 27);
            border-radius: 10px;
            padding: 10px;
            margin-top: 5px;
            &--item {
                color: var(--text-color-secondary);
                margin: 0 5px 0 5px;
                display: flex;
                justify-content: start;
                align-items: center;
                &--dote {
                    width: 10px;
                    height: 10px;
                    background-color: var(--primary-color);
                    border-radius: 50%;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>