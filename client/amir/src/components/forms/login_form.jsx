import React from 'react'

export const Login_form = () => {
  return (
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
  )
}
