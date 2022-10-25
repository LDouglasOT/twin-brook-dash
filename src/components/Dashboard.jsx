import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {useState} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import {Header} from './index';

function Dashboard() {
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
    return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg h-screen'>
        <div>
          <div className=' bg-slate-10 m-5'>
          <Header title="Students List" Page='students' home='Home'/>
          </div>
            <div className='flex justify-between'>
              
            <div className='bg-white w-6/12 h-80 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
            <h3 className='mx-auto text-center text-lg font-black lining-nums'>Termly Payment Percentage</h3>
            <div className='w-full h-full flex justify-center'>
            <PieChart data={Fees} radius="38" label={()=>Fees.title}/>
            </div>
            </div>
            <div className='flex flex-wrap bg-white w-6/12 h-80 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
              <div className='flex p-4 bg-slate-800 w-80 h-32 rounded m-5 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Total Fees Paid</h2>
                <h3 className='text-slate-200 text-2xl'>USh {feesCollected}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-80 h-32 rounded m-5 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Total Fees Expected</h2>
                <h3 className='text-slate-200 text-2xl'>USh {expected}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-80 h-32 rounded m-5 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Total Discounted fee</h2>
                <h3 className='text-slate-200 text-2xl'>30%</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-80 h-32 rounded m-5 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Total Students</h2>
                <h3 className='text-slate-200 text-2xl'>2400</h3>
              </div>
            </div>
            </div>
        </div>
        <h3>Feature coming soon</h3>
   </div>
  )
}

export default Dashboard