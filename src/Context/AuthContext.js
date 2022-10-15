import axios from 'axios'
import {createContext, useState} from 'react'


export const AuthContext=createContext()

const AuthContextProvider=(props)=>{


    const [user,setUser]=useState("Luzinda")
    const [token,setToken]=useState()
    const [studentdata,setData]=useState([])
    const [datalength,setDatalength]=useState(0)
    const [Newpop,setNew]=useState(false)
    const [update,setupdate]=useState(false)
    const [authenticated,setAuthenticated]=useState(true)
    const [paycode,setupPaycode]=useState(false)

    const authenticate=async(credentials)=>{
            let auth= await axios.post('http://127.0.0.1:8000/student/apitokenauth/',credentials)
            if(auth){
                console.log(credentials)
                let token=auth.data.token
                setToken(token)
                if(token){
                    setAuthenticated(true)
                    return true
                }else{
                    return false
                }
            }
    }
    const updatecode=()=>{
        setupPaycode(!paycode)
    }
    const login=(username,Password)=>{
        setUser("Luzinda Douglas")
        return true
    }
    const popup=(key)=>{
   
        if(key=='new'){
        setNew(!Newpop)
 
        }else{
        setupdate(!update)
        }
    }
    const fetchdata=async()=>{
        let token="4b3887b4fe9e1c049b9caee6759cfa25e8776633"
        if(authenticated){

            const data=await axios.get("http://127.0.0.1:8000/student/",{
                headers: {
                  'Authorization': `token ${token}`
                }
              })
            if(data){
                setData(data.data)
                setDatalength(data.data.length)
            }
        
        }
    }



    return(
        <AuthContext.Provider value={{popup,update,Newpop,user,
        token,login,authenticated,studentdata,datalength,authenticate,
        fetchdata,
        paycode,
        updatecode
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
