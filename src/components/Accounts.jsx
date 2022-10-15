import React from 'react'
import {useState} from 'react'

function Accounts() {

const [discount,setDiscount]=useState([
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Kagoma",
        "Status":"M",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Kawempe",
        "Status":"F",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Jinja",
        "Status":"M",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Bwaise",
        "Status":"M",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Makerere",
        "Status":"F",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
    {
        "FirstName":"Luzinda",
        "SurName":"Douglas",
        "Residence":"Kavule",
        "Status":"M",
        "Whatsapp":"0780621421",
        "Email":"douglas.luzinda.ot@gmail.com"
    },
])

  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <h3 className='text-slate-500  mx-4 my-1'>Total: USh 500000</h3>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-80'>Names</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Residence</th>
          <th className='flex-col items-center justify-center text-sm w-20'>Status</th>
          <th className='flex-col items-center justify-center text-sm'>Whatsapp</th>
          <th className='flex-col items-center justify-center text-sm'>Email</th>
        
          <th className='flex-col items-center justify-center text-sm'>Action</th>
        </tr> 
      </thead>
      <tbody>
      {discount.map((item,key)=>(
        <tr className='border flex-row h-5'>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.FirstName} {item.SurName}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.Residence}</div></td>
          <td className='items-center justify-center text-sm border'><div className='flex items-center justify-center'>{item.Status}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.Whatsapp}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Email}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>{item.Email}</div></td>
          
          <td className='items-center justify-center text-sm w-50 border'><div className='flex items-center justify-center'>
            <button className='p-1 bg-green-500 hover:bg-green-700 text-white mx-1 rounded'>Revoke Access</button>
            <button className='p-1 bg-red-500 text-white mx-1 rounded hover:bg-red-700'>Delete</button>
            </div></td>
          
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default Accounts