// Data types in JS
/*
   4 types
   ------------
   1. number
   2. string
   3. boolean
   4. undefined

   Object/reference type

*/

/*


console.log(">>>> Data types Demo");

// var is ES-5

// number

var x = 349;
x = 76.54;

// string

var s1 = 'Praveen';
s1 = "Hyderabad";


// concatination

var trainer = 'Praveen'
var subjct = 'Java Script'

var s2 = trainer + ' is teaching ' + subjct;
var s3 = '2000' + 3000; // string
var s4 = Number.parseInt('2000') + 3000; // number

// Multi line strings

var s5='I am Praveen'+
       'I stay in Hyderabad'+
       'I love UI technology'

var trainer='James'
var subjct='React JS'
var loc='Zoonm Meeting'
var exp=14

var training=trainer+ ' is teaching '+subjct+' in '+loc+' and he is having '+exp+' years of experince'

// Back tick operator : to implement multi line strings
var s6= `trainer ${trainer} is teaching ${subjct} in ${loc} and he is having ${exp} years of experince`


// boolean -> true or false

var  showForm=false;

if(showForm){
   console.log("Code to show form");
}else{
   console.log("code to hide form");
}


// diffence bettween == and ===
// == is comparing only values/content. not types.

var x1="Abc"
var x2="Abc"

if(x1==x2){
  // console.log('true');
}else{
  // console.log('false');
}

var x3=1000
var x4="1000"

if(x3==x4){
   console.log('true');
   var s7=x3+x4; // string 10001000
   console.log(s7);
}else{
   console.log('false');
}

// === checks content/values and type

if(x3===x4){
   console.log('true');
}else{
   console.log('false');
}

*/

// undefined: default value of every primitive data type

var x; // undefined
x = 100; // undefined is overridden witth 100  in x


// Refferenced Data types / objects

/*
 types of object declarations: 2 ways
  
    1. using new operator
    2. using literal style
*/
// 1 . array
var y = [100, 200]; // object : every array is an object in java script
var cities = ['HYD', 'CHN', 'DEL']; // object
var data = ['Praveen', 1000, false]; // object

// accessing data fron array (. operator and [] subsscript)

// [] subsscript:
//console.log(data[0]); // here 0 is index. array index always starts with 0

/*
 types of object declarations: 2 ways
  
    1. using new operator
    2. using literal style
*/

// 1. using new operator

function Test() { // ES5 // here test is a class, coz starting letter of a function in upper case


}

function f1() { // every function act like object in java script

}

var emp = new Object(); // here Object is built in data Object in js
emp.name = 'Praveen'
emp.salary = 3844383
emp.id = 766;

var t = new Test();
var t1 = new f1();


//  2. using literal style :: {}

var person = { // JSON : Java script object notation (text based communication: ex: Mongo-DB)
   id: 'P001',
   name: 'Prveen',
   age: 79
}





































