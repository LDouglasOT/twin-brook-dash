import React from 'react'
import {useState,useEffect,CSSProperties} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from 'react'
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Discounts() {
  const [purpose,setPurpose]=useState()
  const [Person,setPerson]=useState()
  const [month,setmonth]=useState()
  const [contact,setContact]=useState()
  const [time,setTime]=useState()
  const [day,setDay]=useState()
  const [show,setshow]=useState()
const [discount,setDiscount]=useState([
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Class":"P4",
        "Discount":10,
        "initial":1000000,
        "Final":900000
    }, {
        "FirstName":"Jemba",
        "SurName":"Peter",
        "Class":"P6",
        "Discount":40,
        "initial":2000000,
        "Final":1200000
    }, {
        "FirstName":"Jabari",
        "SurName":"Pete",
        "Class":"P1",
        "Discount":20,
        "initial":1000000,
        "Final":800000
    }, {
        "FirstName":"Sempagama",
        "SurName":"Henry",
        "Class":"P2",
        "Discount":15,
        "initial":1000000,
        "Final":850000
    }, {
        "FirstName":"Stush",
        "SurName":"Nana",
        "Class":"P4",
        "Discount":45,
        "initial":1000000,
        "Final":650000
    }, {
   
        "FirstName":"Nanfuka",
        "SurName":"Eunice",
        "Class":"P7",
        "Discount":10,
        "initial":1000000,
        "Final":900000
    }
])
const {drugdata,fetchdata,updatecode,loading,discountTotal}=useContext(FetchContext)
let [color, setColor] = useState("#ffffff");
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
useEffect(()=> {
  fetchdata()
},[0]);

const removediscount=(item)=>{
const fee=item.fees.Balance+item.fees.Percentage
window.alert(`${item.fees.Percentage} will be added and new balance will be ${fee}`)
let data={}
}

  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
       <div className='flex w-full items-center justify-between px-10'>
       <h3 className='text-slate-500  mx-4 my-1'>Total Employees: {discountTotal}</h3>
        <button className='bg-green-500 px-6 py-2 text-white my-4 text-sm rounded' onClick={()=>setshow(!show)}>New staff</button>

       </div>
  {show ? 
  <form onSubmit={()=>{
    setshow(!show)
  }} action="">
   <div id="popup2">

   <input onChange={(e)=>setPurpose(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Purpose" required/>
      <input onChange={(e)=>setPerson(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Names" required/>
      <input onChange={(e)=>setContact(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Contact 2" required/>
      <input onChange={(e)=>setTime(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Time" required/>
      <input onChange={(e)=>setDay(e.target.value)} type="text" className='w-4/5 m-2 bg-slate-100 p-1 rounded' name="" id="" placeholder="Day" required/>
      <button type='submit' className='mt-5 bg-green-500 rounded p-1 text-white'>Add schedule</button>
     
   </div>
   </form> 
   :""}
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Name</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Role</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Residence</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Salary</th>
          <th className='flex-col items-center justify-center text-sm'>Contact1</th>
          <th className='flex-col items-center justify-center text-sm'>Contact2</th>
          <th className='flex-col items-center justify-center text-sm'>Balance</th>
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {[1,1,1,1,1].map((item,key)=>(
        <tr className='border flex-row h-5'>
        
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>Luzinda Douglas</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>Katooke</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>
            stream</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center '>discount</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>fees</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>Expected</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>Balance</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700' onClick={()=>removediscount(item)}>Remove Employee</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Discounts