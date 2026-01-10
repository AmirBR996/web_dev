// async
//timers
// setTimeout()
console.log("start");
const timer_id = setTimeout(() => { 
       console.log("Processing")
},2000);
// to stop time
clearTimeout(timer_id);
console.log("end")

let i = 0
let id = setInterval(() => {
    console.log(i++)
    console.log(i)
    if(i == 0){
        clearInterval(id)
    }
}, 1000)

// promise
// promise handling
// promise chain
const api = () => {
    return new Promise((resolve , reject) => {
        setTimeout( () => {
        const res = true
        if(res){
            resolve({message : "Promise Fulfilled"})
        }else{
            reject({message : "Promise rejected"})
        }
    })
    })
}
console.log(api())

api().then((data) => {
    console.log("then")
    console.log(data)
}).catch((error) => {
    console.log(error)
}).finally(() => {

})

fetch("https://500534234").then((res) => {
    return res.json();
})
.catch((error) => {
    return console.log(error)
})

// async await
// async function


