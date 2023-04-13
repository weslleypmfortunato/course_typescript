import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { ITask } from '../interfaces/Task'

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, title, difficulty }

    setTaskList!([...taskList, newTask])
    setTitle('')
    setDifficulty(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue)) {
        setDifficulty(numValue);
      } else {
        setDifficulty(0)
      }
    }
  }
  

  return (
    <form onSubmit={addTaskHandler} className='flex flex-col max-w-md mx-auto'>
      <div className='flex flex-col text-left'>
        <label htmlFor="title" className='font-bold mb-1'>Título</label>
        <input 
          type="text" 
          name='title'
          value={title}
          onChange={handleChange}
          placeholder='Título da tarefa'
          className='py-1 px-4 mb-2 border border-gray-400 rounded'
        />
      </div>
      <div className='flex flex-col text-left'>
        <label htmlFor="difficulty" className='font-bold mb-1'>Dificuldade</label>
        <input 
          type="number" 
          name='difficulty'
          value={difficulty}
          onChange={handleChange}
          placeholder='Dificuldade da tarefa'
          className='py-1 px-4 mb-2 border border-gray-400 rounded'
        />
      </div>
      <input 
        type="submit" 
        value={btnText} 
        className='bg-blue-100 hover:bg-white border border-blue-100 hover:border-gray-400 text-black transition duration-500 cursor-pointer py-1 rounded'
      />
    </form>
  )
}

export default TaskForm