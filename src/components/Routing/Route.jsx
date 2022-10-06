import React from 'react'
import {
  Link
} from 'react-router-dom';

      function Route({route,icon,arrow,Lin}) {
  return (
    <div className="h-12 w-ful px-5 flex items-center rounded justify-between bg-slate-600 mt-1 text-white mx-3 hover:cursor-pointer hover:bg-slate-700 ">
        {icon}
       <div className="flex justify-justify w-3/4">
       <span className="text-lg hover:text-slate-400"><Link to={Lin}>{route}</Link></span> 
       <div></div>
       </div>
    </div>
  )
}

export default Route