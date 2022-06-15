<template>
  <div class="notify-area">
    <div class="notification">
      <div class="columns">
        <div class="column is-8">
          Этот сайт использует <fa :icon="['fas', 'cookie-bite']" />, потому что без куков нельзя!
        </div>
        <div class="column is-4">
          <button class="button close-note my-btn">
        <span class="icon is-small">
          <fa :icon="['fas', 'check']" />
        </span>
            <span>Приемлимо</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Notification"
}
</script>

<style scoped>
@font-face {
  font-family: 'Notify'; /*a name to be used later*/
  src: url('../assets/fonts/Monsterrat.ttf'); /*URL to font*/
}

  .notify-area {
    font-family: Notify, sans-serif;
    position: absolute;
    bottom: 5px;
    left: calc(50% - 250px);
    width: 500px;
    color: #FFF7CC;
    z-index: 1001;
  }

.notification {
  background-color: rgba(0,0,0,0.3);
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  animation-delay: 3s;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
