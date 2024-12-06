const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const userName = {
    email : "sais@gmail.com",
    userFullName : {
        firstName : "sais",
        lastName : "shrestha"
    }
}

// console.log(userName);
const objCombined  = {...obj1,...obj2} // using the spred operator to combine two objects
console.log(objCombined);

