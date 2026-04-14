import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

let content = document.querySelector("#content")
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");
homePage()
homeBtn.addEventListener("click", ()=>{
    content.textContent = "";
    homePage();
})
menuBtn.addEventListener("click", ()=>{
    content.textContent = "";
    menuPage();
})
aboutBtn.addEventListener("click", ()=>{
    content.textContent = "";
    aboutPage();
})
