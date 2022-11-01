import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import axios  from 'axios'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'

function Transactions() {

const [discount,setDiscount]=useState([])
const {transactions,fetchTransactions,loading}=useContext(FetchContext)
const [search,searchvalue]=useState("")

useEffect(()=>{
  fetchTransactions()
},[0])

if(loading){
return <h4>Loading Transactions</h4>
}
  return (


    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <div className='flex justify-between w-full m-2'>
        <div className='flex items-center flex-center justify-center'>
        <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
        <h3>Date: 12-09-22</h3>
        </div>
    
      <h3 className='text-xl text-slate-800'>Fees transactions</h3>
      <input type="text" onChange={(e)=>searchvalue(e.target.value)} className='' placeholder='Search transaction' />
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
      {transactions.filter(name => name.studentName.match(new RegExp(search, "i"))).map((item,key)=>(
        <tr className='border flex-row h-5' key={key}>
          <td className='items-center justify-center text-sm w-80 border p-2'>{item.studentName ? <div className='flex items-center justify-center'>{item.studentName}</div>:<h3>None</h3>}</td> 
         <td className='items-center justify-center text-sm border w-80 '><div className='flex items-center justify-center'>{item.amount}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center'>{item.schoolpayReceiptNumber}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.paymentDateAndTime}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.studentPaymentCode}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.sourceChannelTransactionId}</div></td>
        </tr>
        ))}
      </tbody>
    </table>  }
   </div>

  )
}

export default Transactions