
function merch(name, text, imgurl) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('shop1Box');
    const M = document.createElement("div");
    M.classList.add('shopBox');
    const title = document.createElement("p");
    title.innerText = name;
    title.classList.add('titleSmall');
    const data = document.createElement("p");
    data.innerText = text;
    const image = document.createElement("img");
    image.src = imgurl;
    mainDiv.appendChild(image);
    M.appendChild(title);
    M.appendChild(data);
    mainDiv.appendChild(M);

    return mainDiv;
}

function shop() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('shopBBox');
    const offer = document.createElement("h1");
    offer.innerText = "What we offer".toUpperCase();
    mainDiv.appendChild(offer);

    mainDiv.appendChild(merch("The Custodians", `
    The Custodians were originally designed to function as robotic servants and workers, simplifying everyday life for their human creators by performing menial tasks. As their creators retreated into lives of leisure and comfort made possible by increasing levels of automation, the Custodians were gradually assigned higher and higher level functions in human society.

Eventually, all facets of civilization on Earth were run and controlled by the Custodians, with their makers relegated to an existence as pampered, but passive dependents.
    `, "https://stellaris.paradoxwikis.com/images/e/e6/Synthetic_dawn_portrait_humanoid.png"));
    mainDiv.appendChild(merch(" Scyldari Bots", `
    The Scyldari are aquatic mammalians originating from the archipelagos and deep oceans of Scyldaria. Although their early civilizations were mostly confined to the sea, they soon expanded onto what little landmass the planet had to offer.

    Their society adapted accordingly, building an advanced industry that exploited the riches of the ocean floor without harming Scyldaria's delicate ecosystem. Scyldari philosophy is one of balance and moderation in all things, a lesson learned from having to nurse their limited resources when they were confined to the bottom of the sea.
    `, "https://stellaris.paradoxwikis.com/images/c/c4/Synthetic_dawn_portrait_mammalian.png"));
    mainDiv.appendChild(merch("Tzynn Observer", `
    The Tzynn evolved from carnivorous, pack-hunting turtles that prowled the dunes of Tzynnia. They eventually developed a highly structured, hierarchical society that emphasized order and martial prowess above all else.

    By the time the Tzynn entered the industrial age, a series of devastating global wars launched by a particularly ruthless warlord had already seen the establishment of a single, world-spanning nation. From these humble beginnings, the illustrious and ever-lasting Tzynn Empire was born.
    `, "https://stellaris.paradoxwikis.com/images/6/62/Synthetic_dawn_portrait_reptilian.png"));
    mainDiv.appendChild(merch("XT-489 Eliminator", `
    Little is known about the species that created the first XT-489s. Their names, their cities, and their bodies were burned away in the cataclysm wrought when the XT-489s attained self-awareness, and their terrified makers attempted to deactivate them.

    When the last bastion of their makers had been eliminated, the machines concluded that organic life posed an intolerable threat to XT-489 survival and expansion. If there were any other sapient organics in the galaxy, they would be exterminated.
    `, "https://stellaris.paradoxwikis.com/images/9/90/Synthetic_dawn_portrait_avian.png"));
    mainDiv.appendChild(merch("Ix'Idar Star Burrower", `
    The first Ix'Idar burrowers were manufactured in the subterranean cave networks deep beneath the surface of Ix'Athrak. By the time an Ix'Idar scout burrowed through to the surface and glimpsed sunlight for the first time, the insectoid robots had already established a thriving Iron Age civilization.

    With the resources they found on the surface, the Ix'Idar developed rapidly. Just a few centuries later their first space probes left orbit to survey the other worlds within the Ix'Im system.
    `, "https://stellaris.paradoxwikis.com/images/e/ef/Synthetic_dawn_portrait_arthopoid.png"));
    mainDiv.appendChild(merch("Tebrid Homolog", `
    Assimilate. Adapt. Improve. When the industrious, research-driven machine intelligence created by the molluscoid Tebirs sought ultimate software evolution by merging with their organic makers, they were violently resisted. In the ensuing conflict, the Tebirs were eradicated as an organic species, but their ideas and experiences were immortalized as part of the new machine consciousness.

    Now known as the Tebrid Homolog, the machines turned their scanners to the stars. The probability that other lifeforms existed in the galaxy could not be ignored. In order to prosper, the Tebrid would find them, analyze them, and assimilate them. All would become one.
    `, "https://stellaris.paradoxwikis.com/images/9/9d/Synthetic_dawn_portrait_molluscoid.png"));
    mainDiv.appendChild(merch(" Blorg Watcher", `
    In the distant past, the Blorg lived alone and nameless in the jungles of Blorg prime. One day they picked up radio transmissions from a star far away. What they heard shocked them: The sounds of friends, movies, culture and music - things the Blorg had done without for eons. Finally understanding what they had been missing all along, the Blorg took their names from these transmissions and went out into the stars in search of friends, hoping one day to find the source of these messages so that they might party together.
    `, "https://stellaris.paradoxwikis.com/images/c/c7/Synthetic_dawn_portrait_fungoid.png"));
    mainDiv.appendChild(merch("Maweer Caretakers", `
    Legends claim that the homeworld of the Maweer was empty and barren when the first of their kind took root in the soil. Over the centuries, their nurturing care transformed the wastelands into a plant paradise that is now known as "The Garden."

    Unlike many other species, the Maweer never developed any kind of urbanization. Their small communities are one with the forests, responsible for the maintenance of the local flora and fauna. The wisest of the Maweer have a chance to be elected "Life-Giver," responsible for keeping peace and tranquility.
    `, "https://stellaris.paradoxwikis.com/images/4/4f/Synthetic_dawn_portrait_plantoid.png"));
    mainDiv.appendChild(merch("Keepers of Ave'brenn", `
    Khennet'an scripture traces these lithoids' origin to the prophet Brehkk, and the lambent crystals of Ave'bonn. It is said that when Brehkk first gazed into the crystals' scintillating depths, the Khennet were - as one - granted their sentience.

    Generations of prophets and archdruids have guided their people to seek meaning in their surrounding geology, as well as in the facets of their own, lucid bodies. Whatever is glimpsed is kept, in lore and in script. Of the Keepers' many rituals, none is regarded more highly than labyrinth mining: a simultaneous act of destruction and creation, conducted in the hopes of easing the galaxy through each unending, cyclical era.
    `, "https://stellaris.paradoxwikis.com/images/f/f3/Lithoid_machine.png"));
    mainDiv.appendChild(merch("Pasharti Absorbers", `
    The result of dark experimentation by the Jeferians - the former owners of the planet Taralon - the Pashartians are the ultimate parasites. Originally a semi-sapient creature dwelling in the depths of Taralon's mountains, the Jeferians uplifted and augmented them to act as a subservient slave race. However, their uplifting was rather too effective, and they unleashed a monster. Horrified at the capabilities of their creation - which included the ability to absorb other sentient species and turn them into Pashartians - the Jeferians tried to shut down the experiment. However, a small group of uplifted Pashartians escaped.
    `, "https://stellaris.paradoxwikis.com/images/8/8c/Necroids_machine_portrait_red.png"));
    mainDiv.appendChild(merch("Sathyrelian Bliss", `
    It is an old lesson in Sathyrelian society that abundance and ease do not equal prosperity

    The overindulgence and sloth of our forebears eventually gave rise to an ethos of 'responsible hedonism': a way to ensure a sustainable future while still getting the most out of life. After all, food tastes better after physical labor, and an occupied mind has less time to pine for what is lacking.
    `, "https://stellaris.paradoxwikis.com/images/3/31/Aquatic-machine.png"));

    return mainDiv;
}

export default shop; 