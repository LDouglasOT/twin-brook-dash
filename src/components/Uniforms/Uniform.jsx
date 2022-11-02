import React from 'react'
import {Header,Popup} from '../'
import {useState,useEffect} from 'react'
import { FetchContext } from '../../Context/FetchCOntroller';
import { useContext } from 'react'


function Uniform() {
const [table,setTable]=useState([
1,1,1,1,1,1,1,1
])
const {drugdata,datalength,fetchdata}=useContext(FetchContext)

const getperformance= async ()=>{
  console.log("performance")
}
useEffect(()=>{
  getperformance()
},[0])


  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
    <h3 className='text-slate-500  mx-4 my-1'>Total: {table.length}</h3>
  <table className="table table-striped table-bordered table-list w-full bg-white-bg">
  
    <thead className=''>
      <tr className="border w-10">
        <th className='flex-col items-center justify-center text-sm w-80'>Names</th>
        <th className='flex-col items-center justify-center text-sm w-20'>Residence</th>
        <th className='flex-col items-center justify-center text-sm w-20'>Arrival</th>
        <th className='flex-col items-center justify-center text-sm'>Depart</th>
        <th className='flex-col items-center justify-center text-sm'>Rank</th>
        <th className='flex-col items-center justify-center text-sm'>Actions</th>
      </tr> 
    </thead>
    <tbody>
    {table.map((item,key)=>(
      <tr className='border flex-row h-5'>
        <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.FirstName} {item.SurName}</div></td>
        <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Residence}</div></td>
        <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Status}</div></td>
        <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.Whatsapp}</div></td>
        <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Email}</div></td>
        <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
        <button className='bg-green-800 rounded py-1 px-2 m-1 text-white'>Arrived</button >  
        <button className='bg-red-800 rounded py-1 px-4 m-1 text-white'>left</button >  
        </div></td>
      </tr>
      ))}
    </tbody>
  </table>
 </div>
  )
}

export default Uniform