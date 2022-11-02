import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react'
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Accounts() {
const [showpop,setshowpop]=useState(false)
const [discount,setDiscount]=useState([])
const [startDate, setStartDate] = useState(new Date());
const [purpose,setPurpose]=useState()
const [Person,setPerson]=useState()
const [month,setmonth]=useState()
const [contact,setContact]=useState()
const [time,setTime]=useState()
const [day,setDay]=useState()

const fetchschedules=async()=>{
  const res= await axios.get("https://twinbrook.onrender.com/Schedules/")
  
  if(res){
    console.log(res.data)
    setDiscount(res.data)
  }
}

const deleteschedule=async(id)=>{
 let data={
    "id":id
  }
  console.log(id)
 if(id){
  let res= await axios.put(`https://twinbrook.onrender.com/Schedules/`,data)
  console.log(res)
  if(res.status==200){
    toast.success('🦄 Schedule successfully deleted!', {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    fetchschedules()
  }else{
    toast.warning('Request Failed', {
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
}
useEffect(()=>{
  fetchschedules()
},[0])


  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
     {showpop ?
      <form onSubmit={async(e)=>{
      e.preventDefault()
       const data={
          "Reason":purpose,
          "Names":Person,
          "Date":startDate,
          "contact":contact,
          "Time":time,
        }
       console.log(data)
        const res=await axios.post("https://twinbrook.onrender.com/Schedules/",data)
        if(res.status==201){
          console.log(res)
          toast.success('🦄 Schedule successfully saved!', {
            position: "top-right",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          setshowpop(!showpop)
          fetchschedules()
        }
        
      }}>
     <div id="popup" className='fixed bg-slate-800 items-center justify-center'>
      <h2 className='text-center text-white m-1'>New Patient</h2>
   
      <input onChange={(e)=>setPurpose(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Purpose" required/>
      <input onChange={(e)=>setPerson(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Names" required/>
      <label className='flex-start text-white'>Expiry date</label>
      <input className='w-4/5 m-2 bg-slate-100 p-1 rounded' type="date" id="start" name="trip-start" onChange={(e)=>setStartDate(e.target.value)} value={startDate}/>
      <input onChange={(e)=>setContact(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Contact 2" required/>
      <input onChange={(e)=>setTime(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Time" required/>
      <div className='flex justify-evenly'>
      <button onClick={()=>setshowpop(!showpop)} className='px-5 m-2 mt-5 bg-red-500 rounded p-1 text-white'>close</button>
      <button type='submit' className='m-2 px-5 mt-5 bg-green-500 rounded p-1 text-white'>Add schedule</button>
      </div>
     </div>
     </form>
     :""}
      <ToastContainer />
     <div className='w-full py-1 flex justify-between px-3 py-2 rounded'>
     <h3 className='text-slate-500  mx-4 my-1'></h3>
      <button className='bg-slate-500 p-2 text-sm text-white' onClick={()=>setshowpop(!showpop)}>New schedule</button>
     </div>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Purpose</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Person</th>
          <th className='flex-col items-center justify-center text-sm'>month</th>
          <th className='flex-col items-center justify-center text-sm'>Contact</th>
          <th className='flex-col items-center justify-center text-sm'>starting time</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {discount.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-90 border p-2'><div className='flex items-center justify-center w-90'>{item.Reason}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center w-60'>{item.Names}</div></td>
          <td className='items-center justify-center text-sm w-40 border'><div className='flex items-center justify-center'>{item.Date}</div></td>
          <td className='items-center justify-center text-sm w-40 border'><div className='flex items-center justify-center'>{item.Contact}</div></td>
          <td className='items-center justify-center text-sm w-10 border'><div className='flex items-center justify-center'>{item.Time}</div></td> 
          <td className='items-center justify-center text-sm w-50 border'><div className='flex items-center justify-center'>
           {item.Status ? <h3 className='text-green-500 '>Completed</h3>: <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700' onClick={()=>deleteschedule(item._id)}>Complete</button>}
            </div></td>
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Accounts