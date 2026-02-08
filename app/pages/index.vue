<template>
    <div style="margin-top: 20px;padding-left: 20px;padding-right: 20px;" >
        <Header class="head"/>
        <div class="body-main">
            <div class="hero"">
                <div class="hero-inner">
                  <h2 class="box-h">Добро пожаловать на сайт!</h2>
                  <span class="box-s">Сайт для интеграции с Twitch, даст зрителям возможность взаимодействовать с трансляцией стримера</span>
                </div>
                <div>
                  <div style="margin: 0 0 0 50px;" class="img-wrapper">
                    <img src="../assets/static/photo_2025-11-24_12-49-45.jpg" @click="changeImg(true)"  height="700" class="img-main layer layer--2">
                    <img src="../assets/static/photo_2025-11-24_12-50-01.jpg" @click="changeImg(false)" height="700" class="img-main layer layer--1">
                  </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const view = ref<boolean>(false)

const { $gsap } = useNuxtApp()

function changeImg(type: boolean): void{
  if(!type){
      $gsap.to('.layer--1', {
      zIndex:3,
      duration:1,
      x:-80,
      y:-40,
      scale:1,
      ease:'power2.inOut'
    })
    $gsap.to('.layer--2', {
      zIndex:1,
      duration:1,
      x:80,
      y:40,
      scale:0.95,
      ease:'power2.inOut'
    })
    
  }else{
      $gsap.to('.layer--2', {
      zIndex:3,
      duration:1,
      x:0,
      y:0,
      scale:1,
      ease:'power2.inOut'
    })
    $gsap.to('.layer--1', {
      zIndex:1,
      duration:1,
      x:0,
      y:0,
      scale:0.95,
      ease:'power2.inOut',

    })
  
}
}

onMounted(async() => {
  $gsap.set('.fade-up', {
    opacity: 0,
    y:40
  })
   $gsap.set('.box-h', {
    opacity: 0,
    x: -100,
  })
   $gsap.set('.box-s', {
    opacity: 0,
    x: 100,
  })
 $gsap.set('.head', {
    opacity: 0,
    y: -100,
  })
  $gsap.set('.img-main', {
    x:1200,
    opacity:0
  })


  $gsap.utils.toArray<HTMLElement>('.fade-up').forEach(el => {
    $gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  })
  const tl = $gsap.timeline()
  tl.to('.head', {
    y:0,
    opacity:1,
    duration: 1,
    ease: 'power2.inOut'
  })
  .to('.box-h', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut'
  }).to('.box-s', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut'
  }, '-=0.4')
  .to('.img-main',{
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut'
  },'<')
 
})
</script>

<style scoped lang="scss">
.body-main{
    padding: 10px 20px 10px 20px;
}
.body-main h2{
    color: var(--primary-color);
    font-size: 30px;
}
span{
    color: var(--text-color-secondary);
    font-size: 18px;
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.hero-inner {
  width: 100%;
  max-width: 400px;
}

.img-wrapper {
  position: relative;
}

.layer {
  position: relative;
  &--1 {
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 80px;
    transform: scale(0.95);
  }
  &--2 {
    z-index: 2;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(50, 51, 52, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(50, 51, 52, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(50, 51, 52, 0.2);

  }
}
.img-main {
  border-radius: 60px;
}
</style>