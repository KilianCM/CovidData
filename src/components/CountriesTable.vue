<template>
    <div>
        <a-input placeholder="Search specific country" class="search-input" v-model="filter" />

        <a-table class="table"
                :columns="columns"
                :data-source="filteredCountries"
                :row-key="record => record.Slug"
                :loading="loading"
                @change="handleTableChange"
        >
        <span slot="action" slot-scope="text, record">
          <router-link :to="getRouterLink(record)">details</router-link>
        </span>
        </a-table>
    </div>

</template>

<script>
    import CovidApi from "../services/api/CovidApi";

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Country',
            width: '25%'
        },
        {
            title: 'Total confirmed cases',
            dataIndex: 'TotalConfirmed',
            sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
            sortDirections: ['descend', 'ascend'],
            width: '25%',
        },
        {
            title: 'Total deaths',
            dataIndex: 'TotalDeaths',
            sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Total recovered',
            dataIndex: 'TotalRecovered',
            width: '20%',
            sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            key: 'action',
            scopedSlots: { customRender: 'action' },
            width: '15%'
        },
    ];

    export default {
        name: "CountriesTable",
        data() {
            return {
                data: [],
                loading: false,
                columns,
                filter: ""
            }
        },
        methods: {
            loadData() {
                this.loading = true;
                CovidApi.getCountriesData().then(response => {
                    this.data = response;
                    this.loading = false;
                });
            },
            handleTableChange() {

            },
            getRouterLink(country) {
                return "/country/" + country.Slug;
            },
        },
        computed: {
            filteredCountries() {
                return this.data.filter((country) => {
                    return country.Country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
                });
            },
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped lang="scss">

    .table {
        min-width: 100%;
        max-width: 100%;
    }

    .search-input {
        width: 50%;
        margin-bottom: 10px;
    }

</style>