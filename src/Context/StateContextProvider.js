
import {RiDashboardFill} from 'react-icons/ri'
import {BsPersonFill} from 'react-icons/bs'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {RiShirtFill} from 'react-icons/ri'
import {RiAccountPinBoxFill} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import {GrLogout} from 'react-icons/gr'
import {MdOutlineTextsms} from 'react-icons/md'
//Icons call ends here
import { createContext, useState } from "react";

export const StateContext=createContext();
const StateContextProvider=(props)=>{
    const [New,setNew]=useState(false)
    const [modify,setModify]=useState(false)
    const [data,useData]=useState([
        {
          'route':"Dashboard",
          'Lin':"/Dashboards",
          icon:<RiDashboardFill className='w-5 h-5'/>
        },
        {
          'route':"Students",
          'Lin':"/Students",
          icon:<BsPersonFill className='w-5 h-5'/>
        },
        {
          'route':"School fees",
          'Lin':"/fees",
          'icon':<FaMoneyCheckAlt className='w-5 h-5'/>
        },
        {
          'route':"Uniforms",
          'Lin':"/Uniforms",
          'icon':<RiShirtFill className='w-5 h-5'/>
        },
        {
          'route':"Accounts",
          'Lin':"/Accounts",
          'icon':<RiAccountPinBoxFill className='w-5 h-5'/>
        },
        {
          'route':"Settings",
          'Lin':"/Settings",
          'icon':<FiSettings className='w-5 h-5'/>
        },
        {
          'route':"Messages",
          'Lin':"/Messages",
          'icon':<MdOutlineTextsms className='w-5 h-5'/>
        },
        {
          'route':"Discounts",
          'Lin':"/Discount",
          'icon':<BsPersonFill className='w-5 h-5'/>
        },
        {
          'route':"Profile",
          'Lin':"/Profile",
          'icon':<BsPersonFill className='w-5 h-5'/>
        },
        {
          'route':"Logout",
          'Lin':"/Logout",
          'icon':<GrLogout className='w-5 h-5'/>
        },
     
      ])
    const showNew =()=> setNew(!New); 
    const showModify =()=> setModify(!modify); 

return(
 <StateContext.Provider value={{New,modify,data}}>
    {props.Children}
</StateContext.Provider>
)
}

export default StateContextProvider