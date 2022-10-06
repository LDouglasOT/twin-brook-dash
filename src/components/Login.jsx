import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
        <div className='w-4/12 h-5/12 rounded p-0 bg-slate-800'>
          
            <div className='mx-auto mt-2 flex justify-center w-full text-white'>
                <span>Twin Brook Admin Login</span> 
                </div>
            <br />
            <br />
            <div className='mx-4'>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User name</label>
                <input type="text" id="first_name" className="bg-gray-100  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div className='m-4'>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pass Code" required=""/>
            </div>
    <div className='w-full flex justify-center p-2 mb-4'>
        <button className='bg-slate-600 px-6 py-1 text-sm text-white rounded active:bg-slate-700'>Login</button>
    </div>

        </div>
    </div>
  )
}

export default Login