import './css/build.css'
import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';
import Modal from './components/Modal';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [isModalOpen, setIsModalOpen] = useState(true);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  return (
    <div className='font-arial text-center'>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} />}/>
      <Header />
      <main className='h-64vh'>
        <div>
          <h2 className='font-bold text-2xl mb-4'>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2 className='font-bold text-2xl my-4'>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
