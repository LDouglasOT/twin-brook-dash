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


function Table() {
  const [table,setTable]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [count,setCount]=useState(100)
  const {studentdata,fetchdata,updatecode,datalength}=useContext(AuthContext)

  const [confirm,setConfirm]=useState(false)
  useEffect(()=> {
    fetchdata()
    const interval=setInterval(()=>{
      fetchdata()
      
     },90000) 
     return()=>clearInterval(interval)
},[0]);

const cancel=()=>{
  setConfirm(!confirm)
}


  // const fetchdata=async()=>{
  //   const data=await axios.get("http://127.0.0.1:8000/student/")
  //   console.log(data.data)
  //   setTable(data.data)
  //   setCount(data.data.length)
  //   totalCollected(data.data)
  //   console.log(data.data)

    // data.data.message.map((item)=>{
    //   postdata(item)
    // })
  // }
const postdata=async(item)=>{
  const data=await axios.post("https://twinbrook.onrender.com/new/students",{
    "FirstName":item.FirstName,
    "SurName":item.SurName,
    "MiddleName":item.MiddleName,
    "Nationality":item.nationality,
    "Mobilephone":item.mobile_phone,
    "Stream":item.Stream,
    "Discount":item.Discount,
    "Dateofbirth":item.date_of_birth,
    "Schoolpay":item.code,
    "StudentID":item.StudentID,
    "Payable":item.Payable,
    "Bal":item.Bal,
    "Paid":item.Paid,
    "Class":item.Class,
    "ExtraPay":item.ExtraPay,
    "Paystatus":item.Paystatus,
    "Studentstatus":item.Studentstatus,
    "Total":item.Total,
    "Gender":item.Gender,
    "Email":item.Email
  })
console.log(data)
}
const totalCollected=(data)=>{
  var total=0 
  data.forEach((item)=>{
    total +=item.Paid
  })
  console.log(total)
}
const submitdelete=()=>{
  
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
           {confirm ? <Confirm cancel={cancel()} submit={submitdelete()}/> :""}
            <div className='w-full h-12 drop-shadow-sm bg-white-bg rounded-t-lg px-10 flex justify-center items-center'>
              <Header title="Students List" Page={datalength} home='students'/> 
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
                  <th className='flex-col items-center justify-center text-sm w-40'>Class</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Stream</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Fees</th>
                  <th className='flex-col items-center justify-center text-sm'>Paid</th>
                  <th className='flex-col items-center justify-center text-sm'>Bal</th>
                  <th className='flex-col items-center justify-center text-sm'>Payable</th>
                  <th className='flex-col items-center justify-center text-sm w-10'>(%)</th>
                  <th className='flex-col items-center justify-center text-sm'>Actions</th>
                </tr> 
              </thead>
              <tbody>
              {studentdata.map((item,key)=>(
                <tr className='border flex-row h-5'>
                  <td className='items-center justify-center text-sm w-40 border'><div className='flex items-center justify-center p-2'>{item.PayCode}</div></td>
                  <td className='items-center justify-center text-sm w-80'><div className='flex items-center justify-center'>{item.FirstName} {item.LastName}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Classname.fName}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Stream.streamname}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.Classname.fees}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.fees.Paid}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.fees.Balance}</div></td>
                  <td className='items-center justify-center w-10 text-sm'><div className='flex items-center justify-center'>{item.fees.Expected}</div></td>
                  <td className='items-center justify-center w-10 text-sm border'><div className='flex items-center justify-center cursor:pointer'>{item.fees.discount < 1 ? <button onClick={()=>updatecode(item.PayCode,item.FirstName)} className='bg-slate-300 text-lg px-2 border'>+</button>:item.fees.discount}</div></td>
                  <td className='items-center justify-center w-20 text-sm border'><div className='flex items-center justify-center text-sm'>
                  <img src="https://img.icons8.com/material-rounded/18/000000/edit--v3.png" alt='' className='hover:cursor-pointer p-1 bg-green-500 rounded cursor-pointer'/>
                  <AiTwotoneDelete onClick={()=>setConfirm(!confirm)} className='w-6 h-7 bg-red-200 rounded m-1 mx-1 text-red-500 hover:cursor-pointer'/>
                    </div></td>
                </tr>
                ))}
              </tbody>
            </table>
           </div>
  )
}

export default Table