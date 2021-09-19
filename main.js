// Datatypes
// 1)Primitive Datatype
// 1.string -"sravan" 'kumar'  '94949'
// 2.Number-751999,982475
// 3.boolean-"true","false"
// 4.null-null value  but its type is of object not null
// 5.unsigned- without declaring a value to the variable and by accessing the variable then it displays as unsigned
// 6.symbol-it is a symbol later we will know

// 2)Referrential Datatype
// 1.arrays- name=["sravan","kumar","reddy",546],a=[2,4,5,6,7,10]
// 2.functions-function functionname(parameters);
// 3.objects-it consists of collections of data or properties

// Hoisting

// 1.string
var a="sravan";
console.log(a);
console.log(typeof(a));
// 2.number
var b=5;
console.log(b);
console.log(typeof b);
// 3.boolean
var c="true";
console.log(c);
console.log(typeof c);
// 4.null
var d=null;
console.log(d);
console.log(typeof d);
// 5.unsigned
var e;
console.log(e);
console.log(typeof e);



// Hoisting
console.log(f);
var f=10;
console.log( f);


console.log(5*5);

// arrays
var fruit=['banana','apple','guava','grape','pineapple','lemon'];
fruit.push("Watermelon");
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.unshift("custardapple");
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.splice(3,0,"sapota");
console.log(fruit);


fruit.splice(3,1);
console.log(fruit);
fruit.splice(3,1);
console.log(fruit);
fruit.splice(3,1);
console.log(fruit);

fruit.slice(1);
new_fruit=fruit.slice(1);
console.log(new_fruit);


console.log(fruit.length);

// fruit.reverse();
console.log(fruit);

var c=new_fruit.concat(fruit);
console.log(c);


console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit[5]);


var xyz=["abdfd","bcdgsd","cddfgds","dfdfgsd","fefdv","ghegfsd","jhdfd"]
for (var i=0;i<=xyz.length-1;i++ ){
    console.log(xyz[i]);
}


// functions
function add(i,j,k,l){
   g=i*j*k+l;
   return g;
}

console.log(add(10,9,8,7));

var sravan={
    name: "kumar",
    age: 22,
    mobile_no: 8919113963,
    no: "7288039023",
    address: {
        city: "udayagiri",
        district: "nellore",
        pin_code: 524236,
    }
};
console.log(sravan.address.city);
console.log(sravan.address.district);
console.log(sravan['address']["pin_code"]);
console.log(sravan['address']['city']);


var student1=sravan;
console.log(student1);
student1.grade="a grade";

console.log(sravan);


var a="5";
var b=a;
var b=10;
console.log(a);

// function within the object is called is called method
var n ={
    name: "sravan",
    age: 42,
    print : function(){
        console.log(srav);
    },
    time: [0,30,70,100],
}

console.log(n.print);
console.log(n.time);










// Javascript is most popular programming language and it is embedded using script tag
// THe V8 engine is behind to run the js in browser
// There were two types of Datatypes in Javascript
Primitive 
1)string
var a = "sravan";
console.log(a);
console.log(typeof a);

2)number
var b = 2345;
console.log(b)
console.log(typeof b);

3)boolean
var c=true/false;
console.log(c)
console.log(typeof c);

4)Null
var d = null;
console.log(d)
console.log(typeof d)

5)Undefined
var e;
console.log(e)
console.log(typeof e)

6)Symbol
var f = '$';
console.log(f)


// Operators: Arithmetic, assignemnt,comparison,equality,logical(&&,||,!)
var x=5;
var y=7;
var z= x+y;
var z=x-y;
var z=x%y;
var x==y;

// Hoisting
console.log(g);
var g = 23;


Referrential
1)Functions
function function_name() {
    // statements
    return statements;
}

// function expression
const abc = function(a) {
    // statements
    return statement;
}


// objects
// function within an object is called METHOD
let person = {
    name = "sravan",
    age = 23,
    // address = "udayagiri","Nellore",
    address = {
        city : "nellore",
        state : "AP",
        postalcode : 524236
    }
};

console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person.address.city);
console.log(person.address.state);
console.log(person['address']['city']);
console.log(person.['address']['state']);

let person1 = person;
console.log(person1);

let person1.grade = 'A grade';
console.log(person);

let person.grade = 'B grade';
console.log(person);


// Array
const array1 = ["mango","grape","apple","sravan",23, 45, "guava"];
console.log(array1[0]);
console.log(array1[4]);

// Array methods
// push
console.log(array1.push("custard-apple"));

// pop
console.log(array1.pop("Custard-apple"));

// Unshift
console.log(array1.unshift("cherrys"));

// shift
console.log(array1.shift("cherrys"));

// Splice
console.log(array1.splice(2,0,"pine-apple","chocolate","ice-cream"));

// slice
const array2 = array1[1];
console.log(array2);

// reverse
array1.reverse();

// concat
var conca = array2.concat(array1)
console.log(conca);



// ES6 - Echma Script also known modern javascript.
// less code, reusability, easy to use,
// javascript is distributive language
var - var can be hoised. It does not consists of blockscope.
let and const cant be hoisted. It consists of blockscope.

function es6() {
    var a = 10;
    console.log(a);
    if(true) {
        let a=20
        console.log(a);
    }
    console.log(a);
}
es6();



