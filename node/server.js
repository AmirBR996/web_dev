// npm init for package
// npm i express 
import express from 'express'
import http from 'http'
import userRoutes from "./routes/user.routes.js"
// express app instance
const app = express()

app.use(express.json()) 

// http server
const server = http.createServer(app)

app.use('/users',userRoutes)
server.listen(8000 , ()=>{
    console.log("server is running at http://localhost:8000")
})
// req.body => data
// req.params <= object


