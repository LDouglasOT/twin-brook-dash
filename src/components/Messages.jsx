import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Messages() {
    const options = [
        'Baby','Middle','Top','P1', 'P2', 'P3','P4','P5','P6','P7'
      ];
      const options_stream = [
        'Pegion', 'Duckling', 'SOmething','SOmething','P5','P6','P7'
      ];
      const defaultOption = 'Function';
  return (
    <div className='w-full drop-shadow-xl border bg-slate-800 overflow-hidden rounded-lg h-full'>
        <div className='w-4/6 bg-slate-800 mx-auto flex justify-center text-xl my-4 align-center text-white'>
            New Broadcast messages
        </div>
        <div className='h-screen'>

    <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center my-4 mx-2'>
           <h3 className='text-white'>TO :  </h3>
           <div>
             <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-6 mr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a Reason</option>
                <option value="US">School Fees notification</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
            </div>
        </div>
        <div className='flex justify-center items-center my-4'>
           <div>
             <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-6 mr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select a Class</option>
                <option value="DE">Baby</option>
                <option value="DE">Kindergatten</option>
                <option value="DE">Middle</option>
                <option value="US">p1</option>
                <option value="CA">p2</option>
                <option value="FR">p3</option>
                <option value="DE">p4</option>
                <option value="DE">p5</option>
                <option value="DE">p6</option>
                <option value="DE">p7</option>
                </select>
            </div>

        </div>
        
        </div>
        
  <div className='flex justify-center items-center'>
    <textarea id="message" rows="4" class="block p-2.5 w-4/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
     </div>      

     <div className='w-4/6 flex justify-between items-center mx-auto my-4'>
     <input type="text" placeholder='Enter Percentage fees e.g 50' className='mx-10 bg-slate-700 text-slate-50 rounded p-2' />
     <button className='mr-auto bg-slate-500 p-2 rounded text-sm text-slate-50 active:bg-slate-600 active:text-slate-400'>Send Message</button>
     </div>
        </div>
        </div>
  )
}

export default Messages