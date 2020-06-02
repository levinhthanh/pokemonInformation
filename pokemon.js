const pokemon_main = document.getElementById('pokemon_main');
const pokemonLimit =100 ;

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await  fetch(url);
    const pokemon = await res.json();
    console.log("getPokemon -> pokemon", pokemon)

    showPokemon(pokemon);
}

function showPokemon(pokemon) {
    let pokemonElement = document.createElement("div");
    pokemonElement.classList.add('pokemon');
    let name = pokemon.name;
    let imageCover = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

    let pokemonHTML = `
        <div class="img-container">
        <img src="${imageCover}" alt="${name}">
    </div>
    `
    pokemonElement.innerHTML = pokemonHTML;

    pokemon_main.appendChild(pokemonElement);
}

let ran = Math.round(Math.random()*100);

for(let i = 1; i < pokemonLimit; i ++) {
    getPokemon(i);
}



// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
//         "x-rapidapi-key": "de2c2c621emshef7707c64598697p1bc323jsne381c6b10f5d"
//     }
// }
// let array1, array2;
// $.ajax(settings).done(function (response) {
//     console.log(response);
//     array1 = response;
// });


// getProducts = function () {
//     $.ajax({
//         url: 'https://pokeapi.co/api/v2/pokemon',
//         method: 'GET',
//         dataType: 'json',
//         contentType: 'application/json',

//         success: function (data) {
//             console.log(data);
//             array2 = data;
//         }
//     });
// };
// getProducts();

// function createPokeImage(pokeID, containerDiv){
//     let pokeImage = document.createElement('img')
//     pokeImage.srcset =    `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
//     containerDiv.append(pokeImage);
//   }