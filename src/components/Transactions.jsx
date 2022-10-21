import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import axios  from 'axios'

function Transactions() {

const [discount,setDiscount]=useState([])

useEffect(async()=>{
  const data= await axios.get('http://localhost:8000/student/transactions/')
  if(data){
    setDiscount(data.data)
    console.log(discount)
  }

},[0])

if(!discount){
return <h4>Loading TRansactions</h4>
}
  return (


    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <div className='flex justify-between w-full m-2'>
        <div className='flex items-center flex-center justify-center'>
        <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
        <h3>Date: 12-09-22</h3>
        </div>
    
      <h3 className='text-xl text-slate-800'>Fees transactions</h3>
      <input type="text" className='' placeholder='Search transaction' />
      </div>

      {!discount ? <h4>Loading...</h4>:
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm '>Student</th>
          <th className='flex-col items-center justify-center text-sm '>Paid</th>
          <th className='flex-col items-center justify-center text-sm '>Reciept Number</th>
          <th className='flex-col items-center justify-center text-sm'>payment_date</th>
          <th className='flex-col items-center justify-center text-sm'>School Pay Code</th>
          <th className='flex-col items-center justify-center text-sm'>Payment channel</th>
        </tr> 
      </thead>
      <tbody>
      {discount.map((item,key)=>(
        <tr className='border flex-row h-5' key={key}>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.student.FirstName} {item.student.LastName}</div></td> 
         <td className='items-center justify-center text-sm border w-80 '><div className='flex items-center justify-center'>{item.amountpaid}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center'>{item.RecieptNumber}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.payment_date}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.PayCode}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.payment_channel}</div></td>
        </tr>
        ))}
      </tbody>
    </table>  }
   </div>

  )
}

export default Transactions