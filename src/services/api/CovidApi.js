import Vue from 'vue';

export default {
    getSummary() {
        Vue.http.get('summary').then(function(response) {
            console.log(response);
        });
    }
}