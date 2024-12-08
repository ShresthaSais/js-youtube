// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }
// function addTwoNumbers(num1, num2){
//     return(num1 + num2);
    
// }

// addTwoNumbers(3, 4)


function loginUserName (userName){
    // if (userName === undefined)
    // return
    if (!userName)
        console.log("Please enter a username.");
    else 
    console.log(`${userName} just logged in`)

}


loginUserName("Sais")
// console.log(`${userName} just logged in`) 
// if I place the above code here then it just wont work. I tried to think about it and then realised the concept of variale scoping. It's just that when used outside the scope, JS does not recognize the varaible 'username' as its defined within the scope
