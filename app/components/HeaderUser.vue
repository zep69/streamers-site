<template>
    <div class="header-user">
        <div class="header-user--row-btn">
            <button class="menuBtn" @click="openDrawer">
                <BaseIcon class="menuBtn--icon" icon="mdiMenu" size="40"/>
            </button>
            <button class="menuBtn">
                <BaseIcon class="menuBtn--icon" icon="mdiExitToApp" size="40"/>
            </button>
        </div>
    </div>
    <div class="nav-drawer" >
        <div>
            <div class="nav-drawer--list" v-for="item in pages">
                <button class="nav-drawer--list--btn">
                    <BaseIcon :icon="item.icon" size="24" style="margin-right: 10px;"/>
                    {{ item.name }}
                </button>
            </div>
            
        </div>
            
    </div>
</template>

<script setup lang="ts">
 const drawer = ref<boolean>(false)
 const { $gsap } = useNuxtApp()
 onMounted(()=>{
    $gsap.set('.nav-drawer', {
        x:-250
    })
 })

 type Page = {
    name : string,
    route : string,
    icon : string
 }

 const pages = ref<Page[]>([
    {
        name:'Мой профиль',
        route: '/user/profile',
        icon: 'mdiAccount'
    },
    {
        name:'Подписки',
        route:'/user/subs',
        icon:'mdiPlaylistCheck'   
    },
    {
        name:'Все стримеры',
        route :'/user/streamers',
        icon: 'mdiTwitch'
    }
 ])

 function openDrawer(): void {
    drawer.value = !drawer.value
    if(drawer.value){
        $gsap.to('.nav-drawer',{
            x:0,
            duration:1,
            ease:'power2.inOut'
        })
    }else{
        $gsap.to('.nav-drawer',{
            x:-250,
            duration:1,
            ease:'power2.inOut'
        })
    }

 }
</script>

<style scoped lang="scss">
.nav-drawer {
    height: 400px;
    background-color: var(--bg-color-secondary);
    width: 200px;
    margin: 10px 0 0 10px;
    border-radius: 15px;
    &--list {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 10px;
        
        &--btn {
            background: none;
            border: none;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            font-size: 20px;
            padding: 5px;
            border-radius: 3px;
            width: 100%;
            transition: 500ms;
        }:hover{
            cursor: pointer;
            background-color: rgb(27, 27, 27);
            transition: 500ms;
        }
    }
   
}
.header-user {
    background-color: var(--bg-color-secondary);
    height: 70px;
    border-radius: 20px;
    margin: 5px 10px 0 10px;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    &--row-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.menuBtn {
    background-color: none;
    background: none;
    border: none;
    border-radius: 25%;
    padding: 5px;
    &--icon{
        color: var(--primary-color);
    }
    transition: 500ms;
}
.menuBtn:hover {
    cursor: pointer;
    background-color: rgb(27, 27, 27);
    transition: 500ms;
}
</style>