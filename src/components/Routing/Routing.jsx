import React from 'react'
import Route from './Route'
import {useState} from 'react'
import {BsFillDashSquareFill} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import {BsPersonFill} from 'react-icons/bs'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {RiShirtFill} from 'react-icons/ri'
import {RiAccountPinBoxFill} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import {GrLogout} from 'react-icons/gr'
import {MdOutlineTextsms} from 'react-icons/md'

function Routing({modal}) {
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
  return (
    <div className='w-full h-full flex-col items-center justify-center '>
        <div onClick={()=>modal()} className="h-12 w-ful px-5 flex items-center rounded justify-between bg-slate-600 mt-1 text-white mx-3 hover:cursor-pointer hover:bg-slate-700 ">
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