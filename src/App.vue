<template>
  <div id="app">
    <router-link to="/">
      <img alt="Vue logo" src="./assets/stay-home.png">
    </router-link>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer v-if="apiVersion">
      <a-divider />
      Data from <a href="https://api.covid19api.com">https://api.covid19api.com</a> v{{apiVersion}}
    </footer>
  </div>
</template>

<script>
import CovidApi from "./services/api/CovidApi";

export default {
  name: 'App',
  data() {
    return {
      apiVersion: null
    }
  },
  mounted() {
    CovidApi.getApiVersion().then(response => {
      this.apiVersion = response;
    })
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    footer {
      padding: 20px;
    }
  }
</style>
