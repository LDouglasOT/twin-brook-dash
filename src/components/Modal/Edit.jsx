import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { data } from 'autoprefixer';
import axios from 'axios'
import { useState } from 'react';
import {PopupContext} from "../../Context/Popupcontroller"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Edit({ modulate }) {
  const {druglst,drug,showing,PostNewStudent,setdrug,showpop,bulkremove,sendbackend,setdruglsts,remove}=useContext(PopupContext)
  const { popup } = useContext(AuthContext)
  const [DrugSellingPrice, setDrugPrice] = useState()
  const [Drugqty, setDrugqty] = useState()
  const [DrugBuying, setDrugBuying] = useState()

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto ">
        <ToastContainer />
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
            <div className='w-full  text-slate-200 my-2 flex justify-center'></div>
             <div className='flex items-center justify-between'>
              <div></div>
              <h3 className='text-center text-white text-lg m-1' >Updating {drug.Name}</h3>
              <button onClick={()=>{
                showpop("drug")
              }} type='none' className='text-white rounded flex items-center justify-center p-2 h-8 mx-4 bg-red-500'>Delete {drug.Name}</button>
             </div>
            <form onSubmit={
              async (e) => {
               e.preventDefault()
               drug.BuyingPrice = DrugBuying
               drug.SellingPrice=DrugSellingPrice
               drug.quantity = parseInt(drug.quantity)+parseInt(Drugqty)
               drug.expectedProfit=(DrugSellingPrice-DrugBuying)*Drugqty
               if(drug){
                console.log(drug.quantity)
                const res=await axios.post("http://127.0.0.1:8000/hospital/drugspk/",drug)
                if(res.status==201){
                  console.log(res)
                  toast.success('🦄 Patient successfully saved!', {
                    position: "top-right",
                    autoClose: true,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                  showpop("submitupdate")
              }}}}>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Quantity from {drug.quantity}</label>
                  <input value={Drugqty} onChange={(e) => { setDrugqty(e.target.value) }} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                </div>
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Buying Price from {drug.BuyingPrice}</label>
                  <input onChange={(e) => { 
                    setDrugBuying(e.target.value) 
                    }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500" required />
                </div>
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Selling Price from {drug.SellingPrice}</label>
                  <input onChange={(e) => { 
                    setDrugPrice(e.target.value) 
                    }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="550" required />
                </div>
              </div>
              <div className='flex items-center justify-between'>
              <div className='flex justify-end w-full ml-1'>
                <button onClick={()=>showpop("submitupdate")} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
                <button type='submit' name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>Update</button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Edit