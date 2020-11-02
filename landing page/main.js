
let navBtn = document.getElementById("navbtn");
let navBar = document.querySelector(".navbar");
let btn1 =document.querySelector(".navButton1");
let btn2 = document.querySelector(".navButton2");
let navButton = document.querySelector(".navButton");
let link = document.querySelector(".lnk");
let icone = document.querySelector(".icone");

window.addEventListener('DOMContentLoaded', ()=>{
   navBar.classList.remove("active");
   navBar.style.transitionDuration = "0s";
});

navBtn.addEventListener('click', ()=>{
       navBar.classList.toggle("active");
       navBar.style.transitionDuration = "1s";
       btn1.classList.toggle("btn1");
       btn2.classList.toggle("btn2");
       navButton.style.transitionDuration = ".2s";
});
 link.addEventListener("mouseover", ()=>{
     icone.classList.add("icone-show");
 })
