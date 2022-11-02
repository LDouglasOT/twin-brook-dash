import React,{useContext} from 'react'
import { useState } from 'react'
import {FetchContext} from  "../../Context/FetchCOntroller"
import axios from 'axios'
import {PopupContext} from "../../Context/Popupcontroller"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const {druglst,showingcart}=useContext(PopupContext)
  const {fetchdata}=useContext(FetchContext)
  const [paid,setpaid]=useState()
  const [Phone,setPhone]=useState()
  const sum=(data)=>{
    let total=0
    if(data.length==0){
      return 0
    }else{
      data.map((item)=>{
        total +=item.Quantity*item.Sellingprice
      })
      return total
    }

  }
  const updatedrugs=async(id,qty)=>{
    const data={
      "id":id,
      "qty":parseInt(qty)
    }
    console.log("successfully saved items")
    const res=await axios.post("https://twinbrook.onrender.com/sales/post/",data)
    if(res.status==201){
      toast.success('Successfully updated!', {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
  let total=0
  let quantity=0
  let drugnames=""
  druglst.map((item)=>{
    drugnames +=`${item.Name}, `
    total +=(item.Quantity*item.Sellingprice)
  })

console.log(quantity)
if(paid < 0){
 setpaid(total)
}
  const data={
    "Phone":Phone,
    "Other":drugnames,
    "Balance":total-paid,
    "Paid":paid
}


console.log(data)
const res=await axios.post("https://twinbrook.onrender.com/sales/",data)
if(res.status==201){
  console.log("res")
  console.log(res.status)
  console.log(res)
  druglst.map((item)=>{
    updatedrugs(item._id,item.Quantity)
  })
  fetchdata()
  toast.success('Successfully saved!', {
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
}else if(res.status==404){
  console.log("not found")
  toast.warning('This patient doesnot exist in out database!', {
    position: "top-right",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}else{
  console.log("not found on the server")
  toast.warning('Internet connection not available!', {
    position: "top-right",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
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
                  <li  className='text-white'>{item.Quantity*item.Sellingprice}</li>
                  <li  className='text-white'>{item.Quantity}</li>
                 </ul>
                ))
              }
            </ul>
            <div className='flex justify-end w-full ml-1'>
              <div className="flex flex-col w-full m-1 p-1">
              <input onChange={(e)=>setpaid(e.target.value)} type="number" placeholder='Paid'  className='w-full mt-5 h-8'/>
              <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='Phone Number'  className='w-full mt-5 h-8'/>
              </div>
              <button className='mx-10 text-white '>Cost: {sum(druglst)}</button>
              <button onClick={()=>showingcart()} className='bg-red-600  text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800 h-10'>Close</button>
              <button type='submit' onClick={()=>makeOrder()} name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 h-10 px-3 active:bg-green-800'>Order</button>
            </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>

)

}

export default Cart