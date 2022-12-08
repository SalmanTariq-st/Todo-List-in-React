import React, { useState } from 'react'
// import ShowNotes from './ShowNotes';
import { useNavigate } from 'react-router-dom'
export default function AddNote(props) {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const [flag, setFlag] = useState(false)
  const [previous, setPrevious] = useState('')

  const setTextValue = (event) => {
    let z = event.target.value.toString()
    if (props.value !== '') {
      setFlag(true)
      setPrevious(props.value)
      props.setValue('')
    }

    setText(z)


  }
  const addTask = (text) => {
    if (text !== '') {

      if (flag === false) {

        setText('')
        props.addTask(text)
      }
      else {
        props.updateTask(previous, text)
        setFlag(false)
        setText('')
        props.setButtonText('Add')
      }
    }
  }

  const deleteitems = () => {
    
    navigate("/deletedItems", { state: { DeletedTasks: props.DeletedTasks } })
  }

  return (
    <>



      <div className='flex justify-center '>

        <div className='m-5 flex justify-center' >

          <input type="text" maxLength={26} value={props.value + text} className=' w-96 border-solid border-2 border-slate-800 shadow rounded-lg mr-2 h-14 text-lg font-mono pl-2' onChange={setTextValue} />
          <button className='w-20 bg-slate-800 h-14 border-solid border-2 border-slate-900 text-white rounded-lg font-semibold' onClick={() => addTask(text)}>{props.buttonText}</button>

        </div>
        <div className='absolute left-3/4 ml-60 top-8 '>
          <button onClick={deleteitems}>

            <i className='fa fa-trash-o pr-3 text-2xl text-slate-800' ></i>
          </button>


        </div>
      </div>




    </>
  )
}
