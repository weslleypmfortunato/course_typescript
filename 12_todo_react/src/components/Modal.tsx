import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const Modal = ({children}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div id='modal' className={`hidden ${isModalOpen === false ? 'hidden' : ''}`}>
      <div onClick={closeModal} className='w-full h-full absolute bg-black opacity-30'></div>
      <div className='absolute top-32 left-0 right-0 mx-auto w-96 h-96 z-10 bg-white flex flex-col items-center justify-center'>
        <h2 className='mb-2'>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal