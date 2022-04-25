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
            coords : {
                x : 0,
                y : 0,
                msg: null
            },
            owner : "Poğaça",
        };
    },
    methods : {
        changeTitle(parametre){
            this.title = parametre;
        },
        updateCoords(message, event){
            this.changeTitle(`${event.x}, ${event.y}`)
            this.coords = {
                x : event.x,
                y : event.y,
                msg : message,
            }
        }
    }
}).mount("#app");
