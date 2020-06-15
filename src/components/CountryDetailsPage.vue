<template>
    <div>
        <h1>Statistics of {{countryName}}</h1>
        <div class="wrapper">
            <global-statistics :loading="loading"
                               :confirmed="globalStats.Confirmed"
                               :deaths="globalStats.Deaths"
                               :recovered="globalStats.Recovered"
                               :confirmed-evolution="getConfirmedEvolution"
                               :deaths-evolution="getDeathsEvolution"
                               :recovered-evolution="getRecoveredEvolution"
            ></global-statistics>
        </div>
    </div>
</template>

<script>
    import CovidApi from "../services/api/CovidApi";
    import GlobalStatistics from "./GlobalStatistics";

    export default {
        name: "CountryDetailsPage",
        components: {GlobalStatistics},
        data() {
            return {
                data: {},
                globalStats: {},
                countryName: "",
                loading: false
            }
        },
        methods: {
            loadData() {
                this.loading = true;
                CovidApi.getCountryDetails(this.$route.params.slug).then(response => {
                    this.data = response;
                    this.countryName = response[0].Country;
                    console.log(response);
                    this.globalStats = this.getLastStatistics();
                    this.loading = false;
                });
            },
            getLastStatistics() {
                return this.data[this.data.length - 1];
            }
        },
        computed: {
            getConfirmedEvolution() {
                const delta = this.data[this.data.length - 1].Confirmed - this.data[this.data.length - 2].Confirmed;
                const up = this.data[this.data.length - 1].Confirmed >= this.data[this.data.length - 2].Confirmed;
                return { delta: delta, up: up };
            },
            getDeathsEvolution() {
                const delta = this.data[this.data.length - 1].Deaths - this.data[this.data.length - 2].Deaths;
                const up = this.data[this.data.length - 1].Deaths >= this.data[this.data.length - 2].Deaths;
                return { delta: delta, up: up };
            },
            getRecoveredEvolution() {
                const delta = this.data[this.data.length - 1].Recovered - this.data[this.data.length - 2].Recovered;
                const up = this.data[this.data.length - 1].Recovered >= this.data[this.data.length - 2].Recovered;
                return { delta: delta, up: up };
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        justify-content: space-around;
    }
</style>