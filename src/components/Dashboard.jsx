import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {useState} from 'react'

function Dashboard() {
 const [Fees,setFees]=useState([
    { title: 'One', value: 5, color: '#E38627' },
    { title: 'Two', value: 10, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ])
    return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg h-screen'>
        <div>
            <div className='flex justify-between'>
            <div className='bg-white w-6/12 h-80 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
            <h3 className='mx-auto text-center text-lg font-black lining-nums'>Termly Payment Percentage</h3>
            <div className='w-full h-full flex justify-center'>
            <PieChart data={Fees}/>
            </div>
            </div>
            <div className='bg-white w-6/12 h-80 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
            </div>
            </div>
        </div>
        <h3>Feature coming soon</h3>
   </div>
  )
}

export default Dashboard