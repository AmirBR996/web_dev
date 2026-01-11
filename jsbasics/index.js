// const add = require("./exporting_function.js")
// const {add,sub} = require("./exporting_function.js")
// console.log(add.add(10,20))
// if we are exporting more than one function than it comes as object

import x ,{sub} from "./exporting_function.js"
console.log(x(23,45))
console.log(sub(40,20))