import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import axios  from 'axios'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import {Newxpense} from "."
import { data } from 'autoprefixer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Expenses() {

const [table,setDiscount]=useState([
  {
    "Price":100,
    "Drug":"Paid upcoming artist for some job",
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
const [newx,setNew]=useState(false)
const {transactions,fetchTransactions,fetchExpenses,expenses}=useContext(FetchContext)



useEffect(()=>{
  fetchExpenses()
},[0])
const add=(data)=>{
  if(data=="after"){
    setNew(!newx)
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
      fetchExpenses()
  }else{
    setNew(!newx)
  }

}

const summation=(data)=>{
  if( data==null)return 0
  let total = 0
  data.map((item)=>{
    total +=item.Amount
  })

  return total
}

  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      <div className='flex justify-between w-full m-2'>
        <div className='flex items-center flex-center justify-center'>
        <h3 className='text-slate-500  mx-4 my-1'>Total Expenses: {summation(expenses)}</h3>
        <select>
        <option value="0">Select Month:</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">March</option>
    <option value="6">April</option>
    <option value="7">May</option>
    <option value="8">June</option>
    <option value="9">July</option>
    <option value="10">August</option>
    <option value="11">September</option>
    <option value="12">October</option>
    <option value="12">November</option>
    <option value="12">December</option>
        </select>
        </div>
        <ToastContainer />
        {newx ? <Newxpense new={add}/>:""}
      <h3 className='text-xl text-slate-800'>Total Expenses</h3>
      <button onClick={()=>add("j")} className='px-4 mx-5 text-white bg-green-500'>New Expense</button>
      </div>
    <table className="table table-striped table-bordered table-list w-full bg-white-bg">
    
      <thead className=''>
        <tr className="border w-10">
          <th className='flex-col items-center justify-center text-sm w-5/12'>Reason</th>
          <th className='flex-col items-center justify-center text-sm w-80'>Amount(USh)</th>
          <th className='flex-col items-center justify-center text-sm '>Date</th>
        </tr> 
      </thead>
      <tbody>
      {expenses.map((item,key)=>(
        <tr className='border flex-row h-5' key={key}>
          <td className='items-center justify-center text-sm w-90 border p-2'><div className='flex items-center justify-center  text-sm'>{item.Reason}</div></td> 
         <td className='items-center justify-center text-sm border w-80 '><div className='flex items-center justify-center  text-sm'>{item.Amount}</div></td>
          <td className='items-center justify-center text-sm border w-80'><div className='flex items-center justify-center  text-sm'>{item.Date}</div></td>
        </tr>
      ))}
      </tbody>
    </table>  
   </div>

  )
}

export default Expenses