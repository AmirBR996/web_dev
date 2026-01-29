// rafce
import React from "react"
import { RegisterForm } from "../components/forms/register.form.jsx"

const RegisterPage = () =>{
    return (
        <main className="h-full w-full flex justify-center items-center">
           <div className="border-5 border-red-700 py-5 px-6 min-h-140 min-w-120 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-center tracking-wider">Create Account</h1>
            <p className="mt-1 text-center text-[14px]">To create account fill the form below</p>
            <RegisterForm/>
            <div className="mt-1">
            <p className="text-center">Already have an account? <span className="text-red-500 italic font-semibold">login</span></p>
             </div>
           </div>
        </main>
    )
}

export default RegisterPage

// htmlFor : for which input the label is for
