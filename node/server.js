// npm init for package
// npm i express 
import express, { response } from 'express'
import http from 'http'
// express app instance
const app = express()

app.use(express.json()) 

// http server
const server = http.createServer(app)
app.get('/', (request , response)=> {
    // response.send("hello world")
    response.json({
        message : "hello from server"
    })
})

server.listen(8000 , ()=>{
    console.log("server is running at http://localhost:8000")
})

// app.get('/amir', (request , response)=> {
//     // response.send("hello world")
//     response.json({
//         message : "hello its me amir"
//     })
// })

// CRUD users
// create
app.post('/patient' , (req ,res) => {
    console.log(req.body)
    res.status(201).json({
        message : "uncle dalal" ,
        data : req.body
    })
})

// req.body => data


