<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6-desktop is-12-touch is-offset-3-desktop my-content">
        <div class="box">ПРОЕКТЫ</div>
        <div class="card" v-for="post in posts" :key="post">
          <header class="card-header">
            <p class="card-header-title">
              <fa :icon="[post.icon.type, post.icon.name]" /> &nbsp; {{post.title}}
            </p>
            <a v-if="post.type === 'global'" target="_blank" :href=post.link class="card-header-icon" aria-label="more options">
              ЧЕКНУТЬ <span class="icon">
                  <fa :icon="['fas', 'angles-right']" />
                </span>
            </a>
            <router-link v-if="post.type === 'local'" target="_blank" :to=post.link class="card-header-icon" aria-label="more options">
                ЧЕКНУТЬ <span class="icon">
                  <fa :icon="['fas', 'angles-right']" />
                </span>
            </router-link>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      posts: [
        {
          title: "Мой GITHUB",
          type: 'global',
          link: "https://github.com/EzByMesa",
          icon: {
            type: 'fab',
            name: 'github'
          }
        },
        {
          title: "OBS UI: Игра не найдена",
          type: 'global',
          link: "https://codepen.io/ezbymesa-the-lessful/pen/bGYbMWM",
          icon: {
            type: 'fab',
            name: 'codepen'
          }
        },
        {
          title: "OBS UI: Ожидание + Чат",
          type: 'global',
          link: "https://codepen.io/ezbymesa-the-lessful/pen/GROKQoX",
          icon: {
            type: 'fab',
            name: 'codepen'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Rus'; /*a name to be used later*/
  src: url('../assets/fonts/NAMU-Pro.ttf'); /*URL to font*/
}
.box {
  text-align: right;
  font-family: Rus, serif;
  background-color: #d5dbb9 !important;
}

image {
  width: 100%;
  height: 100%;
}
.card {
  margin-bottom: 10px;
  background-color: #FFF7CC !important;
}
.my-content {
  background: rgb(255,197,126);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 2%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.3) 90%,rgba(0,0,0,0) 98%, rgba(0,0,0,0) 100%);
  outline-offset: 10px;
}
</style>
