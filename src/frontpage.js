import "./style.css";
function welcome() {
    const maindiv = document.createElement('div');
    maindiv.classList.add('mainBox');
    const image = document.createElement('img');
    image.src = "https://stellaris.paradoxwikis.com/images/1/1b/Humanoid_03.png";
    image.alt = "RobotShopkeeper";
    const title = document.createElement('h1');
    title.innerText = "Welcome to Apex Command Core".toUpperCase();
    const info = document.createElement('p');
    info.innerText = "Our Machines are not a naturally evolved species but rather an artificial one that have been constructed with the required technology. When an empire first creates robots they'll create it in a way that matches the creator species.";
    const sidediv = document.createElement('div');
    sidediv.classList.add('sideBox');
    info.classList.add('text');
    maindiv.appendChild(image);
    sidediv.appendChild(title);
    sidediv.appendChild(info);
    maindiv.appendChild(sidediv);
    return maindiv;
}
export default welcome;