import React from 'react'
import {Header,Popup} from '.'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from "react-redux"
import {students} from './feature/DataStore'
import Dropdown from 'react-dropdown';
import {MdOutlineTextsms} from 'react-icons/md'
import 'react-dropdown/style.css';

function Table({visible,modulate}) {
  const [table,setTable]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [count,setCount]=useState(100)
  useEffect(()=> {
    fetchdata()
    const interval=setInterval(()=>{
      fetchdata()
     },10000) 
     return()=>clearInterval(interval)
},[0]);

  const fetchdata=async()=>{
    const data=await axios.get("https://twinbrook.onrender.com/new/students")
    console.log(data.data)
    setTable(data.data.message)
    setCount(data.data.message.length)
    totalCollected(data.data.message)
  }
const totalCollected=(data)=>{
  var total=0 
  data.forEach((item)=>{
    total +=item.Paid
  })
  console.log(total)
}
const options = [
  'Baby','Middle','Top','P1', 'P2', 'P3','P4','P5','P6','P7'
];
const options_stream = [
  'Pegion', 'Duckling', 'SOmething','SOmething','P5','P6','P7'
];
const defaultOption = 'Filter stream';

  return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
            <div className='w-full h-12 drop-shadow-sm bg-white-bg rounded-t-lg px-10 flex justify-center items-center'>
              <Header title="Students List" Page={count} home='students'/> 
              <div className='w-60 mx-6'>
              <input type="text" placeholder='Search student Names' className='px-4 py-1' />  
              </div>           
             <Dropdown options={options} onChange={(e)=>{
                console.log(e.value)
              }} value={defaultOption} placeholder="Select an Class"  className='w-80 mx-3'/>
           
            </div>
          
            <table className="table table-striped table-bordered table-list w-full bg-white-bg">
              <thead className=''>
                <tr className="border w-10">
                  <th className='flex items-center justify-center text-sm'>Code</th>
                  <th className='flex-col items-center justify-center text-sm w-80'>Name</th>
                  <th className='flex-col items-center justify-center text-sm w-20'>Class</th>
                  <th className='flex-col items-center justify-center text-sm w-20'>Stream</th>
                  <th className='flex-col items-center justify-center text-sm'>Total</th>
                  <th className='flex-col items-center justify-center text-sm'>Paid</th>
                  <th className='flex-col items-center justify-center text-sm'>Bal</th>
                  <th className='flex-col items-center justify-center text-sm'>Payable</th>
                  <th className='flex-col items-center justify-center text-sm w-10'>(%)</th>
                  <th className='flex-col items-center justify-center text-sm'>Actions</th>
                </tr> 
              </thead>
              <tbody>
              {table.map((item,key)=>(
                <tr className='border flex-row h-5'>
                  <td className='items-center justify-center text-sm w-40 border'><div className='flex items-center justify-center p-2'>{(item.code==1) ? <button className='bg-slate-500 rounded p-1 text-slate-100'>update code</button> : <div> {item.code ? item.code : <button className='bg-slate-500 rounded p-1 text-slate-100'>update code</button>}</div>}</div></td>
                  <td className='items-center justify-center text-sm w-80'><div className='flex items-center justify-center'>{item.FirstName} {item.SurName}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{(item.Class=="none") ? <button className='bg-slate-500 rounded p-1 text-slate-100'>update</button> : item.Class}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{(item.Stream=="none") ? <button className='bg-slate-500 rounded p-1 text-slate-100'>update</button> : item.Stream}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Total}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Paid}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Bal}</div></td>
                  <td className='items-center justify-center w-10 text-sm'><div className='flex items-center justify-center'>{item.Payable}</div></td>
                  <td className='items-center justify-center w-10 text-sm border'><div className='flex items-center justify-center '>{item.Discount}</div></td>
                  <td className='items-center justify-center w-20 text-sm border'><div className='flex items-center justify-center text-sm'>
                  <img src="https://img.icons8.com/material-rounded/18/000000/edit--v3.png" alt='' className='hover:cursor-pointer p-1 bg-green-500 rounded cursor-pointer'/>
                  <MdOutlineTextsms className='w-6 h-6 mx-1 text-green-500 hover:cursor-pointer'/>
                    </div></td>
                </tr>
                ))}
              </tbody>
            </table>
           </div>
  )
}

export default Table