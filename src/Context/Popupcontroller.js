import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const PopupContext=createContext()

const PopupContextProvider=(props)=>{

const PostNewStudent=async(data)=>{
    console.log(data)
    const posts = await axios.post('http://localhost:3001/new', data)
    if (posts.status == 201) {
        console.log(posts)
        return true
    } else {
        return false
    }
}  

const exports={ PostNewStudent }
return(
    <PopupContext.Provider value={{
   ...exports
    }}>
        {props.children}
    </PopupContext.Provider>
)
}

export default PopupContextProvider