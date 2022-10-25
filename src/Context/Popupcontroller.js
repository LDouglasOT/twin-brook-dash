import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const PopupContext=createContext()

const PopupContextProvider=(props)=>{

const PostNewStudent=async(data)=>{
    console.log(data)
    console.log("2223s////////////////////////////////")
    const posts = await axios.post('https://django-fever.herokuapp.com/student/', data)
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