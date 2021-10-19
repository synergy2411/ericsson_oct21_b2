class Animal{
    constructor(species, legs){
        this.species = species;
        this.legs = legs
    }

    getDetails(){
        return `Hey, this is ${this.species}, I'm having ${this.legs} legs!`
    }
}

export const MAGIC_NUMBER = Math.round(Math.random()*1000);

export function getDailyFortune(){
    return `It's lucky day today`
}

export default Animal;

// export default MAGIC_NUMBER;