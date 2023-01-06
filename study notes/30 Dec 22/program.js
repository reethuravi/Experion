const  language = ['C', 'C++', 'Java', 'Python'];
language.forEach(element => {
    console.log(element);
});
// same can be written as language.forEach(element =>console.log(element));const  language = ['C', 'C++', 'Java', 'Python'];
const  language1 = ['C', 'C++', 'Java', 'Python'];
language1.forEach((element,index) => {
    console.log(element,index);
});
// Object is a collection of keys. It should be in multiple lines, ppty and value shoukd be separated by : and space. after ppty, no space to :  Do not end the last ppty with a , and after the curly braces do not forget to add ;

const person = {
    name: 'Reethu',
    age: 21//object =age
};
console.log(person);
console.log(person.name);
// To update
person.name = 'New name';
console.log(person.name);
// name can print in another way
console.log(person['name']);
// To add 
person.email = 'me@example.com';
console.log(person);

const personss = {
    name: 'Reethu',
    age: 21,
    experience: [
        {
            company: 'ABC',
            years: 2
    },
    {
        company: 'XYZ',
        years: 4
}
]};
console.log(personss.experience);
console.log(personss.experience[0]);
console.log(personss.experience[0].company);
//To print both company names
personss.experience.forEach(exp=>console.log(exp.company));


// Matrix creation
const matrix = [
    [1, 2],
    [3, 4],
];

// Addition
const matrix1 = [
    [1, 2],
    [3, 4],
];
const matrix2 = [
    [5, 6]
    [7, 8],
];

// Wait for the delay and  exectuted only once, swt Intervel is used to work contineously immediately after every givrn time limit. it will end only after entering cntrl+c
setTimeout(()=>{
    console.log('Code worked');
},5000);


// setInterval(()=>{
//     console.log('Code worked');
// },5000);

// setInterval() will work as a back ground activity. the next stmts will work first. After completing all the other stmts, getInterval will executed.

const student = {
    name:'Raju',
    mark1: 40,
    mark2: 50,
    total: function(){
        const extraMark = 5;
        console.log(this.mark1 + this.mark2 + extraMark); // extramark is ussed inside the function . so no need to use this . this is used to access the key inside the object if the function is also a key
    }
};
student.total();


const students = {
    name:'Student1',
    mark1:40,
    mark2:50
};
const copy = Object.assign({age:15},students);// Age :15 will be added to the object
copy.name ='New name';
console.log(students);
console.log(copy);

// If multiple objects have same key, it will take the last key frm the last object.
// Copy from multiple objects
console.log('Hello');
const studentsss = {
    name:'Student1'};
const mark= {
    mark1:40,
    mark2:50
};
const copyto = Object.assign({},studentsss,mark);
console.log(copyto);
// Destructuring
const studentMark= {
    name:'Student1',
    mark1:40,
    mark2:50
};
//instead of repeating student.name, student.mark1
console.log('hi');
const {name,mark1} = studentMark;
console.log(name);
//taking keys
console.log('hello');
const studentMarkKeys= {
    name:'Student1',
    mark1:40,
    mark2:50
};
const keys = Object.keys(studentMarkKeys)
keys.forEach(keys=>{
    console.log(keys);
})