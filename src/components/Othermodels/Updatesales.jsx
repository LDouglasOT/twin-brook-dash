import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { data } from 'autoprefixer';
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {PopupContext} from "../../Context/Popupcontroller"
// import {NotificationContainer, NotificationManager} from 'react-notifications';


function Updatesales() {

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto ">

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
            <div className='w-full  text-slate-200 my-2 flex justify-center'><span>{DrugName}</span></div>

            <form>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Drug name</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panadol" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Measured in</label>
                  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tbl for tablets" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Quantity</label>
                  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>
              </div>

              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Profit/qty</label>
                  <input onChange={(e) => { 
                    setNationality(e.target.value) 
                    }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required />
                </div>
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Price/tbl</label>
                  <input onChange={(e) => { 
                    setNationality(e.target.value) 
                    }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required />
                </div>
                <div className='flex justify-evenly'>
               </div>
              
              </div>
              <div className='flex justify-end w-full ml-1'>
                <button onClick={()=>showpop(drug)} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
                <button type='submit' name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>Update</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Updatesales