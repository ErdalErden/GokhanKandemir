const app = Vue.createApp({
    data(){
        return {
            counter : 0
        }
    },
    methods : {
        inc(){
            this.counter++
        },
        dec(){
            this.counter--
        }
    }
}).mount('#app');