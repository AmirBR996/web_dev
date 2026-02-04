import api from "./index.js"
export const login = async(data) => {
    try{
       const response = await api.post("/auth/login" , data)
       console.log(response)
       return response.data
    }catch(error){
        console.log(error)
    }

}

export const register = async(data) => {
    try{
       const response = await api.post("/auth/register" , data)
       console.log(response)
       return response.data
    }catch(error){
        console.log(error)
    }
}

export const getUserdetail = async(req , res , next) => {
    try{ 
      const response = await api.get("/auth/user-detail")
    }catch(error){
       next(error)
    }
}



// make profile in homepage
