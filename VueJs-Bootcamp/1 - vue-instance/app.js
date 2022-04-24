const app = Vue.createApp({
    data(){
        return {
            title : "VueJS Bootcamp 1.gün",
            content : "Lorem ipsum dolor sit amet ...",
            linkInfo : {
                url : "https://www.vuejs.org",
                title : "Vue Ana Sayfa",   
                target : "_blank",
                alt : "Vue JS",           
            },
            owner : "Poğaça"
        };
    },
}).mount("#app");
