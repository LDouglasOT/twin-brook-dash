import React from 'react'
import {useState} from 'react'

function Teacher() {
    const [active,setActive]=useState(false)
  return (
    <div className='w-full text-sm px-2 flex flex-col items-center justify-center py-10 h-screen bg-slate-800'>
        <div className='w-2/5 h-4/6 p-4 flex items-center justify-start flex-col align-center h-auto bg-slate-600  rounded-lg'>
        <div className='w-full flex items-center rounded-t-sm bg-slate-100 '>
          <button onClick={()=>setActive(!active)} className={active ? "w-2/4 bg-slate-500 h-10 p-0 text-white":"w-2/4 bg-slate-800 h-10 p-0 text-white"}>Student Registration</button>   
          <button onClick={()=>setActive(!active)} className={active ? "w-2/4 bg-slate-800 h-10 p-0 text-white":"w-2/4 bg-slate-500 h-10 p-0 text-white"}>Teacher Registration</button>       
        </div>
        { active ? 
          <div className='w-full items-center h-auto p-4 flex  flex-col align-center bg-slate-600  rounded-lg'>
          <h3 className='text-lg text-slate-100'>Register New Teacher</h3>
                  <div className='w-5/6 flex flex-col items-center'>
                      <input type="text" placeholder="First Name" className='bg-slate-500 border text-sm px-2 border-slate-500 text-slate-100 placeholder:text-slate-100 m-1 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Last Name" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Place of Residence" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Education level" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Salary" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Contact 1" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Contact 2" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Employment Date" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                      <input type="text" placeholder="Administration Level" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                     
                      <br/>
                      <br/>
                      <button onClick={()=>console.log('clicked')} className='bg-slate-700 border border-slate-700 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-1 hover:text-orange-500'>Register Teacher</button>
                      <button onClick={()=>console.log('clicked')} className='bg-slate-700 border border-slate-700 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded text-sm px-1 hover:text-orange-500 w-1/2 ml-auto mr-auto'>Cancel</button>
                  </div>
          </div>
        :
         <div className='w-full items-center h-auto p-4 flex  flex-col align-center bg-slate-600  rounded-lg'>
        <h3 className='text-lg text-slate-100'>Register New Student</h3>
                <div className='w-5/6 flex flex-col items-center'>
                    <input type="text" placeholder="First Name" className='bg-slate-500 border text-sm px-2 border-slate-500 text-slate-100 placeholder:text-slate-100 m-1 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Last Name" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Class" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Stream" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="School pay code" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Discount" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Father's Names" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Mother's Name" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Gaurdin" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Place of residence" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Date of birth" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                    <input type="text" placeholder="Amount payable" className='bg-slate-500 border border-slate-500 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-2'  />
                     <br />
                     <br />
                    <button onClick={()=>console.log('clicked')} className='bg-slate-700 border border-slate-700 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded w-full text-sm px-1 hover:text-orange-500'>Register Student</button>
                    <button onClick={()=>console.log('clicked')} className='bg-slate-700 border border-slate-700 text-slate-100 m-1 placeholder:text-slate-100 h-9 rounded text-sm px-1 hover:text-orange-500 w-1/2 ml-auto mr-auto'>Cancel</button>
                </div>
        </div>
        }
        </div>

    </div>
  )
}

export default Teacher