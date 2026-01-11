// exports.add = (a,b) =>{
//     return a+b
// }
// const sub = (a,b) =>{
//     return a-b
// }
// console.log(add(12,10)) exporting single function
// console.log(sub(12,10))

// module.exports = {
//     add , // exporting more than one function
//     sub 
// }

// esm
const add = (a,b) =>{
    return a+b
}

// named import/export
 export const sub = (a,b) =>{
    return a-b
}
//default
export default add