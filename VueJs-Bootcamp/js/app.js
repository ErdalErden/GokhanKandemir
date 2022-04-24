const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");


addBtn.addEventListener("click", () => {
    // alert(todoText.value);

    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.appendChild(listItem);
})








// const app = Vue.createApp({
//     data() {
//         return {
//             title : "VueJS Bootcamp 1.Gün",
//             content : "Lorem ipsum dolor sit amet ...",
//             eduflow : {
//                 title : "Müfredat ve açıklamalr için tılayınız",
//                 target : "_blank",
//                 url : "https://eduflow.kablosuzkedi.com",
//                 alt : "Müfredat"
//             },
//             owner : "Poğaça"
//         };
//     },
// }).mount("#app");