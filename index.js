const data = require("./pokemonData");

// 1. print out all the english name of all the pokemons
// try using for(let i =0; i < data.length; i++)
// for(let item of data)
// data.forEach

const loop1 = () => {
  for (let i = data.length - 1; i >= 0; i--) {
    console.log(data[i].name.english);
  }
};
// loop1();

const loop2 = () => {
  for (let item of data) {
    console.log(item.name.english);
  }
};
// loop2();

const loop3 = () => {
  data.forEach(item => {
    console.log(item.name.english);
  });
};
// loop3();

// 2. Map
const markedPokemons1 = data.map(item => {
  const newItem = {};
  newItem.id = item.id;
  newItem.name = item.name.english;
  return newItem;
});

const markedPokemons2 = data.map(function(item) {
  return {
    id: item.id,
    name: item.name.english,
  };
});

const markedPokemons3 = data.map(item => ({
  id: item.id,
  name: item.name.english,
}));

// console.log(markedPokemons1[0]);

// Lab2: Map
// Using map, return an array of pokemon with id, name.english, name.japanese, and type
/**
 * {
 *  id: 1,
 *  name: {
 *    english: "dinosaur"
 *    japanese: "恐竜"
 *  }
 *  type: ['ground']
 * }
 */
const pokemonsMap = data.map(item => {
  return {
    id: item.id,
    name: {
      english: item.name.english,
      japanese: item.name.japanese,
    },
    type: [...item.type],
  };
});

// console.log(pokemonsMap);

// Example for: Filter,
const pokemonsWithAttackHigherThan120 = data.filter(item => {
  if (item.base.Attack > 120) {
    return true;
  }
  return false;
});

// console.log(pokemonsWithAttackHigherThan120);

// lab3: Filter
// 1. return all pokemons with name.english.length > 8
const pokemonsWithLongName = data.filter(item => {
  if (item.name.english.length > 8) {
    return true;
  }
  return false;
});

// console.log(pokemonsWithLongName.length); // 36

const types = ["rock", "ice", "electic"];
// console.log(types.some(item => item === "flying"));

const firePokemons = data.filter(item => {
  return !!(item.type.length === 1 && item.type.some(val => val === "Fire"));
});

// console.log("pokemon with fire", firePokemons);

// lab4: return all pokemons that are type Psychic ONLY
const psychicPokemons = data.filter(pokemon => {
  return !!(
    pokemon.type.length === 1 && pokemon.type.some(val => val === "Psychic")
  );
});

// console.log("number of psychic type pokemons is ", psychicPokemons.length);

// Reduce

const numbers = [{}, 2, 3, 4, 5, 6, 7];
let total = 0;
numbers.forEach(number => (total = total + number));

const totalNumber = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

const sumAllSpAttackOfPsychicPokemon = psychicPokemons.reduce((acc, cur) => {
  return acc + cur.base.SpAttack;
}, 0);

const nameOfPsychicPokemon = psychicPokemons.reduce((acc, cur) => {
  acc.push(cur.name.english);
  return acc;
}, []);

const psychicPokemonNameAttack = psychicPokemons.reduce((acc, cur) => {
  acc[cur.name.english] = cur.base.SpAttack;
  return acc;
}, {});

// console.log("sumAllSpAttackOfPsychicPokemon", sumAllSpAttackOfPsychicPokemon);
// console.log("nameOfPsychicPokemon", nameOfPsychicPokemon);
// console.log("combineAttackOfPsychicType", psychicPokemonNameAttack);

/**
 if (fulfil condition) {
    modify the acc,
    return acc
  }
  return acc
 */
// Using reduce,
// - give me all pokemon name with SpDefence higher than 120 in array;
// - sum all SpDefence of the water type pokemons
const pokemonWithSpDefGt120 = data.reduce((acc, cur) => {
  if (cur.base.SpDefence > 120) {
    acc.push(cur.name.english);
    return acc;
  }
  return acc;
}, []);

// console.log(pokemonWithSpDefGt120);

const sumAllWaterPokemonSpDef = data.reduce((acc, cur) => {
  if (cur.type.some(type => type === "Water")) {
    return acc + cur.base.SpDefence;
  }
  return acc;
}, 0);

// console.log(sumAllWaterPokemonSpDef);

const numbers2 = [123, 21, 30];
const isAllNumGt20 = numbers2.every(num => num > 20);
// console.log(isAllNumGt20);

const methodChainSpDef = data
  .filter(pokemon => !!(pokemon.base.SpDefence > 120))
  .map(pokemon => pokemon.name.english);
// console.log(methodChainSpDef);

// using method chaining,
//  give the total Attack of all normal type pokemons
// filter type normal, reduce, add all attack,
const SumOfNormalPokemonAttk = data
  .filter(item => {
    if (item.type.some(type => type === "Normal")) {
      return true;
    }
    return false;
  })
  .reduce((acc, cur) => {
    return acc + cur.base.Attack;
  }, 0);

// console.log(SumOfNormalPokemonAttk);

// 1. changes the original array
// 2. you need to pass in a comparision function that returns a positive or negative number.
const numbersToSort = [1, 100000, 99, 77, 44];
const sortedNumberInAsc = [...numbersToSort].sort((a, b) => a - b);
const sortedNumberInDesc = [...numbersToSort].sort((a, b) => b - a);
// console.log(sortedNumberInAsc);
// console.log(sortedNumberInDesc);

// shift, unshift, pop, push
const newArray = [];
newArray.push(1);
newArray.push(2);
newArray.unshift(0);
newArray.unshift(-1);
console.log(newArray);

let lastItemInArray;
lastItemInArray = newArray.pop();
console.log("last item in array:", lastItemInArray);
console.log(newArray);

let firstItemInArray;
firstItemInArray = newArray.shift();
console.log("first item in array:", firstItemInArray);
console.log(newArray);
