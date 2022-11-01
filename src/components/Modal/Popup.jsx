import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { data } from 'autoprefixer';
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { PopupContext } from "../../Context/Popupcontroller"
// import {NotificationContainer, NotificationManager} from 'react-notifications';


function Popup({ modulate }) {
  const { PostNewStudent } = useContext(PopupContext)
  const { popup } = useContext(AuthContext)
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [MiddleName, setMiddleName] = useState()
  const [Age, setAge] = useState()
  const [Residence, setResidence] = useState()
  const [Nationality, setNationality] = useState()
  const [Transport, setTransport] = useState()
  const [PayCode, setPayCode] = useState()
  const [classname, setclassname] = useState()
  const [Stream, setStream] = useState()
  const [Phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [fullnames, setfullnames] = useState()
  const [Paid, setPaid] = useState()
  const [Uniform, setUniform] = useState()
  const [Discount, setDiscount] = useState()

  //  const createNotification = (type,message) => {
  //     return () => {
  //       switch (type) {
  //         case 'info':
  //           NotificationManager.info('Info message');
  //           break;
  //         case 'success':
  //           NotificationManager.success('Success message', 'Title here');
  //           break;
  //         case 'warning':
  //           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //           break;
  //         case 'error':
  //           NotificationManager.error('Error message', 'Click me!', 5000, () => {
  //             alert('callback');
  //           });
  //           break;
  //       }
  //     };
  //   };

  const newstudent = {}
  const options = [
    'Baby', 'Kindergatten', 'Top', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'
  ];
  const options_stream = [
    'Pegion', 'Dove', 'Eagles', 'Penguin', 'Parrot']
  const defaultOption = options[0];
  const defaultOptiontwo = options_stream[0];
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto ">

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
            <div className='w-full  text-slate-200 my-2 flex justify-center'><span>New Student Registration</span></div>

            <form onSubmit={
              async (e) => {
                e.preventDefault()
                newstudent.Stream = parseInt(newstudent.Stream)
                newstudent.classname = parseInt(newstudent.classname)
                newstudent.Discount = parseInt(newstudent.Discount)
                newstudent.Age = parseInt(newstudent.Age)
                newstudent.Transport = parseInt(newstudent.Transport)

                data = {
                  'FirstName': FirstName,
                  'SurName': LastName,
                  'MiddleName': MiddleName,
                  'Age': parseInt(Age),
                  'Residence': Residence,
                  'Discount': parseInt(Discount),
                  'Transport': Transport,
                  'Studentcode': PayCode,
                  'ClassName': classname,
                  'Stream': Stream,
                  'Paid': parseInt(Paid),
                  'mobile_phone': Phone,
                  'Email': email,
                  'fullnames': fullnames,
                  'Uniform': Uniform,
                  'StudentID': 0,
                  'Gender': "M",
                  'nationality': Nationality
                }
                const post = PostNewStudent(data)
                if (post) {
                  console.log(post)
                  //NotificationManager.success('Success', 'Student registered successfully');
                  // popup("new", 1)
                }
              }

            }>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">First name</label>
                  <input onChange={(e) => {
                    setFirstName(e.target.value)
                  }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Semakula" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Middle Name</label>
                  <input onChange={(e) => { setLastName(e.target.value) }} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bashir" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Last name</label>
                  <input onChange={(e) => { setMiddleName(e.target.value) }} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>
              </div>

              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Nationality</label>
                  <input onChange={(e) => { setNationality(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ugandan" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Age</label>
                  <input onChange={(e) => { setAge(e.target.value) }} type="number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 25" required />
                </div>
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">School Pay Code</label>
                  <input onChange={(e) => { setPayCode(e.target.value) }} type="Number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 4588424" required />
                </div>
              </div>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">

                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Stream</label>
                  <select className='p-3 rounded b' onChange={(e) => setStream(e.target.value)}>
                    <option >Select cLass</option>
                    <option value="Dove">Dove</option>
                    <option value="Penguin">Penguin</option>
                    students            <option value="Eagles">Eagles</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Pegeon">Pegeon</option>
                  </select>
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Place of Residence</label>
                  <input onChange={(e) => { setResidence(e.target.value) }} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30000" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Transport Fee</label>
                  <input onChange={(e) => { setTransport(e.target.value) }} type="Number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30000" required />
                </div>
                <div>
                </div>
              </div>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">

                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Class</label>
                  <select className='p-3 rounded b' onChange={(e) => setclassname(e.target.value)}>
                    <option >Select cLass</option>
                    <option value="Baby">Baby</option>
                    <option value="Kindergatten">Kindergatten</option>
                    <option value="Top">Top</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
                    <option value="P5">P5</option>
                    <option value="P6">P6</option>
                    <option value="P7">P7</option>

                  </select>

                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Deposited Fee</label>
                  <input onChange={(e) => { setPaid(e.target.value) }} type="Number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30000" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Fees Discount</label>
                  <input onChange={(e) => { setDiscount(e.target.value) }} type="Number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 30000" required />
                </div>
              </div>
              <div className='flex justify-center items-center text-slate-200'>
                <h3>GAURDIANS INFORMATIONS</h3>
              </div>
              <div class="grid gap-6 mb-6 mx-4 md:grid-cols-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Full Names</label>
                  <input type="text" onChange={(e) => setfullnames(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Luzinda Douglas" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Phone Number</label>
                  <input onChange={(e) => setPhone(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. 0780000000" required />
                </div>
              </div>

              <div className='flex justify-end w-full ml-1'>
                <button onClick={() => popup("new", 1)} className='bg-red-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-red-800'>Close</button>
                <button type='submit' name="Register" className='bg-green-600 text-white rounded-sm m-4 text-sm py-1 px-3 active:bg-green-800'>Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Popup