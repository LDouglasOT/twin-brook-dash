import React from 'react'
import Header from '../Header'
import {useState} from 'react'
import Teacher from './Teacher'
import Student from './Student'

function New() {
    const [register,setRegister]= useState(false)
  return (
    <div className='w-full h-screen drop-shadow-2xl border bg-gray-100 overflow-hidden rounded-lg'>
            <div className='w-full h-12 drop-shadow-sm bg-white rounded-t-lg px-10 flex justify-center items-center'>
            <Header title="New student/Teacher" />
            </div>
            <div>
            {register ? <Student/> : <Teacher/>}
            </div>
    </div>
  )
}

export default New