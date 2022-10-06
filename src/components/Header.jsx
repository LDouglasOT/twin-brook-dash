import React from 'react'

function Header({Page,title,home}) {
  return (
    <div className='p-0 w-full flex align-center justify-between'>
       <h3 className='text-2xl'>{title}</h3>
       <span>{home}/<span className='text-gray-400 text-sm'>{Page}</span></span>
    </div>
  )
}

export default Header