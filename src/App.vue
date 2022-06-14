<template class="main-view">
  <Hero class="animated-swing-in-top-fwd"/>
  <Content />
  <Footer />
  <div class="video-wrapper">
    <video playsinline autoplay muted loop>
      <source src="https://cdn.videvo.net/videvo_files/video/free/2015-02/large_watermarked/Blurry_Trees_Seamless_Loop_01_Videvo_preview.mp4">
      Your browser does not support the video tag.
    </video>
  </div>
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

video {
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -100;
}
.video-wrapper {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: multiply;
}

html, body {
  width: 100%;
  height: 100%;

  -webkit-animation: color-change-5x 8s linear infinite alternate both;
    animation: color-change-5x 8s linear infinite alternate both;
}

Hero, Footer {
  z-index: 1000;
}


@-webkit-keyframes color-change-5x {
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
