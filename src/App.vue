<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/stay-home.png">
    <SummaryPage/>
  </div>
</template>

<script>
import SummaryPage from "./components/SummaryPage";

export default {
  name: 'App',
  components: {
    SummaryPage
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
