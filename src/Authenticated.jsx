import logo from './logo.svg';
import {Routing,Parents,Accounts,Transactions,
  Discounts,Header,Edit,AddPopup,Expenses,Cart,Pop,Topstat,Popup,Table,pop,Uniform,NoPage,Messages,Correct,Login,Dashboard} from './components';
import { useEffect, useState } from 'react';
import {MDBIcon} from "react-bootstrap-icons";
import { BsPerson } from 'react-icons/bs';
import {RiParentFill} from 'react-icons/ri';
import {GrMoney} from 'react-icons/gr';
import {GiMoneyStack} from "react-icons/gi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProtectedRoutes from './Protectedroutes'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { FetchContext } from './Context/FetchCOntroller';
import {PopupContext} from  "./Context/Popupcontroller"

function Authenticated() {
  const {user,authenticated,Newpop}=useContext(AuthContext)
  const {datalength,feesCollected,expected} =useContext(FetchContext)
  const {show,pop,showcart} =useContext(PopupContext)
  const [stat,setStat]=useState([
    {
      'Name':'Students',
      'value':datalength,
      icon:<BsPerson fas icon="user" className='w-8 h-8'/>
    },

    {
      'Name':'Amount expected',
      'value':'600,000',
      icon:<GiMoneyStack fas icon="user" className='w-10 h-8'/>
    },
    {
      'Name':'Amount Collected',
      'value':'32,000',
      icon:<GrMoney fas icon="user" className='w-8 h-8'/>
    }
  ])
  
const [student,setStudent]=useState()
  const { ipaycode,updatecode} =useContext(FetchContext)
  useEffect(()=>{
    
  })
  return ( 
    <div className="flex bg-white-bg h-screen w-full">
  
      <div className='w-2/12 bg-slate-700 hover:overflow-auto flex flex-col items-center fixed h-screen'>
         <div className='h-40 bg-slate-700 flex-col justify-center items-center'>
         <div className="w-14 h-14 rounded-2xl mx-auto mt-16 ">
         </div>
           <span className='text-white mx-auto text-center'>Lemajo Pharmacy</span>
        </div>
        <br/>
        <br/>
        {authenticated ? <Routing/>:
        <h2 className='text-white text-xl text-center'>Sanyu Hospital Login</h2>
        }
        
        </div>
     
      <div className='w-10/12 flex-col right-0 bg-white'>

         <div className='h-20 w-10/12 right-0 ml-30 bg-slate-800 flex justify-between items-center fixed w-full z-10'>
         {authenticated ?  
           <div className='flex'>
            <input type='text' placeholder='Search students' className='ml-10 w-full rounded px-20 py-2 bg-slate-600 text-slate-100 text-sm' />
            <button className='bg-slate-700 px-4 mx-2 rounded text-white text-sm'>search</button>
           </div>
           :<div>hello</div>}
           <div className='flex items-center align-center justify-center'>
             <div></div>
           <span className='px-5 text-slate-300 text-xl'><div>Lemajo Admin</div></span>
           </div>

         </div>
        
         <div className='bg-slate-100 mt-20 p-3 right-0 absolute w-10/12'>
         <div className='h-full w-full right-0'>
          {/* {authenticated ? 
            <div className='w-full h-40 right-0'>
             <Header title="Students List" Page='students' home='Home'/>
             <div className="flex items-center justify-between">
          
                 <Topstat className='drop-shadow-2xl' Name={'Students'} value={datalength} icon={ <BsPerson fas icon="user" className='w-8 h-8'/> }/>
                 <Topstat className='drop-shadow-2xl' Name={'Fees COllected'} value={feesCollected} icon={<GiMoneyStack fas icon="user" className='w-10 h-8'/> }/>
                 <Topstat className='drop-shadow-2xl' Name={'Amount Expected'} value={expected} icon={ <GiMoneyStack fas icon="user" className='w-10 h-8'/> }/>
    
             </div>
           </div> 
           :""} */}
           <div className='h-full w-full bg-white p-0'>
           {Newpop ? <Popup/>:""}
           {show ? <AddPopup/> : ""}
           {/* {true ? <Cart/> : ""} */}
         {/* {modify ? <Correct/>:""} */}
         {pop ? <Edit/> : ""}
         {showcart ? <Cart/>:""}
           
         
         
      <Routes>
       <Route path="/Login" element={ <Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/expenses" element={ <Expenses/>}/>     
          <Route path="/Students" element={ <Table/>}/>
          <Route path="/Uniforms" element={ <Uniform/>}/>
          <Route path="/Messages" element={ <Messages/>}/>
          <Route path="/" element={ <Dashboard/>}/>
          <Route path="/Discounts" element={ <Discounts/>}/>
          <Route path="/transactions" element={ <Transactions/>}/>
          <Route path="/Parents" element={ <Parents/>}/>
          <Route path="/Accounts" element={ <Accounts/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
     
      </Routes>
           </div>
         </div>
         </div>
      </div>
    </div>
  );
}

export default Authenticated;
