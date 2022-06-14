<template class="main-view">
  <Hero class="animated-swing-in-top-fwd"/>
  <Content />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {
  components: {
    Hero, Content, Footer
  }
}
</script>

<style lang="scss">
* {
  overflow: hidden !important;
}

html, body {
  width: 100%;
  height: 100%;

  -webkit-animation: color-change-5x 8s linear infinite alternate both;
    animation: color-change-5x 8s linear infinite alternate both;
}

@-webkit-keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}
@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}
</style>
