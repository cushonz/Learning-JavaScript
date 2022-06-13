/**
 * Module built to webscrape pokemon data
 */
const Pokemon = require('../pokemon.js');
const Move = require('../moves');
const axios = require("axios");
const cheerio = require("cheerio");
const math = require("math");

/**
 * Retrives all moves a given pokemon can learn
 * @param pokemon a Pokemon object
 * @returns {*[]} List of moves the pokemon can learn
 */

function getMoves(pokemon){
    // URL to scrape
    const URL = encodeURI('https://pokemon.fandom.com/wiki/'+pokemon.name);
    let learnable = [];
    let lvl, name, power, accuracy, PP, type, category;

    axios.get(URL).then((response) => {
        const $ = cheerio.load(response.data);
        let moves = $('td').text().split("\n");
        for (let i = 92; i < moves.length;){
            lvl = moves[i];
            name = moves[i+1];
            power = moves[i+2];
            accuracy = moves[i+3];
            PP = moves[i+4];
            type = moves[i+5];
            category = moves[i+6];

            let newMove = new Move(lvl, name, power, accuracy, PP, type, category);
            if (newMove.level.length > 3){
                return learnable;
            }
            else
                learnable.push(newMove);
            i+=7;
        }
    })
}

/**
 * Populates given array with pokemon data
 * @param URL URL for pokedex info, use bulpabedia page
 * @param pokedex Array to push pokemon objects into
 */

function fillDex(URL, pokedex){
    axios.get(URL).then((response) => {
        const $ = cheerio.load(response.data);
        let title = $('td');
        const pokeArr = title.text().split('\n');
        let dexNumb,name,type1,type2;
        let mon;

        // Loop over the length of the Pokemon data received from axios request

        for (let i = 14; i < pokeArr.length; i++){

            dexNumb = pokeArr[i];
            name = pokeArr[i+2];
            type1 = pokeArr[i+3];
            type2 = pokeArr[i+4];
            mon = new Pokemon(name,type1,type2,dexNumb);
            pokedex.push(mon);
            i+=6;
        }

        for (let mon = 0; mon < pokedex.length-1; mon++) {
            pokedex[mon].learnable = getMoves(pokedex[mon]);
        }
        console.log(pokedex[0].learnable);
    });

}



// Pokedex to fill
const gen1dex= []
// Populate poked
fillDex("https://pokemon.fandom.com/wiki/List_of_Generation_I_Pok%C3%A9mon",gen1dex);




