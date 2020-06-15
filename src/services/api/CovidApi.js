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
    }
}