import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const AuthContext=createContext()

const AuthContextProvider=(props)=>{


    const [user,setUser]=useState("Luzinda")
    const [token,setToken]=useState()
   
    const [Newpop,setNew]=useState(false)
    const [update,setupdate]=useState(false)
    const [authenticated,setAuthenticated]=useState(true)

    let [loading, setLoading] = useState(false);
       
    const login=(username,Password)=>{
        setUser(username)
        return true
    }
    const popup=(key)=>{
   
        if(key=='new'){
        setNew(!Newpop)
 
        }else{
        setupdate(!update)
        }
    }

    const authenticate=async(credentials)=>{
            let auth= await axios.post('https://django-fever.herokuapp.com/student/apitokenauth/',credentials)
            if(auth){
                console.log(credentials)
                let token=auth.data.token
                setToken(token)
                localStorage.setItem('token', token);
                if(token){
                    setAuthenticated(true)
                    return true
                }else{
                    return false
                }
            }
    }
   
    const exports={ popup,
        login,
        authenticate,
        Poststudent,
        update,
        Newpop,
        user,
        token,
        authenticated, 
    }

    return(
        <AuthContext.Provider value={{
       ...exports
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
