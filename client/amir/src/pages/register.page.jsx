// rafce
import React from "react"

const RegisterPage = () =>{
    return (
        <main className="h-full w-full flex justify-center items-center">
           <div className="border-5 border-green-500 py-5 px-6 min-h-140 min-w-120 rounded-md ">
            <h1>Create Account</h1>
            <p>TO create account fill the form below</p>
            {
                <form>
                    {/* Frist name */}
                <div>
                    <label htmlFor="First_name">FIrst Name</label>
                    <input 
                    id = 'First_name'
                    placeholder="Uncle"
                    type = "text"
                    />
                </div>
                {/* Last Name */}
                <div>
                    {/* label */}
                    <label htmlFor="Last_name">Last Name</label>
                    {/* input */}
                    <input 
                    id = 'Last_name' 
                    placeholder = "Dalal"
                    type = "text"
                    />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="Email">Email</label>
                    <input 
                    id = 'Email' 
                    placeholder = "example@gmail.com"
                    type = "email"
                    required
                    />
                </div>
                {/* Password */}
                <div>
                    <label htmlFor="Password">Password</label>
                    <input 
                    id = 'Password' 
                    placeholder = "Enter Password"
                    type = "text"
                    required
                    />
                </div>
                {/* Re-Enter Password*/}
                <div>
                    <label htmlFor="Re-Password">Re-Type Password</label>
                    <input 
                    id = 'Re-Password' 
                    placeholder = "Enter Password"
                    type = "text"
                    required
                    />
                </div>
                {/* Submit */}
                <div>
                    <button type = "submit">Create account</button>
                </div>
                </form>
            }
           </div>
        </main>
    )
}

export default RegisterPage

// htmlFor : for which input the label is for
