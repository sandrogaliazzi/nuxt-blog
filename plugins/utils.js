import Vue from "vue"

Vue.mixin({
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(date).toLocaleDateString("pt-BR", options);
        }
    }
})