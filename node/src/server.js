// npm init for package
// npm i express 
import express from 'express'
import http from 'http'
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import {connectDb} from "./config/db.config.js"
// express app instance
const app = express()

app.use(express.json()) 

// database connection
connectDb()

// http server
const server = http.createServer(app)
 
// using users
app.use('/users',userRoutes)

// using auth
app.use('/auth',authRoutes)

server.listen(8000 , ()=>{
    console.log("server is running at http://localhost:8000")
})
// req.body => data
// req.params <= object


