const { jsx } = require("react/jsx-runtime");

// console.log("Uncle is beautiful")
const paisa = 10;
let a = 19;
var money = 10; //we can reassign same variable name in var compared to let 
// var money = "uncle"; 

// datatype
//  boolean
let i = true
let j = false
// number
let num1 = 5
let num2 = 2.5
// string
let name = "susil"
let middlename = 'uncle'
let surname = `${name} uncle`  // support multiline
console.log(surname)
// undefined
let k;
// null
let l = null;

// operators
//arithmetics
let n1 = 20
let n2 = 40
add = n1 + n2
sub = n1 - n2
mul = n1 * n2
div = n1 / n2
reminder = n1 % n2

// assignment operator
//  =  ,+= , -= 
m1 += 10

//comparison
// output is always in boolean
// == , === , >= , <= , !=
a != b

// string:
console.log("Hello" + "World")

// logical operator
// && , || , !
console.log(!x)

//* ternary operator
// condition ? <statement 1> : <statement 2>
let age = 17
console.log(age <= 18 ? "adult" : "minor")
