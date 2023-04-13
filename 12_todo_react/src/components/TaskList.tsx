import React from 'react'
import { ITask } from '../interfaces/Task'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
      { taskList.length > 0 ? (
        taskList.map(task => (
          <div key={task.id} className='flex justify-between max-w-md mx-auto border-b p-2'>
            <div className='text-left'>
              <h4 className='text-lg mb-1 font-semibold'>{ task.title }</h4>
              <p>Dificuldade: { task.difficulty }</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <i
                onClick={() => {handleDelete(task.id)}} 
                className="bi bi-trash mb-1 text-lg cursor-pointer border-transparent bg-gray-700 text-white px-1 rounded transition duration-500 hover:scale-105 hover:bg-gray-300 hover:text-red-500">
              </i>
            </div>

          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList