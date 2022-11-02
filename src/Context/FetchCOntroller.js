import { data } from 'autoprefixer'
import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const FetchContext=createContext()
const FetchContextProvider=(props)=>{
    const [transactions,seTransactions]=useState([])
    const [loading,setLoading]=useState(true)
    const [drugdata,setData]=useState([])
    const [datalength,setDatalength]=useState(0)
    const [expected,setExpected]=useState(0)
    const [discountTotal,setDIscounttotal]=useState(0)
    const [feesCollected,setfeesCollected]=useState(0)
    const[schoolpaycode,setSchoolpaycode]=useState()
    const[popupname,setPopupname]=useState()
    const [ipaycode,setupPaycode]=useState(false)
    const [expenses,setExpenses]=useState([])
    const [patient,setPatient]=useState([])

    const updatecode=(schoolpay,name)=>{
        console.log(schoolpay)

        if(schoolpay){
            setSchoolpaycode(schoolpay)
            setPopupname(name)
            setupPaycode(!ipaycode)
        }
       
    }
    const fetchdata=async()=>{
        const data=await axios.get("https://twinbrook.onrender.com/drugs")
        if(data){
          console.log(data.data.message)
          setDatalength(data.data.message.length)
          setData(data.data.message)
          setLoading(false)
        }
    }

    const fetchTransactions=async()=>{
        let res =await axios.get("https://twinbrook.onrender.com/sales/")
        if(res){
           console.log(res.data.message)
           seTransactions(res.data.message)
           setLoading(!loading)
        }
    }

    const fetchExpenses=async()=>{
        let res =await axios.get("https://twinbrook.onrender.com/expenses/")
        if(res){
            console.log(res.data.message)
           setExpenses(res.data.message)

           setLoading(!loading)
        }
    }

    const fetchPatient=async()=>{
        const res=await axios.get("https://twinbrook.onrender.com/patients/")
        if(res){
            console.log(res.data.message)
            setPatient(res.data.message)
        }
    }
const exports={ 
    transactions,
    fetchTransactions,
    loading,
    updatecode,
    datalength,
    expected,
    feesCollected,
    discountTotal,
    schoolpaycode,
    popupname,
    ipaycode,
    fetchdata,
    drugdata,
    fetchExpenses,
    expenses,
    patient,
    fetchPatient
}
return(
    <FetchContext.Provider value={{
   ...exports
    }}>
        {props.children}
    </FetchContext.Provider>
)
}

export default FetchContextProvider