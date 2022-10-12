import React,{useContext} from 'react'
import Route from './Route'
import {BsFillDashSquareFill} from 'react-icons/bs'
import {useState} from 'react'
import {StateContext} from '../../Context/StateContextProvider'


function Routing({modal}) {
 
  const {New,modify,data}= useContext(StateContext)

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