import React from 'react'
import {Header,Popup} from '../'
import {useState,useEffect} from 'react'
import { FetchContext } from '../../Context/FetchCOntroller';
import { useContext } from 'react'


function Uniform() {
const [table,setTable]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
const {studentdata,datalength,fetchdata}=useContext(FetchContext)

useEffect(()=>{
  
  fetchdata()

},[0])

  return (
    <div className="w-full h-full bg-white-bg border  rounded px-5 py-2">
      <Header title="Uniforms payment details" Page='Transactions' home='2500'/>
      <div className='w-full bg-white-bg h-full'>
      <table className="table-auto w-full border h-screen ">
              <thead className=''>
                <tr className="border w-10">
                  <th className='flex-col items-center justify-center border w-30'>Name</th>
                  <th className='flex-col items-center justify-center border w-30'>Class</th>
                  <th className='flex-col items-center justify-center border w-30'>Stream</th>

                  <th className='flex-col items-center justify-center border W-30'>Shorts</th>
                  <th className='flex-col items-center justify-center border W-30'>Shirts</th>
                  <th className='flex-col items-center justify-center border W-30'>Socks</th>
                  <th className='flex-col items-center justify-center border W-30'>Shirts</th>
                  <th className='flex-col items-center justify-center border W-30'>Socks</th>
                  <th className='flex-col items-center justify-center border W-30'>Shirts</th>
                  <th className='flex-col items-center justify-center border W-30'>Actions</th>
                </tr> 
              </thead>
              <tbody>
              {studentdata.map((item,key)=>(
                <tr className='border flex-row h-5'>
                 <td className='items-center justify-center border w-80'><div className='flex items-center justify-center text-sm'>Luzinda Douglas</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-sm'>P1</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-sm'>Pegion</div></td>

                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border'><div className='flex items-center justify-center text-green-500'>Yes</div></td>
                  <td className='items-center justify-center border w-40'><div className='flex items-center justify-center text-sm'>
                      <button className='border p-2 rounded bg-green-500 text-white'>Charge</button>
                      </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
      </div>
    </div>
  )
}

export default Uniform