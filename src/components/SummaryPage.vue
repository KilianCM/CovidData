<template>
  <div class="summary">
    <h1>Welcome on CovidData</h1>
    <p>Last update : {{date | formatDate}}</p>
    <div class="wrapper">
      <div class="statistics" v-if="!loading">
        <a-statistic class="spaced" title="Total confirmed cases" :value="summaryData.TotalConfirmed" />
        <a-statistic class="spaced" title="Total deaths" :value="summaryData.TotalDeaths"/>
        <a-statistic title="Total recovered" :value="summaryData.TotalRecovered" />
      </div>
    </div>
    <CountriesTable></CountriesTable>
  </div>
</template>

<script>

import CovidApi from "../services/api/CovidApi";
import CountriesTable from "./CountriesTable";

export default {
  name: 'SummaryPage',
  components: {CountriesTable},
  data () {
    return {
      summaryData: {},
      date: "",
      loading: true
    }
  },
  mounted() {
    CovidApi.getSummary().then(data => {
      this.summaryData = data.Global;
      this.date = data.Date;
      this.loading = false;
      console.log(this.summaryData);
    }).catch(error => console.log(error));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  a {
    color: #42b983;
  }

  .wrapper {
    display: flex;
    justify-content: space-around;
  }

  .statistics {
    text-align: left;
    display: flex;
    justify-content: space-between;
    max-width: 60%;
    margin-bottom: 50px;

    .spaced {
      margin-right: 30px;
    }

  }
</style>
