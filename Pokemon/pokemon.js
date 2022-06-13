/**
 * Class to store information about pokemon
 */
class Pokemon{

    constructor(name, type1, type2 = NULL,id) {
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.dexNumb = id;
    }


}

module.exports = Pokemon;