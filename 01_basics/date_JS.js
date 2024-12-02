const myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let createMyDate = new Date("2024-01-14")
console.log(createMyDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createMyDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);

newDate.toLocaleDateString('default',  {
    weekday : "long",
})
