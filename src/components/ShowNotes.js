import React from 'react'

export default function ShowNotes(props) {

  return (
    <center>
      <div className='w-3/12 h-12 bg-slate-800  text-white mt-4 text-lg flex justify-between  rounded-lg '>

        <h1 id={props.task} className='pl-3 pt-2'>{props.task}</h1>
        <div className='pr-1 pt-2'>

          <button>
            <i 
            onClick={()=>props.handleEdit(props.task)} className='far fa-edit pr-3'></i>
          </button>
          <button onClick={() => props.deleteTask(props.task)}>
            <i className='fa fa-close pr-3 text-xl text-red-600' ></i>
        
          </button>

        </div>
      </div>

    </center>
  )
}
