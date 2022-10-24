import axios from 'axios'
import {createContext, useState} from 'react'
import { useToast } from 'react-toastify'
import {Poststudent} from './StudentOperations'


export const AuthContext=createContext()

const AuthContextProvider=(props)=>{


    const [user,setUser]=useState("Luzinda")
    const [token,setToken]=useState()
    const [studentdata,setData]=useState([])
    const [datalength,setDatalength]=useState(0)
    const [Newpop,setNew]=useState(false)
    const [update,setupdate]=useState(false)
    const [authenticated,setAuthenticated]=useState(true)
    const [ipaycode,setupPaycode]=useState(false)
    let [loading, setLoading] = useState(false);
    const[schoolpaycode,setSchoolpaycode]=useState()
    const[popupname,setPopupname]=useState()

    const [expected,setExpected]=useState(0)
    const [discountTotal,setDIscounttotal]=useState(0)
    const [feesCollected,setfeesCollected]=useState(0)
    const newitme=async(paycode,discount)=>{
      if(ipaycode && discount){
        console.log('sad')
      }  
    }

    const authenticate=async(credentials)=>{
            let auth= await axios.post('https://django-fever.herokuapp.com/student/apitokenauth/',credentials)
            if(auth){
                console.log(credentials)
                let token=auth.data.token
                setToken(token)
                localStorage.setItem('token', token);
                if(token){
                    setAuthenticated(true)
                    return true
                }else{
                    return false
                }
            }
    }
    const updatecode=(schoolpay,name)=>{
        console.log(schoolpay)

        if(schoolpay){
            setSchoolpaycode(schoolpay)
            setPopupname(name)
            setupPaycode(!ipaycode)
        }
       
    }
    const login=(username,Password)=>{
        setUser(username)
        return true
    }
    const popup=(key)=>{
   
        if(key=='new'){
        setNew(!Newpop)
 
        }else{
        setupdate(!update)
        }
    }
    const fetchdata=async()=>{
        setLoading(true)
        let tokens="d73cef7b65902cb5110836f1320d6abad6275fca"
        const data=await axios.get("https://django-fever.herokuapp.com/student/",{headers: {'Authorization': `token ${tokens}`}})
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
    const exports={ popup,
        login,
        authenticate,
        fetchdata,
        updatecode,
        Poststudent,
        update,
        Newpop,
        user,
        token,
        authenticated,
        studentdata,
        datalength,
        ipaycode,
        schoolpaycode,
        popupname,
        discountTotal,
        feesCollected,
        expected}

    return(
        <AuthContext.Provider value={{
       ...exports
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
