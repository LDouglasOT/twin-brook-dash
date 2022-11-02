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
        const data=await axios.get("http://127.0.0.1:8000/hospital/drugs/")
        if(data){
          console.log(data.data)
          setDatalength(data.data.length)
          setData(data.data)
          setLoading(false)
          let discounted=0
          let total=0
          let expectedamount=0
          drugdata.map((item)=>{
            console.log(item)
          })
          setDIscounttotal(discounted)
          setfeesCollected(total)
          setExpected(expectedamount)
        }
    }

    const fetchTransactions=async()=>{
        console.log("///////////////////////////////////")
        let res =await axios.get("http://127.0.0.1:8000/hospital/sales/")
        if(res){
            console.log("///////////////////////////////////")
           console.log(res.data)
           seTransactions(res.data)
           setLoading(!loading)
        }
    }

    const fetchExpenses=async()=>{
        let res =await axios.get("http://127.0.0.1:3001/expenses/")
        if(res){
            console.log(res.data.message)
           setExpenses(res.data.message)

           setLoading(!loading)
        }
    }

    const fetchPatient=async()=>{
        const res=await axios.get("http://127.0.0.1:8000/hospital/patient/")
        if(res){
            console.log(res)
            setPatient(res.data)
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