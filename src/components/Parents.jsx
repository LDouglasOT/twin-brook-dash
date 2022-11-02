import React, { useEffect } from 'react'
import {useState} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import "./index.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from 'autoprefixer';

function Parents() {
  const [Name,setName]=useState()
  const [LastName,setLastName]=useState()
  const [Contactone,setContactone]=useState()
  const [Residence,setResidence]=useState()
  const [Loan,setLoan]=useState()
  const [Contactwo,setContactwo]=useState()
  const [email,setEmail]=useState()

  const [show,setshow]=useState()
  const {drugdata,fetchdata,patient,fetchPatient}=useContext(FetchContext)

const postpatient=async()=>{
  const data={
    "FirstName":Name,
    "LastName":LastName,
    "Phone":Contactone,
    "Phonex":Contactwo,
    "Residence":Residence,
    "DateofBirth":email,
    "Debt":Loan
  }
  console.log(data)
  const res=await axios.post("https://twinbrook.onrender.com/Schedules/patie/",data)
  if(res.status==201){
    console.log(res)
    setshow(!show)
    fetchPatient()
    toast.success('🦄 Patient successfully saved!', {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
}

useEffect(()=>{
  fetchPatient()
},[0])
  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
     <div className='w-full px-8 py-3 flex justify-between'>
     <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
     <button onClick={()=>setshow(!show)} className='bg-green-400 px-2 text-white rounded'>New Patient</button>
     </div>
     <ToastContainer />
    {show ? 
    <form onSubmit={(e)=>{ 
      e.preventDefault()
      postpatient()}}>
    <div className='Newpatient'>

      <input onChange={(e)=>setName(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="FirstName" required/>
      <input onChange={(e)=>setLastName(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="LastName" required/>
      <input onChange={(e)=>setResidence(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Residence" required/>
      <input onChange={(e)=>setContactone(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Contact 1" required/>
      <input onChange={(e)=>setContactwo(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Contact 2" required/>
      <input type="Number" onChange={(e)=>setLoan(e.target.value)}  className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Loan" required/>
      <label>Date of Birth</label>
      <input onChange={(e)=>setEmail(e.target.value)} type="date" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Date of Birth" required/>
      <div className='flex justify-between items-center'>
      <button onClick={()=>setshow(!show)} className='bg-red-600 px-5 py-1 rounded text-white mt-5 mx-3'>close</button>
      <button type='submit' className='mt-5 bg-green-500 rounded p-1 text-white'>Add Patient</button>
      </div>
    </div>
    </form>
    :""}

    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Names</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Residence</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Phone Number</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Debt</th>
          <th className='flex-col items-center justify-center text-sm w-60'>Birth</th>
        
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {patient.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center text-sm w-40'>{item.FirstName}, {item.LastName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center text-sm'>{item.Residence}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center w-40 text-sm'>{item.Phone} {item.Phonex}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center w-40 text-sm'>{item.Debt}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center text-sm'>{item.DateofBirth}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-green-500 hover:bg-green-700 text-white mx-1 rounded'>Message</button>
            <button onClick={async()=>{
              const res=await axios.delete("https://twinbrook.onrender.com/patients/",{"id":item._id})
              if(res.status==200){
                console.log(res)
                
                toast.success('🦄 Patient successfully deleted !', {
                  position: "top-right",
                  autoClose: true,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }
              fetchPatient()

            }} className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700'>Delete</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Parents