//callback function
// function is a non primitive dataset
const parent = (child) =>{
    console.log("parent")
    child()
}
const child = ()=>{
    console.log("Child")
}
parent(child)
// ananynomus function create and destroy in same time
//one time call and we cant reuse later
parent(()=>{
    console.log("Child")
})

// higher order function
const add = (a,b) =>{
    return a+b
}

const simplify = (a,b,operation) =>{
   return operation(a,b)
}

output = simplify(5,2,add)
console.log(output)

result = simplify(2,3,(a,b)=>{
    console.log(a*b)
})

const multiplier = (factor)=>{
    const multiply = (a) =>{
        return factor * a
    }
    return multiply
}
const double = multiplier(2)
console.log(double(10))

const intothree = multiplier(3)
console.log(intothree(10))

// falsy :: false , null , undefined , 0 ,-0,NaN, "" => 
// true :: [] , {}
// conditional
// if-else
// if-if else-else
// switch
let choice = 1
// switch(day){
//     case 1 : 
//     console.log("sunday")
//     break
//     case 2:
//     console.log("monday")
//     break
//     case 3:
//     console.log("Tuesday")
//     break
//     case 4:
//     console.log("Wednesday")
//     break
//     case 5:
//     console.log("Thursday")
//     break
// }

// loops
// while
// do while
// for
// for in
let user = {
    name :"abc" , 
    password : "passwprd"
}
for(key in user){
    console.log(key)
}
// for of
list = [10,2,3,1]
for (value of list){
    console.log(value)
}