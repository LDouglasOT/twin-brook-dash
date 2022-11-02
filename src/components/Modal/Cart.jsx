import React,{useContext} from 'react'
import { useState } from 'react'
import {FetchContext} from  "../../Context/FetchCOntroller"
import axios from 'axios'
import {PopupContext} from "../../Context/Popupcontroller"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const {druglst,drug,setdrug,bulkremove,sendbackend,setdruglsts,remove,showpop,showingcart}=useContext(PopupContext)
  const [paid,setpaid]=useState()
  const sum=(data)=>{
    let total=0
    if(data.length==0){
      return 0
    }else{
      data.map((item)=>{
        total +=item.quantity*item.SellingPrice
      })
      return total
    }

  }

const makeOrder=async()=>{
  if (druglst.length < 1){
    toast.warning('Cart list is empty!', {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    return
  }
  console.log("engage")
  let drugnames=""
  let total=0
  let profit=0
  let quantity=0
  druglst.map((item)=>{
    drugnames +=`${item.Name}, `
    total +=(item.quantity*item.SellingPrice)
    profit +=(item.quantity*item.BuyingPrice)
    quantity += parseInt(item.quantity)
  })
console.log(quantity)
if(paid < 0){
 setpaid(total)
}
  const data={
    "druglst":druglst,
    "drugname":drugnames,
    "sale":profit,
    "quantity":quantity,
    "Totalprice":total,
    "Paid":paid
}
console.log(data)
const res=await axios.post("http://127.0.0.1:8000/hospital/sales/",data)
if(res.status==201){
  console.log("res")
  console.log(res.status)
  console.log(res)
  toast.warning('Successfully saved!', {
    position: "top-right",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  showingcart()
}else{
  console.log("failed")
}

}

return(
    <>
    <div className="w-full  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative  w-auto my-6 mx-auto w-2/5">
      <ToastContainer />
        <div className="border-0 p-2 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
          <div className=' text-slate-200 my-2 p-1 flex justify-center'><span></span></div>
          <ul className='flex flex-col'>
              {
                druglst.map((item)=>(
                  <ul className='flex justify-between w-full px-6'>
                  <li  className='text-white'>{item.Name}</li>
                  <li  className='text-white'>{item.quantity*item.SellingPrice}</li>
                  <li  className='text-white'>{item.quantity}</li>
                 </ul>
                ))
              }
            </ul>
            <div className='flex justify-end w-full ml-1'>
              <input onChange={(e)=>setpaid(e.target.value)} type="number" placeholder='Paid'  className='w-24 mt-5 h-8'/>
              <button className='mx-10 text-white '>Total Cost: {sum(druglst)}</button>
              <button onClick={()=>showingcart()} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
              <button type='submit' onClick={()=>makeOrder()} name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>Order</button>
            </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>

)

}

export default Cart