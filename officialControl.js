let bgImg = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg', 'images/bg4.jpg', 'images/bg5.jpg'];
let i = 0;
window.onload = function () {
    setInterval(function () {
        document.getElementById('bgImg').src = bgImg[i];
        i++;
        if (i > 4) i = 0;
    }, 3000)
}
let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 152, 150, 153, 154, 384, 487, 383, 382, 244, 483, 379, 243, 378, 484, 493];
let name = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise'
    , 'Chikorita', 'Mewtwo', 'Bayleef', 'Meganium', 'Rayquaza','Giratina','Groudon','Kyogre','Entei','Dialga','Registeel'
    ,'Raikou','Regice','Palkia','Arceus'];
let type = ['Grass-Poison', 'Grass-Poison', 'Grass-Poison', 'Fire', 'Fire', 'Fire-Flying', 'Water', 'Water', 'Water',
 'Grass', 'Spychic', 'Grass', 'Grass', 'Dragon-Flying','Ghost-Dragon','Ground', 'Water', 'Fire','Steel-Dragon','Steel'
 ,'Electric','Ice','Water-Dragon','Normal'];
let level = ['1', '2', '3', '1', '2', '3', '1', '2', '3', '1', 'legend', '2', '3', 'legend', 'legend', 'legend', 'legend', 'legend', 'legend', 'legend', 'legend'
,'legend','legend','legend'];
let image = ['Bulbasaur.png', 'Ivysaur.png', 'Venusaur.png', 'Charmander.png', 'Charmeleon.png', 'Charizard.png', 'Squirtle.png', 'Wartortle.png', 'Blastoise.png'
    , 'Chikorita.png', 'Mewtwo.png', 'Bayleef.png', 'Meganium.png', 'Rayquaza.png','Giratina.png','Groudon.png','Kyogre.png','Entei.png','Dialga.png','Registeel.png'
,'Raikou.png','Regice.png','Palkia.png','Arceus.png'];
let pokemon = [];
class Pokemon {
    constructor(id, name, type, level, image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.level = level;
        this.image = image;
    }
}
for (let i = 0; i < id.length; i++) {
    pokemon[i] = new Pokemon(id[i], name[i], type[i], level[i], image[i]);
}

let showLegend = '';
let showLevel1 = '';
let showLevel2 = '';
let showLevel3 = '';
let len = pokemon.length;
for (let i = 0; i < len; i++) {
    if (pokemon[i].level === 'legend') {
        showLegend += '  <div class="grid-item" ><img src="images/pokemon/' + pokemon[i].image + '" alt=""><br> <div id="name">' + pokemon[i].name + '</div><div id="type">' + pokemon[i].type + '</div> </div>'
    }
    if (pokemon[i].level === '1') {
        showLevel1 += '<div class="grid-item" > <img src="images/pokemon/' + pokemon[i].image + '" alt=""><br> <div id="name">' + pokemon[i].name + '</div><div id="type">' + pokemon[i].type + '</div> </div>'
    }
    if (pokemon[i].level === '2') {
        showLevel2 += ' <div class="grid-item" ><img src="images/pokemon/' + pokemon[i].image + '" alt=""><br> <div id="name">' + pokemon[i].name + '</div><div id="type">' + pokemon[i].type + '</div> </div>'
    }
    if (pokemon[i].level === '3') {
        showLevel3 += ' <div class="grid-item" ><img src="images/pokemon/' + pokemon[i].image + '" alt=""><br> <div id="name">' + pokemon[i].name + '</div><div id="type">' + pokemon[i].type + '</div> </div>'
    }
}
document.getElementById('grid-container1').innerHTML = showLegend;
document.getElementById('grid-container2').innerHTML = showLevel1;
document.getElementById('grid-container3').innerHTML = showLevel2;
document.getElementById('grid-container4').innerHTML = showLevel3;
