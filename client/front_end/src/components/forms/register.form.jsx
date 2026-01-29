import React from 'react'

export const RegisterForm = () => {
  return (
       <div className="mt-10">
            {
                <form className="flex flex-col gap-4">
                    {/* First name */}
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-semibold" htmlFor="First_name">FIrst Name</label>
                    <input 
                    className="border px-2 py-2.5 border-red-500 rounded-md focus:outline-red-700"
                    id = 'First_name'
                    placeholder="Uncle"
                    type = "text"
                    />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-1" >
                    {/* label */}
                    <label htmlFor="Last_name">Last Name</label>
                    {/* input */}
                    <input 
                    className="border px-2 py-2.5 border-red-500 rounded-md  focus:outline-red-700"
                    id = 'Last_name' 
                    placeholder = "Dalal"
                    type = "text"
                    />
                </div >
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
                {/* Re-Enter Password*/}
                <div className="flex flex-col gap-1">
                    <label htmlFor="Re-Password">Re-Type Password</label>
                    <input 
                    className="border px-2 py-2.5 border-red-500 rounded-md  focus:outline-red-700"
                    id = 'Re-Password' 
                    placeholder = "Enter Password"
                    type = "text"
                    required
                    />
                </div>
                {/* Submit */}
                <div className="w-full">
                    <button  className = "w-full bg-red-400 py-3.5 rounded-md cursor-pointer"type = "submit">Create account</button>
                </div>
                
                </form>
                
            }
             
            </div>
  )
}
