
function merch(name, text, imgurl) {
    const mainDiv = document.createElement("div");
    const title = document.createElement("p");
    title.innerText = name;
    const data = document.createElement("p");
    data.innerText = text;
    const image = document.createElement("img");
    image.src = imgurl;
    mainDiv.appendChild(title);
    mainDiv.appendChild(data);
    mainDiv.appendChild(image);
    return mainDiv;
}

function shop() {
    const mainDiv = document.createElement("div");
    const offer = document.createElement("h1");
    offer.innerText = "What we offer";
    mainDiv.appendChild(offer);
    mainDiv.appendChild(merch("Humanoid", "Robots Resembling Humans", "https://stellaris.paradoxwikis.com/images/e/e6/Synthetic_dawn_portrait_humanoid.png"));
    mainDiv.appendChild(merch(" Mammalian", "Robots Resembling Mammals", "https://stellaris.paradoxwikis.com/images/c/c4/Synthetic_dawn_portrait_mammalian.png"));
    mainDiv.appendChild(merch("Reptilian", "Robots Resembling Reptiles", "https://stellaris.paradoxwikis.com/images/6/62/Synthetic_dawn_portrait_reptilian.png"));
    mainDiv.appendChild(merch(" Avian", "Robots Resembling Avians", "https://stellaris.paradoxwikis.com/images/9/90/Synthetic_dawn_portrait_avian.png"));
    mainDiv.appendChild(merch("Arthopoid", "Robots Resembling Arthopods", "https://stellaris.paradoxwikis.com/images/e/ef/Synthetic_dawn_portrait_arthopoid.png"));
    mainDiv.appendChild(merch("Molluscoid", "Robots Resembling Molluscs", "https://stellaris.paradoxwikis.com/images/9/9d/Synthetic_dawn_portrait_molluscoid.png"));
    mainDiv.appendChild(merch("Fungoid", "Robots Resembling Fungus", "https://stellaris.paradoxwikis.com/images/c/c7/Synthetic_dawn_portrait_fungoid.png"));
    mainDiv.appendChild(merch("Plantiod", "Robot Resembling Plant", "https://stellaris.paradoxwikis.com/images/4/4f/Synthetic_dawn_portrait_plantoid.png"));
    mainDiv.appendChild(merch("Lithoid", "Rocky Boi", "https://stellaris.paradoxwikis.com/images/f/f3/Lithoid_machine.png"));
    mainDiv.appendChild(merch("Reaper", "Death", "https://stellaris.paradoxwikis.com/images/8/8c/Necroids_machine_portrait_red.png"));
    mainDiv.appendChild(merch("Aquatic", "Fishes", "https://stellaris.paradoxwikis.com/images/3/31/Aquatic-machine.png"));
    return mainDiv;
}

export default shop; 