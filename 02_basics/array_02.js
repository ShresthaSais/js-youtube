const marve_lHeros = ["Thor", "Ironman", "Spiderman"]
const dc_Heros = ["superman", "flash","batman"]


// const combined_heros = new Array(console.log(marve_lHeros.concat(dc_Heros)));

// console.log(typeof combined_heros);

// console.log(combined_heros[3]);

const newHeros = [...marve_lHeros,...dc_Heros] // spread operator

console.log(newHeros);

const another_array = [1, 2, [4, 5 , 6], 7, 8, [4, 5]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Sais"))
console.log(Array.from("Sais"))
// interesting . notice how this gives us an empty array. We need to specify if we need an array of the keys or values
console.log(Array.from({name : "Sais"})) 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
