function contactus(){
    const mainDiv=document.createElement("div");
    mainDiv.classList.add('mainBox');
    const title=document.createElement("h1");
    const sidediv=document.createElement("div");
    title.innerText="Please Contact";
    sidediv.classList.add('sidediv');
    const details=document.createElement("p");
    details.innerText="Tree Man";
    const details2=document.createElement("p");
    details2.innerText="Lastagarvins Sector 3342";
    const image=document.createElement("img");
    image.src="https://stellaris.paradoxwikis.com/images/b/b5/Plantoid_08.png";
    sidediv.appendChild(title);
    sidediv.appendChild(details);
    sidediv.appendChild(details2);
    mainDiv.appendChild(sidediv);
    mainDiv.appendChild(image);
    return mainDiv;

}
export default contactus;