import React from 'react'
import {Header,Popup} from '.'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from "react-redux"
import {students} from './feature/DataStore'
import Dropdown from 'react-dropdown';
import {MdOutlineTextsms} from 'react-icons/md'
import {AiTwotoneDelete} from 'react-icons/ai'
import 'react-dropdown/style.css';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Confirm} from './index'
import { FetchContext } from '../Context/FetchCOntroller';
import {AddPopup} from "./index"
import {PopupContext} from "../Context/Popupcontroller"

function Table() {
  const [table,setTable]=useState([
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"
    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Mabendazol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Macol",
      "Price":500,
      "qty":"tbl"

    },
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }, 
    {
      "id":10,
      "Drug":"Panadol",
      "Price":500,
      "qty":"tbl"

    }
  ])

  const [count,setCount]=useState(100)
  const {
    transactions,
    fetchTransactions,
    loading,
    datalength,
    fetchdata,
    drugdata,
    updatecode
  
  }=useContext(FetchContext)
  const {druglst,drug,setdrug,bulkremove,sendbackend,setdruglsts,remove,showpop,showingcart,clearcart}=useContext(PopupContext)
  const [confirm,setConfirm]=useState(false)
  useEffect(()=> {
    fetchdata()
},[0]);

const cancel=()=>{
  setConfirm(!confirm)
}
const submitdelete=()=>{
console.log("that")  
}

const send=()=>{
  console.log("item")
}

const defaultOption = 'Filter stream';

  return (
    <div className='w-full drop-shadow-xl border bg-white overflow-hidden rounded-lg'>
           {confirm ? <Confirm cancel={cancel()} submit={submitdelete()}/> :""}
           {/* {confirm ? :""} */}
           
            <div className='w-full h-12 drop-shadow-sm bg-white-bg rounded-t-lg px-10 flex justify-center items-center'>
              <Header title="Drugs List" Page={druglst.length} home='Cart'/>           
              <div className='flex item-center'>
                <button onClick={()=>showingcart()} className='mx-5 px-5 py-1 bg-green-500 text-white rounded text-sm'>Cart</button>
                <button onClick={()=>clearcart()} className='mx-5 px-5 py-1 bg-green-500 text-white rounded text-sm flex items-center'>clear</button>
              </div>
            </div>
          
            <table className="table table-striped table-bordered table-list w-full bg-white-bg">
              <thead className=''>
                <tr className="border w-10">
                  <th className='flex items-center justify-center text-sm'>id</th>
                  <th className='flex-col items-center justify-center text-sm w-80'>Drug Name</th>
                  <th className='flex-col items-center justify-center text-sm w-40'>Price/qty</th>
                  <th className='flex-col items-center justify-center text-sm'>Actions</th>
                </tr> 
              </thead>
              <tbody>
              {drugdata.map((item,key)=>(
                <tr className='border flex-row h-5'>
                  <td className='items-center justify-center text-sm w-40 border'><div className='flex items-center justify-center p-2'>{item.quantity}</div></td>
                  <td className='items-center justify-center text-sm w-80'><div className='flex items-center justify-center'>{item.Name}</div></td>
                  <td className='items-center justify-center text-sm'><div className='flex items-center justify-center'>{item.SellingPrice} / tbl</div></td>
                  <td className='items-center justify-center w-20 text-sm border'>
                    <div className='flex justify-center'>
                    <button onClick={()=>{
                      setdrug(item)
                    }} className='w-10 h-8 flex justify-center items-center text-2xl text-white px-3 m-1 bg-green-600 text-sm rounded'>+</button>
                    <button onClick={()=>showpop(item)} className='w-10 h-8 flex justify-center items-center text-sm rounded px-3 text-white m-1 bg-red-700'>Edit</button>
                    </div>
                 </td>
                </tr>
                ))}
              </tbody>
            </table>
           </div>
  )
}

export default Table