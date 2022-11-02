import React,{useContext} from 'react'
import { useState } from 'react'
import {FetchContext} from  "../../Context/FetchCOntroller"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newxpense(props) {
    const {updatecode,popupname,schoolpaycode}=useContext(FetchContext)
    const [Reason,setReason]=useState()
    const [Amount,setAmount]=useState()
    const [User,setUser]=useState()
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >

      <div className="relative w-auto mx-auto p-2 ">
        <div className="border-0 px-10 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
      
   <form action="" onSubmit={async(e)=>{
    e.preventDefault()
      if(Reason && Amount){
        let data={
          "reason":Reason,
          "amount":Amount,
        }
        console.log(data)
        let res= await axios.post("http://127.0.0.1:3001/expenses/",data)
        if(res.status==201){
    
          console.log(res.status)
          props.new("after")
          console.log("none")
        toast.success('Failed to save check your network and form!', {
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
        
      }

    }
   }>


        <div className='w-full  text-slate-500 my-2 flex justify-center'><span>New Expense by Luzinda</span></div>
        <ToastContainer />
    <div>
        <label for="first_name" class="block w-80 mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Reason</label>
        <input type="text" onChange={(e)=>setReason(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 15" required/>
    </div>

    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Amount</label>
        <input type="number" onChange={(e)=>setAmount(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 15" required/>
    </div>
    <div>
    <button onClick={()=>props.new()} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
    <button type='submit' className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>save</button>
    </div>

    </form>
  
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default Newxpense