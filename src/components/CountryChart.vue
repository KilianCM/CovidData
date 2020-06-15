<template>
    <line-chart :chart-data="datacollection" width="600px" style="margin-bottom: 20px"></line-chart>
</template>

<script>
    import LineChart from './LineChart.js'

    export default {
        name: "CountryChart",
        components: {
            LineChart
        },
        data () {
            return {
                datacollection: null
            }
        },
        props: {
            data: {
                type: Array
            }
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: this.getDates,
                    datasets: [
                        {
                            label: 'Active cases',
                            backgroundColor: '#524FFF',
                            data: this.getActivesCases
                        }
                    ]
                }
            }
        },
        computed: {
            getActivesCases() {
                return this.data.map((value) => value.Active);
            },
            getDates() {
                return this.data.map((value) => value.Date.substring(0,10));
            }
        },
        mounted() {
            this.fillData();
        }
    }
</script>

<style scoped>

</style>