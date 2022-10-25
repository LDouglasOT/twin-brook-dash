import React from 'react'
import {useState,useEffect,CSSProperties} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from 'react'

function Discounts() {
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
const {studentdata,fetchdata,updatecode,loading,discountTotal}=useContext(FetchContext)
let [color, setColor] = useState("#ffffff");
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
useEffect(()=> {
  fetchdata()
  const interval=setInterval(()=>{
    fetchdata()
   },35000) 
   return()=>clearInterval(interval)
},[0]);

const removediscount=(item)=>{
const fee=item.fees.Balance+item.fees.Percentage
window.alert(`${item.fees.Percentage} will be added and new balance will be ${fee}`)
let data={}
}


if(loading){
  return <ClipLoader
  color={color}
  loading={loading}
  cssOverride={override}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>
}

  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
       
      <h3 className='text-slate-500  mx-4 my-1'>Total: USh {discountTotal}</h3>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Name</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Class</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Stream</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Discount</th>
          <th className='flex-col items-center justify-center text-sm'>initial</th>
          <th className='flex-col items-center justify-center text-sm'>Final</th>
          <th className='flex-col items-center justify-center text-sm'>Current Balance</th>
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {studentdata.map((item,key)=>(
        <tr className='border flex-row h-5'>
        
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.FirstName} {item.LastName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.formname.fName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.stream}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center '>{item.fees.discount}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.formname.fees}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.fees.Expected}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.fees.Balance}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700' onClick={()=>removediscount(item)}>Remove discount</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Discounts