import React,{useContext} from 'react'
import { useState } from 'react'
import {FetchContext} from  "../../Context/FetchCOntroller"
import axios from 'axios'
import {PopupContext} from "../../Context/Popupcontroller"

function AddPopup() {
const [qty,setQty]=useState(0)
const {druglst,drug,showing,setdrug,bulkremove,sendbackend,setdruglsts,remove}=useContext(PopupContext)
const [iPrice,setPrice]=useState(0)
const calc=(value)=>{
  let val=parseInt(value)*parseInt(drug.SellingPrice)
  setPrice(val) 
  setQty(value)
}
return(

    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto ">

        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
          <div className='w-full  text-slate-200 my-2 flex justify-center'><span>{drug.Name}</span></div>

          <form onSubmit={(e)=>{
            e.preventDefault()
            if(qty){
                drug.quantity=qty 
                
                setdruglsts(drug)
                showing()
            }
          }}>
            <div class="grid gap-6 mb-6 mx-4 md:grid-cols-1">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Quantity</label>
                <input onChange={(e)=>calc(e.target.value)} type="Number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" required />
              </div>
            <h1>Price:{iPrice}</h1>
            </div>
            <div className='flex justify-end w-full ml-1'>
              <button onClick={()=>showing()} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
              <button type='submit' name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>Add</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>

)

}

export default AddPopup