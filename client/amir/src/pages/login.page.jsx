// rafce
import React from "react"

const LoginPage = () =>{
    return (
        <main className="h-full w-full flex justify-center items-center">
           <div className="border-5 border-red-700 py-5 px-6 min-h-100 min-w-120 rounded-md ">
            <h1 className="text-3xl font-bold text-center tracking-wider">LOGIN</h1>
            <p className="mt-1 text-center text-[14px]">login to access your tasks</p>
            <div className="mt-10">
            {
                <form className="flex flex-col gap-4">
                    {/* First name */}
                  
                {/* Email */}
                <div className="flex flex-col gap-1" >
                    <label htmlFor="Email">Email</label>
                    <input 
                    className="border px-2 py-2.5 border-red-500 rounded-md  focus:outline-red-700"
                    id = 'Email' 
                    placeholder = "example@gmail.com"
                    type = "email"
                    required
                    />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="Password">Password</label>
                    <input 
                    className="border px-2 py-2.5 border-red-500 rounded-md  focus:outline-red-700"
                    id = 'Password' 
                    placeholder = "Enter Password"
                    type = "text"
                    required
                    />
                </div >
                {/* Submit */}
                <div className="w-full">
                    <button  className = "w-full bg-red-200 py-3.5 rounded-md cursor-pointer"type = "submit">Login</button>
                </div>
                </form>
            }
            
            </div>
            <div className="mt-1">
            <p className="text-center">Don't have an account? <span className="text-red-500 italic font-semibold cursor-grab" >Register</span></p>
             </div>
           </div>
        </main>
    )
}

export default LoginPage

// htmlFor : for which input the label is for