import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
      
        <div className="w-3/6 mx-auto my-3 rounded-lg border-4 bg-slate-900 p-10 flex flex-col">
        <div className="w-full flex justify-center flex-col align-center">
             <h3 className='mx-auto my-2 text-slate-500 font-extrabold text-xl'>Welcom to Twinbrook International</h3>
       </div>
        <form onSubmit={()=>console.log("submit")} action="#">
             <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UserName</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
            <div className="w-full flex justify-center">
            <button type='submit' className='px-2 py-1 w-3/4 mx-auto my-1 bg-green-800 rounded text-white'>Login</button>
            </div>
        </form>
        </div>
        <div>
        </div>
   </div>
  )
}

export default Login