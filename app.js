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
*/
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