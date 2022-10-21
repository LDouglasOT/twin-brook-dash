import React,{useContext} from 'react'
import { useState } from 'react'
import {AuthContext} from  "../../Context/AuthContext"
import axios from 'axios'

function Pop() {
    const {updatecode,popupname,schoolpaycode}=useContext(AuthContext)
    const [discount,setDiscount]=useState()
  return (
    <>
    <div
      className="justify-center p-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto p-2">
       
        <div className="border-0 px-10 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
        <div className='w-full  text-slate-500 my-2 flex justify-center'><span>Discount For {popupname}</span></div>
      

    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Discount</label>
        <input type="text" onChange={(e)=>setDiscount(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 15" required/>
    </div>
    <div>
    <button onClick={()=>updatecode("lee",1)} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
    <button onClick={async()=>{
      if(schoolpaycode && discount){
        let data={
          "PayCode":schoolpaycode,
          "Discount":discount
        }
        let res= await axios.post("http://127.0.0.1:8000/student/discount/",data)
        if(res.status=201){
          updatecode("lee",1)
        }
      }

    }} className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>save</button>
    </div>
  
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default Pop