<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/stay-home.png">
    <Summary/>
  </div>
</template>

<script>
import Summary from "./components/Summary";

export default {
  name: 'App',
  components: {
    Summary
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
