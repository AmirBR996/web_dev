// object
const uncle =  { 
    name : "susil",
    age : "infinity"
}
// object read
console.log(uncle.name)
console.log(uncle["age"])
// object item add
uncle.address = "ktm"
console.log(uncle)

// delete object item
delete uncle.name

// array
let numbers = [1,23,23,2]
console.log(numbers[0])

numbers.push(12,1222,122)

numbers.unshift(1233)

numbers.shift(44)

// splice
// array.splice(startIndex, deleteCount, item1, item2, ...);
const result = numbers.splice(1, 0,56,78,75)
console.log(result)

// function
function function_name(){
    // function body
}
// function with argument
function greet(user){
    console.log("hello " + user)
}
greet ("uncle")

// function return
function add(a,b){
    sum = a + b
    return sum
}

console.log(add(2,3))

const add = function(a,b){
      add = a+b
}

const add = (a,b) => {
    return a + b
}

// callback function
// higher order function
// anonymous function
