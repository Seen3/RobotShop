function welcome() {
    const maindiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = "https://stellaris.paradoxwikis.com/images/1/1b/Humanoid_03.png";
    image.alt = "RobotShopkeeper";
    const title = document.createElement('h1');
    title.innerText = "Welcome to Apex Command Core";
    const info = document.createElement('p');
    info.innerText = "Our Machines are not a naturally evolved species but rather an artificial one that have been constructed with the required technology. When an empire first creates robots they'll create it in a way that matches the creator species.";
    maindiv.appendChild(image);
    maindiv.appendChild(title);
    maindiv.appendChild(info);
    return maindiv;
}
export default welcome;