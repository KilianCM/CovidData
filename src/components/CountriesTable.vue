<template>
    <a-table
            :columns="columns"
            :data-source="data"
            :row-key="record => record.CountryCode"
            :loading="loading"
            @change="handleTableChange"
    >
    </a-table>
</template>

<script>
    import CovidApi from "../services/api/CovidApi";

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Country',
            //sorter: true,
            width: '20%'
        },
        {
            title: 'Total confirmed cases',
            dataIndex: 'TotalConfirmed',
            //sorter: true,
            width: '30%',
        },
        {
            title: 'Total deaths',
            dataIndex: 'TotalDeaths',
            //sorter: true
        },
        {
            title: 'Total recovered',
            dataIndex: 'TotalRecovered',
            //sorter: true
        },
    ];

    export default {
        name: "CountriesTable",
        data() {
            return {
                data: [],
                loading: false,
                columns,
            }
        },
        methods: {
            loadData() {
                this.loading = true;
                CovidApi.getCountriesData().then(response => {
                    this.data = response;
                    this.loading = false
                });
            },
            handleTableChange() {

            },
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>

</style>