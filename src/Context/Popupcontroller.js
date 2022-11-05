import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'
import Localbase from 'localbase'
let db = new Localbase('db')



export const PopupContext=createContext()

const PopupContextProvider=(props)=>{

const [druglst,setDruglst]=useState([])
const [drug,setDrugs]=useState()
const [selecteddrug,setSelecteddrug]=useState()
const [show,setshow]=useState(false)
const [showcart,setShowcart]=useState(false)

//THis is where the popup starts from
const [pop,setpop]=useState(false)

const clearcart=()=>{
    setDruglst([])  
}
const showingcart=()=>{
    console.log(druglst)
    setShowcart(!showcart)
}
const showing=()=>{
    setshow(!show)
}
const setdrug=(data)=>{
    setDrugs(data)
    setSelecteddrug(data.Drug)
    showing()
}
const setdruglsts=(data)=>{
    console.log(data)
    let itel=[data,...druglst]
    setDruglst(itel) 
}

const sendbackend=async()=>{
const data=await axios.post("",druglst)
}

const remove=(id)=>{
    druglst.pop()
    setDruglst(druglst)
}

const bulkremove=()=>{
    druglst=[]
    setDruglst(druglst) 
}

const PostNewStudent=async(data)=>{
    // console.log(data)
    // console.log("2223s////////////////////////////////")
    // const posts = await axios.post('http://localhost:3001/drugs', data)
    // if (posts.status == 201) {
    //     console.log(posts)
    //     return true
    // } else {
    //     console.log(posts)
    // }
    db.collection('drugs').add({...data})
    return true
}  

 //This is where the update popu begins from 
const showpop=(data)=>{
    console.log("click")  
    setpop(!pop)
    setDrugs(data)
}
const edit=(drugName,qty,price,profit,)=>{

}

const exports={ 
    PostNewStudent,
    pop,showing,
    show,showcart,
    druglst,drug,
    setdrug,bulkremove,
    sendbackend,
    setdruglsts,remove,showpop,showingcart,clearcart
}
return(
    <PopupContext.Provider value={{
   ...exports
    }}>
        {props.children}
    </PopupContext.Provider>
)
}

export default PopupContextProvider