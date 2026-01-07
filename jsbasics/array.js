// forEach
const numbers = [43,4,5,6,7,8]
const callback = (value , index ,arr) => {
       console.log(value , index , arr)
}
numbers.forEach(callback)
// map
let res = numbers.map((value , index , arr)=>{
    return value*2
})
console.log(numbers)
//filter
//reduce