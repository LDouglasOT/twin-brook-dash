import React from 'react'
import {useState} from 'react'

function Transactions() {

const [discount,setDiscount]=useState([
    {
        "Student":"Luzinda Douglas",
        "amountpaid":500000,
        "RecieptNumber":508878,
        "payment_date":"12-09-21",
        "payment_channel":"MTN MOBILE MONEY",
        "payment_number":"0780621421"
    },
    {
        "Student":"Kigozi Daniel",
        "amountpaid":500000,
        "RecieptNumber":508878,
        "payment_date":"12-09-21",
        "payment_channel":"MTN MOBILE MONEY",
        "payment_number":"0780621421"
    },
    {
        "Student":"Luzinda Douglas",
        "amountpaid":500000,
        "RecieptNumber":508878,
        "payment_date":"12-09-21",
        "payment_channel":"MTN MOBILE MONEY",
        "payment_number":"0780621421"
    },
    {
        "Student":"Semitala timothy",
        "amountpaid":500000,
        "RecieptNumber":508878,
        "payment_date":"12-09-21",
        "payment_channel":"MTN MOBILE MONEY",
        "payment_number":"0780621421"
    },
    {
        "Student":"Jemba Peter",
        "amountpaid":500000,
        "RecieptNumber":508878,
        "payment_date":"12-09-21",
        "payment_channel":"MTN MOBILE MONEY",
        "payment_number":"0780621421"
    },
])

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


    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm '>Student</th>
          <th className='flex-col items-center justify-center text-sm '>Paid</th>
          <th className='flex-col items-center justify-center text-sm '>Reciept Number</th>
          <th className='flex-col items-center justify-center text-sm'>payment_date</th>
          <th className='flex-col items-center justify-center text-sm'>payment_number</th>
          <th className='flex-col items-center justify-center text-sm'>Payment channel</th>
        </tr> 
      </thead>
      <tbody>
      {discount.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.Student}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.amountpaid}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.RecieptNumber}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.payment_date}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.payment_number}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.payment_channel}</div></td>
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Transactions