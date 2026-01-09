// let const
// template literal
// ``
// destructuring
let user ={
    name : "amir",
    email : "amirbbr@gmail.com",
    age : 20
}
// extracting from object
// let user_name = user.name
let {name:user_name , age} = user
// console.log(name)
console.log(user_name)

let arr = [1,2,3,4,5]
let [a,b,c] = arr

// spread & rest operator(..)
// expanding indiviual value in object or array
// rest
let {name ,...rest} = user
console.log(rest) //output:{ email: 'amirbbr@gmail.com', age: 20 }

const add = (...numbers) =>{
    return numbers.reduce((acc , curr) => { 
        return acc += curr} , 0)
}
output = add(12,23,3,4,45,5)
console.log(output) // output : 92

// spread (...)
let array =  [1,2,3,4,5]
console.log(...array)

let user1 = {password : "12345" , ...user}
console.log(user1)
// using math
console.log(Math.max(...arr))




