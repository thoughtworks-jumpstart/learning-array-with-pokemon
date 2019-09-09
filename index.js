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

console.log(pokemonsWithAttackHigherThan120);
