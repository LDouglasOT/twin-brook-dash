import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import "./index.css"
function Login() {
const navigate=useNavigate()
const {authenticate,authenticated}=useContext(AuthContext)
const credentials={}
const handleSubmit=()=>{
let cred=authenticate(credentials)
if(cred){
  console.log(authenticate)
  navigate("/")
}
}

  return (
    <div
    
    className='wrapping'>
    <div>
      
        <div className="w-3/6 mx-auto my-3 rounded-lg border-4 bg-slate-900 p-10 flex flex-col">
        <div className="w-full flex justify-center flex-col align-center">
             <h3 className='mx-auto my-2 text-slate-500 font-extrabold text-xl'>Welcom to Sanyu Hospital Login</h3>
       </div>
  
             <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UserName</label>
                <input onChange={(e)=>{
                  credentials.username=e.target.value
                }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required=""/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input onChange={(e)=>{
                  credentials.password=e.target.value
                }} type="password" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required=""/>
            </div>
            <div className="w-full flex justify-center">
            <button onClick={()=>handleSubmit(credentials)} className='px-2 py-1 w-3/4 mx-auto my-1 bg-green-800 rounded text-white'>Login</button>
            </div>

        </div>
        <div>
        </div>
   </div>
   </div>
  )
}

export default Login