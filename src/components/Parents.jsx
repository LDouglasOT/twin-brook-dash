import React, { useEffect } from 'react'
import {useState} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'

function Parents() {
  const {studentdata,fetchdata}=useContext(FetchContext)

useEffect(()=>{
  fetchdata()
},[0])
  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Names</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Residence</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Parent Names</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Phone NUmber</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Email</th>
        
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {studentdata.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.FirstName} {item.FirstName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.Residence}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.parent.FullNames}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.parent.Phone}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.parent.email}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-green-500 hover:bg-green-700 text-white mx-1 rounded'>Message</button>
            <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700'>Delete</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Parents