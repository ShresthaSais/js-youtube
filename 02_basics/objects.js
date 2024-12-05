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
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);


