import React from 'react'
import {Header,Popup} from '.'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from "react-redux"
import {students} from './feature/DataStore'
import Dropdown from 'react-dropdown';
import {MdOutlineTextsms} from 'react-icons/md'
import {AiTwotoneDelete} from 'react-icons/ai'
import 'react-dropdown/style.css';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Confirm} from './index'
import { FetchContext } from '../Context/FetchCOntroller';
import "./index.css"

function Table() {
  const [table,setTable]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [count,setCount]=useState(100)
  const [studentdata,setdata]=useState([])

  const [search,setsearch]=useState("")
  const [selected,setSelected]=useState("")
  const [show,setShow]=useState(false)
  const [update,setShowupdate]=useState(false)

  useEffect(()=> {
    fetchdata()
    const interval=setInterval(()=>{
      fetchdata()
      
     },8000) 
     return()=>clearInterval(interval)
},[0]);

const fetchdata=async()=>{ 
  const data=await axios.get("http://localhost:3001/new/students/")
  if(data){
    setdata(data.data.message)
  }
}
const submitdelete=async()=>{
  if(selected.code == ""){
    return
  }
  console.log(selected)
  const data={
    "codes":selected.code
  }
  const res=await axios.post("http://localhost:3001/new/del",data)
  
  if(res.status==200){
  setShow(!show)
  fetchdata()
  }
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
              <Header title="Students List" Page={studentdata.length} home='students'/> 
              <div className='w-60 mx-6'>
              <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search student Names' className='px-4 py-1' />  
              </div>           
            </div>
            {show ? 
            <div className='tablepop flex flex-col items-center justify-center'>
              <div className='m-2 flex flex-col items-center'>
                <h3 className='text-center text-2xl text-white'>Delete <span className='text-green-600'>{selected.FirstName} {selected.SurName}</span> </h3>
             <div>
             <button onClick={()=>setShow(!show)} className='m-1 bg-green-500 rounded px-3 py-2 text-white text-xl mt-4'>close</button>
             <button onClick={()=>submitdelete()} className='m-1 bg-red-500 rounded px-3 py-2 text-white text-xl mt-4'>Delete</button>
             </div>
             </div>
            </div>
            :""}
            <table className="table table-striped table-bordered table-list w-full bg-white-bg">
              <thead className=''>
                <tr className="border w-10">
                  <th className='flex items-center justify-center text-sm w-30'>Code</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Name</th>
                  <th className='flex-col items-center justify-center text-sm w-20'>Class</th>
                  <th className='flex-col items-center justify-center text-sm w-200'>Stream</th>

                 <th className='flex-col items-center justify-center text-sm w-40'>Paid</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Bal</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Payable</th>
                  <th className='flex-col items-center justify-center text-sm w-10'>(%)</th>
                  <th className='flex-col items-center justify-center text-sm w-10'>Actions</th>
                </tr> 
              </thead>
              
              <tbody>
              {studentdata.filter(name => name.FirstName.match(new RegExp(search, "i"))).map((item,key)=>(
                <tr className='border flex-row h-5'>
                  <td className='items-center justify-center text-sm w-30 border'><div className='flex items-center justify-center p-2'>{item.code}</div></td>
                  <td className='items-center justify-center text-sm w-40'><div className='flex items-center justify-center'>{item.FirstName} {item.SurName}</div></td>
                  <td className='items-center justify-center text-sm w-10'><div className='flex items-center justify-center'>{item.Class}</div></td>
                  <td className='items-center justify-center text-sm w-10'><div className='flex items-center justify-center'>{item.Stream}</div></td>

                  {item.Paid ? <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Paid}</div></td>:<td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>0</div></td>}
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Bal}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Payable}</div></td>
                  <td className='items-center justify-center w-10 text-sm border'><div className='flex items-center justify-center cursor:pointer'>{item.Discount}</div></td>
                  
                  <td className='items-center justify-center w-20 text-sm border'><div className='flex items-center justify-center text-sm'>
                  <AiTwotoneDelete className='w-6 h-7 bg-red-200 rounded m-1 mx-1 text-red-500 hover:cursor-pointer' onClick={()=>{
                    console.log("herer")
                    setSelected(item)
                    setShow(!show)
                    }}/>
                    </div></td>
                </tr>
                ))}
              </tbody>
            </table>
           </div>
  )
}

export default Table