import logo from './logo.svg';
import {Routing,Parents,Accounts,Transactions,
  Discounts,Header,Pop,Topstat,Popup,Table,pop,Uniform,NoPage,Messages,Correct,Login,Dashboard} from './components';
import { useState } from 'react';
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

function Authenticated() {
  const {user,authenticated,Newpop,datalength}=useContext(AuthContext)

  const [stat,setStat]=useState([
    {
      'Name':'Students',
      'value':datalength,
      icon:<BsPerson fas icon="user" className='w-8 h-8'/>
    },
    {
      'Name':'Gaurdians',
      'value':'31,022,000',
      icon:<RiParentFill fas icon="user" className='w-8 h-8'/>
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
  
  const { paycode,updatecode} =useContext(AuthContext)
  return ( 
    <div className="flex bg-white-bg h-screen w-full">
       {authenticated ? 
      <div className='w-2/12 bg-slate-700 hover:overflow-auto fixed h-screen'>
         <div className='h-40 bg-slate-700 flex-col justify-center items-center'>
         <div className="w-14 h-14 rounded-2xl mx-auto mt-16 ">
           <img className='rounded-full' src='https://avatars.githubusercontent.com/u/89447046?s=400&u=74cc4f37dbbd47fff924635b28beb9a37f920cb9&v=4' alt='colored'/>
         </div>
           <span className='text-white mx-auto'>Twin Brook schools</span>
        </div>
        <br/>
        <br/>
        <Routing/>
        </div>
        :""}
      <div className='w-10/12 flex-col right-0 bg-white'>
      {authenticated ? 
         <div className='h-20 w-10/12 right-0 ml-30 bg-slate-800 flex justify-between items-center fixed w-full z-10'>
           <div className='flex'>
            <input type='text' placeholder='Search students' className='ml-10 w-full rounded px-20 py-2 bg-slate-600 text-slate-100 text-sm' />
            <button className='bg-slate-700 px-4 mx-2 rounded text-white text-sm'>search</button>
           </div>
           <div className='flex items-center align-center justify-center'>
             <div></div>
           <img className='rounded-full h-12 w-12' src='data:image/jpeg;base64,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' alt='colored'/>
            <span className='px-5 text-slate-300 text-xl'>{user}</span>
           </div>
         </div>
          :""}
         <div className='bg-slate-100 mt-20 p-3 right-0 absolute w-10/12'>
         <div className='h-full w-full right-0'>
          {authenticated ? 
            <div className='w-full h-40 right-0'>
             <Header title="Students List" Page='students' home='Home'/>
             <div className="flex items-center justify-between">
               {stat.map((item,key)=>(
                 <Topstat className='drop-shadow-2xl' key={key} Name={item.Name} value={item.value} icon={ item.icon }/>
               ))}     
             </div>
           </div> 
           :""}
           <div className='h-full w-full bg-white p-0'>
           {Newpop ? <Popup/>:""}
         {/* {modify ? <Correct/>:""} */}
          {paycode ? <Pop/>:""}      
         
         
      <Routes>
       <Route path="/Login" element={ <Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Students" element={ <Table/>}/>
          <Route path="/Uniforms" element={ <Uniform/>}/>
          <Route path="/Messages" element={ <Messages/>}/>
          <Route path="/Dashboards" element={ <Dashboard/>}/>
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
