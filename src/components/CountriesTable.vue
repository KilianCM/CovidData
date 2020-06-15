<template>
    <div>
        <a-input placeholder="Search specific country" class="search-input" v-model="filter" />

        <a-table
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
        {
            title: 'Action',
            key: 'action',
            scopedSlots: { customRender: 'action' },
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

    .search-input {
        width: 50%;
        margin-bottom: 10px;
    }

</style>