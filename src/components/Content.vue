<template>
  <router-view class="fade-in-fwd"/>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content"
}
</script>

<style scoped>
 .fade-in-fwd {
   -webkit-animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   animation-delay: 3.2s;
  }

 @-webkit-keyframes flip-in-hor-bottom {
   0% {
     -webkit-transform: rotateX(80deg);
     transform: rotateX(80deg);
     opacity: 0;
   }
   100% {
     -webkit-transform: rotateX(0);
     transform: rotateX(0);
     opacity: 1;
   }
 }
 @keyframes flip-in-hor-bottom {
   0% {
     -webkit-transform: rotateX(80deg);
     transform: rotateX(80deg);
     opacity: 0;
   }
   100% {
     -webkit-transform: rotateX(0);
     transform: rotateX(0);
     opacity: 1;
   }
 }


</style>
