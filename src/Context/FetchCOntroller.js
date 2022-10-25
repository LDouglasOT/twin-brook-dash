import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const FetchContext=createContext()


const FetchContextProvider=(props)=>{
    const [transactions,seTransactions]=useState([])
    const [loading,setLoading]=useState(true)
    const [studentdata,setData]=useState([])
    const [datalength,setDatalength]=useState(0)
    const [expected,setExpected]=useState(0)
    const [discountTotal,setDIscounttotal]=useState(0)
    const [feesCollected,setfeesCollected]=useState(0)
    const[schoolpaycode,setSchoolpaycode]=useState()
    const[popupname,setPopupname]=useState()
    const [ipaycode,setupPaycode]=useState(false)
    const updatecode=(schoolpay,name)=>{
        console.log(schoolpay)

        if(schoolpay){
            setSchoolpaycode(schoolpay)
            setPopupname(name)
            setupPaycode(!ipaycode)
        }
       
    }
    const fetchdata=async()=>{
      
        let tokens="d73cef7b65902cb5110836f1320d6abad6275fca"
        const data=await axios.get("http://127.0.0.1:8000/student/")
        if(data){
          console.log(data.data)
          setDatalength(data.data.length)
          setData(data.data)
          setLoading(false)
          let discounted=0
          let total=0
          let expectedamount=0
          studentdata.map((item)=>{
            console.log(item)
            total += item.fees.Paid
            discounted += item.fees.Percentage
            expectedamount +=item.fees.Expected
         
          })
          setDIscounttotal(discounted)
          setfeesCollected(total)
          setExpected(expectedamount)
        }
    }

    const fetchTransactions=async()=>{
        let res =await axios.get("http://127.0.0.1:8000/student/transactions/")
        if(res){
           console.log(res.data)
           seTransactions(res.data)
           setLoading(false)
        }
    }
    
    const Poststudent=()=>{

        
    }

const exports={ 
    transactions,
    fetchTransactions,
    loading,
    updatecode,
    datalength,
    expected,
    discountTotal,
    feesCollected,
    schoolpaycode,
    popupname,
    ipaycode,fetchdata,studentdata
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