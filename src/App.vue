<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BlurredString>Blurred String, ...?</BlurredString>
    <DisturbedString>Disturbed String, ...?</DisturbedString>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BlurredString from './components/BlurredString.vue'
import DisturbedString from './components/DisturbedString'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BlurredString,
    DisturbedString
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
