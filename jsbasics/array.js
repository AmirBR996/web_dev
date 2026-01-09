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
const  t_number = [12,23,22,45,32,5,6]
const evennumbers = t_number.filter(num => num % 2 == 0)
console.log(evennumbers)
//reduce
const r_numbers = [1, 2, 3, 4, 5];

const sum = r_numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15

