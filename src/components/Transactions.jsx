import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import axios  from 'axios'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Transactions() {

const [table,setDiscount]=useState([
  {
    "Price":100,
    "Drug":"Panadol",
    "Date":'22-1-12',
    "Profit":10,
    "left":100
  },
  {
    "Price":100,
    "Drug":"Panadol",
    "Date":'22-1-12',
    "Profit":10,
    "left":100
  },
  {
    "Price":100,
    "Drug":"Panadol",
    "Date":'22-1-12',
    "Profit":10,
    "left":100
  },
  {
    "Price":100,
    "Drug":"Panadol",
    "Date":'22-1-12',
    "Profit":10,
    "left":100
  },
  {
    "Price":100,
    "Drug":"Panadol",
    "Date":'22-1-12',
    "Profit":10,
    "left":100
  },
])
const [show, setSHow]=useState(false)
const {transactions,fetchTransactions,loading}=useContext(FetchContext)
const [Paid,setPaid]=useState()
const [sale,setSale]=useState()

useEffect(()=>{
  fetchTransactions()
},[0])

const summation=(data)=>{
  if( data==null)return 0
  let total = 0
  data.map((item)=>{
    total +=item.sale
  })
  return total
}
const handleTransactions=async()=>{
sale.Paid += parseInt(Paid)
console.log(sale)
const res=await axios.post("http://127.0.0.1:8000/hospital/salesupt/",sale)
if(res.status==201){
  toast.success('🦄 Expense successfully saved!', {
    position: "top-right",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    setSHow(!show)
    fetchTransactions()
}
}

  return (


    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <div className='flex justify-between w-full m-2'>
        <div className='flex items-center flex-center justify-center'>
        <h3 className='text-slate-500  mx-4 my-1'>Total Drugs: {summation(transactions)}</h3>
        <h3>Month: October</h3>
        </div>
        {show ? 
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
          handleTransactions()}}>
        <div className='sales bg-slate-700'>
          <input onChange={(e)=>setPaid(e.target.value)} type="Number" className='p-1 rounded' placeholder='Amount Paid' />  
          <button className='mt-3 mx-3 bg-green-500 p-1 rounded text-sm text-white'>Update</button>
        </div>
        </form>
        :""}
        <ToastContainer />
      <h3 className='text-xl text-slate-800'>Total transactions</h3>
      <input type="text" className='mr-5' placeholder='Search transaction' />
      </div>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm '>id</th>
          <th className='flex-col items-center justify-center text-sm w-80'>List Name</th>
          <th className='flex-col items-center justify-center text-sm '>Date</th>
          <th className='flex-col items-center justify-center text-sm'>Total Price</th>
          <th className='flex-col items-center justify-center text-sm'>Paid</th>
          <th className='flex-col items-center justify-center text-sm'>Balance</th>
        </tr> 
      </thead>
      <tbody>
      {transactions.map((item,key)=>(
        <tr className='border flex-row h-5' key={key}>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.id}</div></td> 
         <td className='items-center justify-center text-sm border w-80 '><div className='flex items-center justify-center'>{item.drugname}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center'>{item.dates}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.Totalprice}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.Paid}</div></td>
          <td className='items-center justify-center text-sm w-60 border'><div className='flex items-center justify-center'>{item.Totalprice-item.Paid}</div></td>
          <td className='items-center justify-center text-sm w-80 border'><div className='flex items-center justify-center'>
          <button onClick={()=>{
            setSale(item)
            setSHow(!show)
          }} className='bg-green-500 p-1 rounded text-white'>Update</button>
          </div></td>
        </tr>
      ))}
      </tbody>
    </table>  
   </div>

  )
}

export default Transactions