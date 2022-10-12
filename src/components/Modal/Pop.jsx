import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Pop({modulate}) {
  const options = [
    'Baby','Middle','Top','P1', 'P2', 'P3','P4','P5','P6','P7'
  ];
  const options_stream = [
    'Pegion', 'Duckling', 'SOmething','SOmething','P5','P6','P7'
  ];
  const defaultOption = options[0];

  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto ">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className='w-full bg-slate-600 p-2 text-white flex justify-center'>Modify Luzinda Douglas</div>
            
<form>
    <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle Name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required=""/>
      </div>
     </div>
     <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Class Name</label>
            <Dropdown options={options} onChange={(e)=>{
              console.log(e.value)
            }} value={defaultOption} placeholder="Select an Class" />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Class Name</label>
            <Dropdown options={options} onChange={(e)=>{
              console.log(e.value)
            }} value={defaultOption} placeholder="Select a Stream" />
        </div>
        <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Applcabe Discount</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 30%" required=""/>
        </div>
        <div>
        </div>
        </div>
      <div class="grid gap-6 mb-6 mx-4 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Applicabe Discount</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fees Payable</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
  
      </div>
      <div class="grid gap-6 mb-6 mx-4 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Applicabe Discount</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fees Payable</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
  
      </div>
      <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle Name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required=""/>
      </div>
     </div>

      <div className="flex justify-evenly w-full">
        <button className='bg-red-500 p-2 m-2 text-white 2-34 rounded' onClick={()=>modulate()} >close</button>
        <button className='bg-green-500 p-2 m-2 text-white w-24 rounded'>Register</button>
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