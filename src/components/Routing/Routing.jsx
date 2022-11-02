import React,{useContext} from 'react'
import Route from './Route'
import {BsFillDashSquareFill} from 'react-icons/bs'
import {useState} from 'react'
import {RiDashboardFill} from 'react-icons/ri'
import {BsPersonFill} from 'react-icons/bs'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {RiShirtFill} from 'react-icons/ri'
import {RiAccountPinBoxFill} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import {GrLogout} from 'react-icons/gr'
import {MdOutlineTextsms} from 'react-icons/md'
import { AuthContext } from '../../Context/AuthContext';

function Routing({modal}) {
  const {popup}=useContext(AuthContext)
  const [data,useData]=useState([
    {
      'route':"Dashboard",
      'Lin':"/",
      icon:<RiDashboardFill className='w-5 h-5'/>
    },
    {
      'route':"Drug",
      'Lin':"/Students",
      icon:<BsPersonFill className='w-5 h-5'/>
    },
    {
      'route':"Sales",
      'Lin':"/transactions",
      'icon':<BsPersonFill className='w-5 h-5'/>
    },
    {
      'route':"Expenses",
      'Lin':"/expenses",
      'icon':<BsPersonFill className='w-5 h-5'/>
    },
    {
      'route':"Patients",
      'Lin':"/Parents",
      'icon':<BsPersonFill className='w-5 h-5'/>
    },
    {
      'route':"Schedules",
      'Lin':"/Accounts",
      'icon':<RiAccountPinBoxFill className='w-5 h-5'/>
    },
    {
      'route':"Accounts",
      'Lin':"/Discounts",
      'icon':<BsPersonFill className='w-5 h-5'/>
    },
    {
      'route':"Logout",
      'Lin':"/Logout",
      'icon':<GrLogout className='w-5 h-5'/>
    },
 
  ])
  return (
    <div className='w-full h-full flex-col items-center justify-center '>
        <div onClick={()=>popup("new")} className="h-12 w-ful px-5 flex items-center rounded justify-between bg-slate-600 mt-1 text-white mx-3 hover:cursor-pointer hover:bg-slate-700 ">
        <BsFillDashSquareFill className='w-5 h-5'/>
       <div className="flex justify-justify w-3/4">
       <span className="text-lg hover:text-slate-400">Add</span> 
       <div></div>
       </div>      
    </div>
      {data.map((router,key)=>(
        <Route route={router.route} Lin={router.Lin} icon={router.icon} />
      ))}
    </div>
  )
}

export default Routing