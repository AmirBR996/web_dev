import React from 'react'
import Register_Task from '../components/forms/form_register.jsx'
const Task_register= () => {
    return (
        <main className="h-full w-full flex justify-center items-center">
           <div className="border-5 border-red-700 py-5 px-6 min-h-140 min-w-120 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-center tracking-wider">Task Register</h1>
            <p className="mt-1 text-center text-[14px]">Enter your task details below</p>
            <Register_Task/>
           </div>
        </main>
    )
}

export default Task_register