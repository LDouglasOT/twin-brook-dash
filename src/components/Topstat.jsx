import React from 'react'

function Topstat({Name,value,icon}) {
  return (
    <div className='flex justify-between items-center rounded mt-4 py-4 w-80 px-5 border drop-shadow-sm'>
        <div className="flex flex-col"> 
            <span className="text-gray-400 text-lg">{Name}</span>
            <span class="font-bold text-xl">{value}</span>
        </div>
    {icon}
    </div>
  )
}

export default Topstat