import React,{useContext} from 'react'
import { useState } from 'react'
import {AuthContext} from  "../../Context/AuthContext"
import axios from 'axios'

function Confirm() {
    const {updatecode,popupname,schoolpaycode}=useContext(AuthContext)
    const [discount,setDiscount]=useState()
  return (
    <div className="justify-center items-center m-4 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-auto my-6 mx-auto m-2 bg-white border rounded">
            <h3 className='m-1 p-8 text-slate-800'>Proceed archieving this student</h3>
    <div className='flex w-full bg-slate-100 justify-between'>
    <button className='mx-2 bg-green-600 my-2 p-1 rounded text-white '>Close</button>
    <button className='mx-2 bg-red-700 text-white my-2 p-1 rounded'>Archieve</button>
    </div>

    </div>
    </div>
  )
}

export default Confirm