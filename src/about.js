let content = document.querySelector("#content");
export function aboutPage(){
    let about = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = "About";
    let p = document.createElement("p");
    p.textContent = "The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    about.append(h2, p);
    content.appendChild(about);
}