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
    total +=item.Profit
  })
  return total
}

const Profit=(data)=>{
  if( data==null)return 0
  let total = 0
  data.map((item)=>{
    total +=item.Total
  })
  return total
}

const handleTransactions=async()=>{
sale.Paid += parseInt(Paid)
console.log(sale)
const res=await axios.post("https://twinbrook.onrender.com/hospital/salesupt/",sale)
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
        <h3 className='text-slate-500  mx-4 my-1'>Total Profit: {summation(transactions)}</h3>
        <h3 className='text-slate-500  mx-4 my-1'>Total Sales: {Profit(transactions)}</h3>
        <h3>Month: October</h3>
        </div>
        {show ? 
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
          handleTransactions()}}>
        <div className='sales bg-slate-700'>
          <input onChange={(e)=>setPaid(e.target.value)} type="Number" className='p-1 rounded' placeholder='Amount Paid' />  
          <div className='flex items-center'>
          <button onClick={()=>setSHow(!show)} className='mt-3 mx-3 bg-red-500 p-1 rounded text-sm text-white'>close</button>
          <button className='mt-3 mx-3 bg-green-500 p-1 rounded text-sm text-white'>Update</button>
          </div>
          
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
          <th className='flex-col items-center justify-center text-sm '>Drug Name</th>
          <th className='flex-col items-center justify-center text-sm w-80'>Profit</th>
          <th className='flex-col items-center justify-center text-sm '>Paid</th>
          <th className='flex-col items-center justify-center text-sm '>Supplier</th>
       
        </tr> 
      </thead>
      <tbody>
      {transactions.map((item,key)=>(
        <tr className='border flex-row h-5' key={key}>
          <td className='items-center justify-center text-sm w-80 border p-2'><div className='flex items-center justify-center'>{item.drugName}</div></td> 
         <td className='items-center justify-center text-sm border w-80 '><div className='flex items-center justify-center text-sm flex-wrap'>{item.Profit}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center text-sm'>{item.Total}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center text-sm'>{item.supplier}</div></td>
        </tr>
      ))}
      </tbody>
    </table>  
   </div>

  )
}

export default Transactions