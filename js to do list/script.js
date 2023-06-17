const item =  document.getElementById("item");
const box = document.getElementById("to-do-box");

// item.addEventListener("change", function(e){
//     console.log(e);
// })

const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addToDo(item.value);
    item.value = "";
})

const addToDo = (i) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${i} <i class="fas fa-times cross"></i>`;

    listItem.addEventListener("click", (e)=>{
        e.target.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    });
    box.appendChild(listItem);

    const fax = document.querySelectorAll("li")
    const data = [];
    fax.forEach((elem)=>{
        data.push(elem.innerText);
    })
    localStorage.setItem("list", JSON.stringify(data));

}   

(()=>{
   const items = JSON.parse(localStorage.getItem("list")); 
   if(items.length == 0){
    addToDo("create")
   }
   items.forEach((item)=>{
    addToDo(item);
   })
   
})()





















// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener(
//     "keyup",
//     function(event) {
//         if (event.key == "Enter") {
//             addToDo(this.value)
//             this.value = ""
//         }
//     }
// )

// const addToDo = (item) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//          ${item}
//         <i class="fas fa-times"></i>
//     `;

//     listItem.addEventListener(
//         "click",
//         function() {
//             this.classList.toggle("done");
//         }
//     )
//     listItem.querySelector("i").addEventListener(
//         "click",
//         function() {
//             listItem.remove()
//         }
//     )
//     toDoBox.appendChild(listItem)
// }