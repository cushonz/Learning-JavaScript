/**
 * Webscraping JavaScript Class
 */
const Pokemon = require('../pokemon.js');
const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon").then((response) => {
    const $ = cheerio.load(response.data);
    let title = $('td');
    var pokeArr = title.text().split('\n');
    console.log(pokeArr.at(30));
    let pokedex = [];
    let dexNumb,name,type1,type2;
    let mon;

    // populate the pokedex

    for (let i = 30; i < pokeArr.length/7;){

        dexNumb = pokeArr[i];
        name = pokeArr[i+2];
        type1 = pokeArr[i+3];
        type2 = pokeArr[i+4];
        mon = new Pokemon(name,type1,type2,dexNumb);
        pokedex.push(mon);
        i+=7;
    }

    // Print out entire Generation one pokedex!
    for (let j = 0; j < pokedex.length; j++)
        console.log(pokedex[j]);

});

