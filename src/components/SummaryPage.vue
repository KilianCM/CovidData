<template>
  <div class="summary">
    <h1>Welcome on CovidData</h1>
    <p>Last update : {{date | formatDate}}</p>
    <div class="wrapper">
      <global-statistics :loading="loading"
                        :confirmed="summaryData.TotalConfirmed"
                        :deaths="summaryData.TotalDeaths"
                        :recovered="summaryData.TotalRecovered">

      </global-statistics>
      <countries-table></countries-table>
    </div>
  </div>
</template>

<script>

import CovidApi from "../services/api/CovidApi";
import CountriesTable from "./CountriesTable";
import GlobalStatistics from "./GlobalStatistics";

export default {
  name: 'SummaryPage',
  components: {GlobalStatistics, CountriesTable},
  data () {
    return {
      summaryData: {},
      date: "",
      loading: false
    }
  },
  mounted() {
    this.loading = true;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }


</style>
