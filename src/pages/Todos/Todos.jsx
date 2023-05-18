import { useContext } from 'react'
import { DeleteAllButton } from '../../components/DeleteAllButton/DeleteAllButton'
import { Todo } from '../../components/TodoList/TodoList'
import { ContextTodo } from '../../context/todoConrext'
import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { Form } from '../../components/Form/form'



export const Todos = () => {
  const todos = useContext(ContextTodo)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const hundleCloseModal = () => {
  //   setIsModalOpen(false)
  // }
   
  
  if (!todos.length) {
    return  <p className='m-3'>TODO пока пуст....</p>
   }
  
    return (
        
      <>
      <button 
      type="submit" 
      className='btn btn-success' 
      onClick={()=>setIsModalOpen(true)}>
       Создать ТУДУ
      </button>
      <Todo/>

      <DeleteAllButton/>
      <Modal isOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)}>
        <Form closeModal={()=>setIsModalOpen(false)}/>
      </Modal>
      
      </>
   
        
    )
}
