let content = document.querySelector("#content")
export function homePage(){
    let hero = document.createElement("div");
    hero.classList.add("hero");
    let h1 = document.createElement("h1");
    h1.textContent = "Pizza Restaurant";
    let p = document.createElement("P");
    p.textContent = "very delicious pizza that fits every taste";
    let button = document.createElement("button");
    button.textContent = "menu"
    content.append(h1,p,button);
}