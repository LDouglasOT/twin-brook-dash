import React from 'react'
import {useState} from 'react'

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

  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Name</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Class</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Discount</th>
          <th className='flex-col items-center justify-center text-sm'>initial</th>
          <th className='flex-col items-center justify-center text-sm'>Final</th>
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {discount.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.FirstName} {item.SurName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.Class}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.Discount}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.initial}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Final}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-green-500 hover:bg-green-700 text-white mx-1 rounded'>Approve</button>
            <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700'>Reject</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Discounts