// let a = prompt("write your name");
// //a = parseFloat(a);
// b = parseInt(a);
// console.log(a);


//Number,parseInt, parseFloat


// let firstName  = promp("write your name");
// console.log("your first name is", firstname)





let a = prompt("Write your expensive");
let totalIncome = 0
while(a != "done"){
    totalIncome += parseFloat(a);
    a = prompt("Enter your expense");
}
alert(`total income is ${totalIncome}`);