// rafce
import React from "react"
import { Login_form } from "../components/forms/login_form.jsx"
import {Link} from "react-router"

const LoginPage = () =>{
    return (
        <main className="h-full w-full flex justify-center items-center">   
           <div className="border-5 border-red-700 py-5 px-6 min-h-100 min-w-120 rounded-md ">
            <h1 className="text-3xl font-bold text-center tracking-wider">LOGIN</h1>
            <p className="mt-1 text-center text-[14px]">login to access your tasks</p>
            <Login_form/>
            <div className="mt-1">
            <p className="text-center">Don't have an account? 
             <Link to = "/register">
             <span className="text-red-500 italic font-semibold cursor-grab" >Register</span>
             </Link>
             </p>
             </div>
           </div>
        </main>
    )
}

export default LoginPage

// htmlFor : for which input the label is for