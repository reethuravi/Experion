console.log(`Hello World`);
console.log(`Hello`,`world`);
// To clear the console
console.clear(); 
// To create a variable
var i = 5;
// To display variable
console.log(i);

var firstName = `John`;
var lastName = `Doe`;
console.log(firstName, lastName);
// To print the data type
console.log(typeof firstName);

var data = `This is a string`;
console.log(data[0]);
// To find the legth of stored data
console.log(data.length);
// to find the last letter
console.log(data[data.length - 1]); 
// To change the casing . It will not affect the actual data. take a copy of data and modifies.
var result = data.toUpperCase();
console.log(result);
// To change the casing . It will not affect the actual data. take a copy of data and modifies.
var resultnew = data.toLowerCase();
console.log(resultnew);

var msg = `         hi      `;
console.log(msg);
// It will delete the spacing
console.log(msg.trim());
// It will delete the spacing from start
console.log(msg.trimStart());
// It will delete the spacing only from End 
console.log(msg.trimEnd());

// To separate, use the given command
var store = `   js for web`;
console.log(store.split(` `));

var storenew = `js for web`;
// To replace first space with underscore
var resul = storenew.replace(` `, `_`);
console.log(resul);
// TO replace all space with underscore
var resultnext = store.replaceAll(` `, `_`);
console.log(resultnext);

var storevalue = `       this is js     `;
// the given functions can either be in a single line or multiple lines.
var resvalue = storevalue
        .toUpperCase()
        .trim()
        .replaceAll(` `, `_`);
console.log(resvalue);
// To separate, and trim use the given command
// var store= '   js for web           ';
// console.log(store.trim().split(' '));

for(let i = 0; i < 5; i++)
{
    console.log(`Inside for loop`, i);
}

const firstNameOf = `John`;
const lastNameOf = `Doe`;
console.log(firstNameOf, lastNameOf);
// let values can be changee, but const values can not .
let side = `js`;
side = `php`;
console.log(side);

const num1 = 4;
const num2 = 5;
const resultadd = num1 + num2;
console.log(resultadd);

// Addition
const number1 = 4;
const number2 = 5;
const result1 = number1 + ` + ` + number2 + ` = ` + (number1 + number2);
console.log(result1);

// Addition
const numb1 = 4;
const numb2 = 5;
const result2 = `${numb1} + ${numb2} = ${numb1 + numb2}`;
console.log(result2);

// Joining strings

var firstString = 'java';
var lastString = 'script';

var r1 = firstString + ' ' + lastString;
var r2 = firstString.concat(' ', lastString);
var r3 = `${firstString} ${lastString}`;

console.log(r1);
console.log(r2);
console.log(r3);