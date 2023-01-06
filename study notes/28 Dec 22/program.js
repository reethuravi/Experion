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


// 29 Dec 22
// Array can have multiple datatype.
// To define Arays
let numberarray = [1, 2, 3];
console.log(numberarray);

// To change elements
let numberarraynew = [1, 2, 3];
numberarray[0] = 100;
console.log(numberarraynew);

// push method is equal to append in list (in Python). push can use to add multiple elememts eg:arrayname.push(5,6,7);
let numberarraynewpush = [1, 2, 3];
numberarraynewpush.push(5);
console.log(numberarraynewpush);

// Array joining (for loop can also use)
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

firstArray.push(...secondArray); // automatically fetch elements of secondArray ... is the spreda operator. push modifies the stored data
console.log(firstArray);

// Concat is used instead of push. Here we don't want to use the spraed operator
let firstArrayConcat = [1, 2, 3];
let secondArrayConcat = [4, 5, 6, 7];
let thirdArrayConcat = firstArrayConcat.concat(secondArrayConcat); // Concat will not modifies the actual data. it takes a copy of the data.
console.log(thirdArrayConcat);

// functions

function greet(){
    console.log("Hellon world");

}
greet();

// if we call the function first and definning, it works

greeting();
function greeting(){
    console.log("Hello world");

}

//passing parameter
function add(x, y) {
    console.log(x + y);  

}
add(1,2);
//another way
function adding(x, y) {
    return x + y;
}
const res = adding(1,2);
console.log(res);

// 

function convertCasing(value) {
    return value.toUpperCase();
    
}
const r = convertCasing('Hello') ;
console.log(r.toLowerCase());

//3 ways to call function

function getFirstCharacter1(value){
    return value[0];
}
const getFirstCharacter2 = function (value2) {
    return value2[0];
};
const getFirstCharacter3 = (value2) =>{
    return value2[0];
};
console.log(getFirstCharacter1('Hello'));
console.log(getFirstCharacter2('Hello'));
console.log(getFirstCharacter3('Hello'));

// An Alternative for the third method
const getFirstCharacter = value2 =>value2[0];
console.log(getFirstCharacter('Hello'));
// to find even numbers
const arrayName = [1, 2, 3, 4, 5, 6];
const even = arrayName.filter(value => value % 2 == 0);
console.log(even); 

// fill method is used to replace all the values in the array 
const nums = [1, 2, 3, 4, 5, 6];
nums.fill(10);
console.log(nums); 

// To c heck whether an aaray contains an element or not

const n = [1, 2, 3, 4, 5];
if (n.includes(5)) {
    console.log("YES"); 
}

//to change the comma in toString method
const commato = [1, 2, 3, 4];
console.log(commato.toString());
console.log(commato.join('->'));

// create a matrix

const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix[0, 1]);
console.log(matrix[2, 3]);
console.log(matrix[4, 5]);
console.log(matrix);
