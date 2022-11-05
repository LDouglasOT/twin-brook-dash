import React, { useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {useState} from 'react'
import { FetchContext } from '../Context/FetchCOntroller';
import { useContext } from 'react'
import {Header} from './index';

function Dashboard() {
  const {transactions,fetchTransactions,fetchExpenses,expenses,fetchdata,drugdata}=useContext(FetchContext)
  const { 
    loading,
    updatecode,
    datalength,
    discountTotal,
    schoolpaycode,
    popupname,
    ipaycode,
    patient,
    fetchPatient
 
}=useContext(FetchContext)
  const {
    expected,
    feesCollected,
  }=useContext(FetchContext)
  useEffect((item)=>{
    fetchExpenses()
    fetchTransactions()    
    fetchdata()
    fetchPatient()
  },[0])
  const summation=(data)=>{
    if( data==null)return 0
    let total = 0
    data.map((item)=>{
      total +=parseInt(item.amount)
    })
    return total
  }
  const calctransactions=()=>{
    let fee=0
    transactions.map((item)=>{
      fee += item.Amount 
    })
    return fee
  }
  


const calcdrug=()=>{
  let profit=0
  drugdata.map((item)=>{
    profit += (parseInt(item.Sellingprice)-parseInt(item.BuyingPrice))
  })
  return profit
}

const calcdrugprofit=()=>{
  let profit=0
  drugdata.map((item)=>{
    profit += item.Profit
  })
  return profit
}


  const data=expected-feesCollected
 const [Fees,setFees]=useState([
    { title: 'Paid', value: calctransactions(), color: '#E38627' },
    { title: 'Balance', value: data, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ])

    return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg h-screen'>
        <div>
          <div className=' bg-slate-10 m-5'>
          <Header title="Hospital Analytics & Performance" Page='9' home='Analytics'/>
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
            <div className='flex items-center justify-center flex-wrap bg-white p-0 w-8/12 h-90 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Total Collected</h2>
                <h3 className='text-slate-200 text-2xl'>USh {calctransactions()}</h3>    
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-white text-sm'>Profits</h2>
                <h3 className='text-slate-200 text-2xl'>USh {calcdrugprofit}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Patients</h2>
                <h3 className='text-slate-200 text-2xl'>{patient.length}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Expected Amount</h2>
                <h3 className='text-slate-200 text-2xl'>USh {calcdrug()}</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Losses(expired)</h2>
                <h3 className='text-slate-200 text-2xl'>USh 100</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Most sold</h2>
                <h3 className='text-slate-200 text-2xl'>USh 2400</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Loaned Cash</h2>
                <h3 className='text-slate-200 text-2xl'>USh 2400</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Expenses</h2>
                <h3 className='text-slate-200 text-2xl'>USh {summation(expenses)}</h3>
              </div>
            </div>
            </div>
            {/* <div className='flex items-center justify-center flex-wrap bg-white p-0 w-full h-80 m-2 rounded drop-shadow-2xl fill-teal-200 backdrop-blur'>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Fees Paid</h2>
                {feesCollected ? <h3 className='text-slate-200 text-2xl'>USh {feesCollected}</h3>:<h3 className='text-white text-sm'>Loading.....</h3>}     
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-white text-sm'>Fees Expected</h2>
                {expected ? <h3 className='text-slate-200 text-2xl'>USh {expected}</h3>:<h3 className='text-white text-sm'>Loading...</h3>}
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Discounted fee</h2>
                <h3 className='text-slate-200 text-2xl'>30%</h3>
              </div>
              <div className='flex p-4 bg-slate-800 w-5/12 h-32 rounded m-1 items-center justify-center flex-col items-center justify-center'>
                <h2 className='text-slate-200 text-sm'>Students</h2>
                <h3 className='text-slate-200 text-2xl'>2400</h3>
              </div>
            </div> */}
        </div>
   </div>
  )
}

export default Dashboard