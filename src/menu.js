let content = document.querySelector("#content");
export function menuPage(){
    let menu = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = "Delicious menu";
    let ul = document.createElement("ul")
    let items = ["Peperoni Pizza", "Chicken Pizza", "Tuna Pizza"];
    items.forEach(item=>{
        let menuItem = document.createElement("li");
        menuItem.textContent = item;
        ul.appendChild(menuItem)
    })
    menu.append(h2,ul)
    content.appendChild(menu)
}