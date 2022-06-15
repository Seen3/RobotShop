import welcome from "./frontpage";
import shop from "./shoppage";
import contactus from "./contact";
import "./style.css";

function navbar(bigDiv) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("navbar");
    const home = document.createElement("div");
    const H = document.createElement("p");
    H.innerText = "Home";
    home.appendChild(H);
    const catalog = document.createElement("div");
    const C = document.createElement("p");
    C.innerText = "Catalog";
    catalog.appendChild(C);
    const contact = document.createElement("div");
    const cc = document.createElement("p");
    cc.innerText = "Contact-us";
    contact.appendChild(cc);
    home.addEventListener('click', () => { 
        console.log("Home Clicked");
        bigDiv.replaceChild(welcome(),bigDiv.childNodes[1]);
        })
    catalog.addEventListener('click', () => {
        console.log("Catalog Clicked");
        bigDiv.replaceChild(shop(),bigDiv.childNodes[1]);
        })
    contact.addEventListener('click', () => { 
        console.log("Contact Clicked"); 
        bigDiv.replaceChild(contactus(),bigDiv.childNodes[1]);
    })
    mainDiv.appendChild(home);
    mainDiv.appendChild(catalog);
    mainDiv.appendChild(contact);
    return mainDiv;
}

function body() {
    const bigDiv = document.createElement('div');
    bigDiv.appendChild(navbar(bigDiv));
    bigDiv.appendChild(welcome());
    return bigDiv;
}

document.body.appendChild(body());