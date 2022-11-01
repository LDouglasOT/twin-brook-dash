import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {useState} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import {Header} from './index';
import { useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [dashboard,setDashboaard]=useState(0)
  const [Paid,setPaid]=useState(0)
  const [Bal,setBal]=useState(0)
  const [num,setNum]=useState(0)
  const {
    expected,
    feesCollected,
  }=useContext(FetchContext)
  const data=expected-feesCollected
 const [Fees,setFees]=useState([
    { title: 'Paid', value: feesCollected, color: '#E38627' },
    { title: 'Balance', value: data, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ])
  useEffect(()=> {
    fetchdata()
},[0]);

const fetchdata=async()=>{
  const data=await axios.get("http://localhost:3001/dashboard")
    if(data){
      console.log(data)
      setDashboaard(data.data.message.Expected)
      setPaid(data.data.message.Paid)
      setBal(data.data.message.bal)
      setNum(data.data.message.active)
    }
}

    return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg h-screen'>
        <div>
          <div className=' bg-slate-10 m-5'>
          <Header title="Students List" Page='students' home='Home'/>
          </div>
            <div className='flex justify-between'>
              
            <div className='bg-white w-6/12 h-90 m-0 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
            <h3 className='mx-auto text-center text-lg font-black lining-nums'>Termly Payment Percentage</h3>
         
            <div className='w-full flex-col h-full flex justify-center'>
            <div className='flex justify-center items-center m-0'>
                <div>
                  <span className='bg-purple-600 px-2 mx-1'></span>Collected
                </div>
                <div>
                  <span className='bg-blue-800 px-2 mx-1'></span>Expected
                </div>
            </div>
            <PieChart data={Fees} radius="38" label={()=>Fees.title}/>
            </div>
            </div>
            <div className='flex items-center justify-center flex-wrap bg-white p-0 w-8/12 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Fees Paid</h2>
                {Paid ? <h3 className='text-slate-200 text-2xl'>USh {Paid}</h3>:<h3 className='text-white text-sm'>Loading.....</h3>}     
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-white text-sm'>Fees Expected</h2>
                {dashboard ? <h3 className='text-slate-200 text-2xl'>USh {dashboard}</h3>:<h3 className='text-white text-sm'>Loading...</h3>}
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Students</h2>
                <h3 className='text-slate-200 text-2xl'>{num}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Balances</h2>
                <h3 className='text-slate-200 text-2xl'>{Bal}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Discount</h2>
                <h3 className='text-slate-200 text-2xl'>20</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Inactive</h2>
                <h3 className='text-slate-200 text-2xl'>2400</h3>
              </div>
            </div>
            </div>
        
        </div>
   </div>
  )
}

export default Dashboard