import React, { useState, useEffect } from 'react'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';
export default function Notes() {
    const [tasks, setTask] = useState([])
    const [value, setValue] = useState('')
    const [buttonText, setButtonText] = useState('Add')
    const [DeletedTasks,setDelTask]=useState([])
   
    const addTask = (text) => {
        let list = [...tasks]
        list.push(text)
        setTask(list)


    }
    const handleEdit = (task) => {
        setValue(task)
        setButtonText('Update')

    }
    const updateTask = (previous, latest) => {
        let index = tasks.indexOf(previous)
        let list = [...tasks]


        list.splice(index, 1, latest);
        setTask(list)


    }
    const deleteTask = (task) => {
        let list = [...tasks]
        let delList=DeletedTasks
        delList.push(task)
        setDelTask(delList)

        list = list.filter(element => element !== task)
        setTask(list)
    }
    useEffect(() => {

    }, [tasks, value]

    )
    return (
        <>
            <AddNote addTask={addTask} value={value} setValue={setValue} updateTask={updateTask} buttonText={buttonText} setButtonText={setButtonText} DeletedTasks={DeletedTasks} />

            {tasks.map((task, index) => (


                <ShowNotes key={index} task={task} deleteTask={deleteTask} handleEdit={handleEdit} />

            ))
            }
        </>

    )
}