es6 arrow functions to solve the binding problems.
function add(a,b){
    return a+b;
}
add(4,5);

// function expression
const a = function(a,b){
    return a+b;
}
a(4,6);

// arrow function
const abc = (a,b) =>{
    return a*b;
}

// arrow function in one statement
const abc = (a,b) => a+b;
let res = abc(4,6);
console.log(res);


// string concatenation
var a = "hi"
var b = "sravan";
var c = "Happy bday";
let wholestring = c + b + a;
let message = a + b + c;

// string laterals
var a = "hi";
var b = "sravan";
var c = "Happy bday";
let message = `$[a] $[b] $[c] Enjoy the day, stay blessed`;
console.log(message);


// Arrays
const array =[2,3,4,5,6,77]
const arr2 = [];
for(let i=0;i<array.length-1; i++){
    console.log(array[i]*2);
    // arr2 = array *2;
    // console.log(arr2);
    arr2.push(array *2);
}
console.log(arr2);


// Array helper methods
Map, find, filter, forEach and reduce

// DOM
Dom - document object model
It acts like a barrier between the javascript and HTML, CSS

document    //It displays the whole present document
console.log(document);
document.title //It display the document title 
// we can the title name using
document.title = "basics-dom";
console.log(document.title);

// In dom various types of selectors are there.They are:
1.getElementById
2.getElementByTagName
3.getElementByClassName
4.querySelector
5.querySelectorAll

//getElementById
document = document.getElementById("demo");
// getElementByTagName
document = document.getElementsByTagName("h1");
// getElementByClassTagName
document = docuemnt.getElementByClassName("paragraph");
// querySelector
// limitation of query selector is when there were more number of same tags(e.g: p tags), it selects only the very first tag..It neglects or not prints the remaining tags;
document = document.querySelector("#demo");

document = document.querySelector("h1");

document= document.querySelector(".paragraph");



// querySelectorAll
// whereas in queryselector it access or displays all the tags in an array
document = document.querySelectorAll("h1");



// Creating a new element
var element = document.createElement("p");
var textnode = document.createTextNode("hello everyone");
element.appendChild(textnode);

// dom set attributes
// selecting the element by id
// var document = document.getElementById("demo")
// setting new attributes
// document.setAttributes("class","Click-btn")
// console.log(document);


// Navigation
// 1.children - array of elements
// 2.childNodes - (array of all the Nodes - text + elements)
// 3.firstChild - text node of that element
// 4.lastChild - last text node of that element
// 5.firstElementChild - first element
// 6.lastElementChild - last element
// 7.previousSibling - previous sibling next node
// 8.nextSibling -next sibling next node
// 9.previousElementSibling - previous sibling element
// 10.nextElementSibling - next sibling element
// 11.parentElement / parentNode - parent of an element 

let parentEl = document.getElementById("parent");
console.log(parentEl);

let parentEl1 = document.getElementById("parent");
console.log(parentEl1.firstChild);

let parentEl2 = document.getElementById("parent");
console.log(parentEl2.lastChild);

let parentEl3 = document.getElementById("parent");
console.log(parentEl3.children);

let parentEl4 = document.getElementById("parent");
console.log(parentEl4.childNodes);

let parentEl5 = document.getElementById("parent");
console.log(parentEl5.firstElementChild);

let parentEl6 = document.getElementById("parent");
console.log(parentEl6.lastElementChild);

let parentEl7 = document.getElementById("parent");
console.log(parentEl7.children[3]);

let midpara = document.getElementById("para");
console.log(midpara);

let midEl = document.getElementById("para");
console.log(midEl.nextElementSibling);

let midEl1 = document.getElementById("para");
console.log(midEl1.previousElementSibling);

let midEl2 = document.getElementById("para");
console.log(midEl2.parentElement);

// OBJECT DESTRUCTUTRING
const citizen = {
    name: "sravan",
    place: "nellore",
    country:"india"
}
const {c1,c2,c3} = citizen;
console.log(citizen);



// array DESTRUCTUTRING
const num1 = ["sravan","kumar","reddy"]
const [first,second] = num1;
console.log(first,second)


// Spread operators for arrays
const str1 = "hai";
console.log(...str1);

const str1 = ["hai","hello","sravan","kumar"];
const str2 = ["reddy","what","are"]
console.log(...str1,...str2);

// spread operators for objects
const obj = {
    name: "sravan",
    age: 24,
};

const obj1 = {
    name: "kumar",
    age: 25,
    place:"nellore"
}
console.log(...obj,...obj1);


// Rest operator
const arr7 = [1,2,3,43,5]
const[one,...rest] = arr7;
console.log(one,rest)



//Array helper methods
  //1.ForEach()

  let arr=[1,5,6,7];
  let sum3=0;
  let arr1=arr.forEach((item)=>{
      sum3=sum3+item;
  });
  console.log(sum3)


  //map
  let arr2=[1,5,6,7];
  let arr3=arr2.map((item)=>{
      return item*5;
  });
  console.log(arr3);
  console.log(arr2)


  //3.filter
  let arr4=[1,5,6,7];
  let arr5=arr4.filter((item)=>{
      return item>3;
  });
  console.log(arr5)
  

  //reduce
const arr6  = [1, 4, 6, 9];
const req = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
},0);
console.log(req);
