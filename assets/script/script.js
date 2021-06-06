const Greeting = {
  data() {
    return {
      greeting: 'Hello, world!'
    }
  },
  mounted() {

  }
}

Vue.createApp(Greeting).mount('#app')
