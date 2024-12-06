const mySym = Symbol("key1")
const JsUser = {
    name  : "Sais",
    "full name" : "Sais Shrestha",
    age : 25,
    isLoggedIn : false,
    [mySym] : "mySym1"
}
console.log(typeof JsUser);
console.log(JsUser.name);
console.log(JsUser["full name"]);//when a key is declared with "" then the way of accessing its value is by using a [" key "]
console.log(JsUser[mySym]); 
console.log(typeof mySym); // because we have initiated mySym as a symbol and also most importantly declared inside the [] inside the object JsUser, we will then get the output as Symbol, or else we would get Object. (Reason being, all the keys in JS are treated as Strings by default.)




