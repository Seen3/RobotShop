function contactus(){
    const mainDiv=document.createElement("div");
    const title=document.createElement("h1");
    title.innerText="Please Contact";
    const image=document.createElement("img");
    image.src="https://stellaris.paradoxwikis.com/images/b/b5/Plantoid_08.png";
    mainDiv.appendChild(title);
    mainDiv.appendChild(image);
    return mainDiv;

}
export default contactus;