<template class="main-view">
  <Hero/>
  <Content />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
//import Notification from '@/components/Notification'

export default {
  components: {
    Hero, Content, Footer, /*Notification*/
  }
}
</script>

<style lang="scss">
*::-webkit-scrollbar {
  width: 0px;
}

body {
  background-image: url(assets/media/bg.gif) !important;
  background-size: cover !important;
  background-blend-mode: multiply !important;
  background-position: left, right !important;
  background-attachment: fixed, fixed !important;
}

html, body {
  width: 100%;
  height: 100%;

  -webkit-animation: color-change-5x 8s linear infinite alternate both;
    animation: color-change-5x 8s linear infinite alternate both;
}

.my-btn {
  margin-right: 5px;
  color: #FFF7CC !important;
  background-color: #ffffff00 !important;
  border: none !important;
  transition: 0.3s;
}
.my-btn:hover {
  border-radius: 10px;
  color: #FFF7CC !important;
  border: none !important;
  background-color: #15313a0f !important;
}

.is-active {
  border-radius: 10px;
  color: #FFF7CC !important;
  background-color: #15313a0f !important;
  transition: 0.3s;
}

@-webkit-keyframes color-change-5x {
  0% {
    background: #D8ADC8;
  }
  25% {
    background: #D8ADC8;
  }
  50% {
    background: #D8ADC8;
  }
  75% {
    background: #FFF7CC;
  }
  100% {
    background: #FFF7CC;
  }
}
@keyframes color-change-5x {
  0% {
    background: #AEA4C8;
  }
  25% {
    background: #D8ADC8;
  }
  50% {
    background: #9AB2BF;
  }
  75% {
    background: #FFF7CC;
  }
  100% {
    background: #C9C3A0;
  }
}
</style>
