let num = 0;
const value =   document.querySelector(".value");
const btns  =   document.querySelectorAll(".btn");
//console.log(btns);

btns.forEach((btn) => {
   // console.log(btn);

   btn.addEventListener("click",(event)=>{
        console.log(event.currentTarget);
   });
});