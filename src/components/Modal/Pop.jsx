import React,{useContext} from 'react'
import {AuthContext} from  "../../Context/AuthContext"

function Pop() {
    const {updatecode}=useContext(AuthContext)
  return (
    <>
    <div
      className="justify-center p-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto p-2">
       
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
        <div className='w-full  text-slate-500 my-2 flex justify-center'><span>New Student Registration</span></div>
      
<form className='p-3'>

      <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Update Code</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="54788475" required=""/>
      </div>
<div className='flex justify-end w-full ml-1'>
<button onClick={()=>updatecode()}  className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
<button className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>update</button>
</div>

</form>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default Pop