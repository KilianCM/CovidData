import Vue from 'vue';

export default {
    getSummary() {
        return Vue.http.get('summary').then(response => {
            return response.data
        });
    },
    getCountriesData() {
        return Vue.http.get('summary').then(response => {
            return response.data.Countries
        });
    },
    getCountryDetails(slug) {
        return Vue.http.get('total/country/' + slug).then(response => {
           return response.data
        });
    },
    getApiVersion() {
        return Vue.http.get('version').then(response => {
            return response.data
        });
    }
}