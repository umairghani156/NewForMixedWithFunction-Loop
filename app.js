/*var a = 0.1 + 0.2;
var b = 0.3;
console.log(a + b);
console.log(typeof 1);
console.log(('b' + 'a' + +'a'+'a').toLowerCase());
console.log(('m'+ + 'n' + + 'k').toLowerCase())
console.log( 3 > 2 > 1 > 0)

var index = 0;
while (index <= 10) {
    console.log(index);
    index++;
}
var i = 0;
do{
   console.log(i);
   i++;
}while (i <= 10);

var arr = ["Ahmed","shakeel","wazeer"];
var lastname = 'ShakeandBake';
let newArr = [];
console.log(newArr)
for (var i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
    const fullName = `${arr[i]} ${lastname}`;
    console.log("this is " + fullName);
    newArr.push(fullName);
    console.log(newArr);
}

console.log(arr);
console.log(newArr);

var studentsName = ["Habib","Shakir","Abdullah"];
var lastname = "Ali";
var emptyName = [];
for (var i = 0; i < studentsName.length; i++) {
    console.log(i);
    var addName = `${studentsName[i]} ${lastname}`;
    console.log(addName);
    emptyName.push(addName);
    // console.log(emptyName)
}
console.log(studentsName);
console.log(emptyName);

let gas = [50, 90, 100];
let food = [10, 40, 60];
 function calculateTotal(arr) {
    let total = 0;
    for (var i =0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
 }
 const gasTotal = calculateTotal(gas);
 console.log("gas total is " +gasTotal)
 const foodTotal = calculateTotal(food);
 console.log(` Food total is ${foodTotal}`);
 const ramdomTotal = calculateTotal([200, 4000, 500, 1]);
 console.log(ramdomTotal);

 console.log ({
    gas: gasTotal,
   food: foodTotal,
   random: ramdomTotal,
 })
 */
// var x = window.prompt("What is your name?", "Umair");
// var correctAnswer = "Vetican";
// if (x === correctAnswer) {
// alert("Correct!");
// }
// var num = 7;
// let num1 = 8;
// const total = num >= num1;
// total ? console.log(`${num} is greater than ${num1}`): total?console.log("it is same"): console.log("It's not same");
/*const globalNumber = 5;
function add(num1,num2) {
    const result = num1 + num2 + globalNumber;
    return result;
}
console.log(add(3,4));*/
/*const num = 100;
function myCalculate(para1,para2) {
    let num1 = 15;
    const result = (para1 + para2) / num1 ;
    return result;
}
console.log(myCalculate(50, 50));*/

/*const num = 2;
function myCalculate(para1, para2) {
    const num = 7;
    const result = para1 + para2 + num;
    return result;
}
console.log(myCalculate(10, 10));*/

// const globalNumber = 12;

// function myCalculate(para1, para2) {
//     const globalNumber = 15;
//     const result = para1 + para2 + globalNumber;
//     function add() {
//      const addResult = result * globalNumber;
//      console.log(addResult);
//     }
//     add();
//     return result;
// }
// console.log(myCalculate(4, 3));

// const globalNumber = 10;
// function myCalculate(num1, num2) {
//     const globalNumber = 20;
//     const result = num1 + num2 + globalNumber;
//     function multiply(){
//      const globalNumber = 100;
//      const multiplyResult = result * globalNumber;
//      console.log(multiplyResult);
//     }
//     multiply();
//     return result;
// }
// console.log(myCalculate(4, 3));
const globalNumber = 10;
function myCalculate(num1, num2) {
    const globalNumber = 20;
    const result = num1 + num2 + globalNumber;
    function multiply(num3, num4){
     const globalNumber = 100;
     const multiplyResult = (num3 + num4) * globalNumber;
     console.log(multiplyResult);
    }
    multiply(4, 3);
    return result;
}
console.log(myCalculate(4, 3));
const myNumber = 20;
function myComment(myNumber) {
    return `Welcome to the world ${myNumber.toUpperCase()}`;
}
function myFriend(myNumber, cb) {
 const myName = "Umair";
 console.log(`${cb(myNumber)}, my name is ${myName}`);
}
myFriend('Asim',myComment);
myFriend(`habib`,myComment);

function num(num1) {
    return `${num1} is greater than ${50}`;
}
function next(num1, call){
    const totalNumber = 100;
    console.log(`${call(num1)} is less than ${totalNumber}`);
}
next(70, num);

function friendName(name1 , name2) {
      return `${name1.toUpperCase()} and ${name2.toUpperCase()} are my best friends`
}
function myCall(name1, name2, cb) {
    const myName = "Umair";
    console.log(`${cb(name1,name2)} and my name is ${myName}`);
}
myCall("Habib","Asim",friendName);