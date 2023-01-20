const menus = document.querySelector(".menus");
const menu1 = document.querySelector(".menu-navegacion");

//console.log(menu1);
//console.log(menus);

menus.addEventListener("click",()=> {
    menu1.classList.toggle("spread")
});

//window.addEventListener("click",()=>{
  // if(menu1.classList.contains("spread")
   //&& e.traget != menu1 && e.target != menus){
    //menu1.classList.toggle("spread")

   //}
//})