import React from 'react'
import { useLocation } from 'react-router-dom'
export default function DeletedItems() {
    const location=useLocation()
  return (
    <center>
        
    <h1 className=' mt-10 text-3xl font-semibold text-slate-800'>Deleted Tasks</h1>
    <div className='mt-8'>
{
    location.state.DeletedTasks.map((task)=>{
        
        return(
            <div key={task} className='w-3/12 h-12 bg-slate-800  text-white mt-4 text-lg flex justify-center mt-5  rounded-lg '>

        <h1 className='pl-3 pt-2'>{task}</h1>
        </div>

)

// {console.log(task)}
// <h1 className='text-slate-800 text-xl'>{task}</h1>

})}
    </div>
</center>
  )
}
