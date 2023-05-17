import { useContext } from 'react'
import { DeleteAllButton } from '../DeleteAllButton/DeleteAllButton'
import { Todo } from '../TodoList/TodoList'
import styles from './main.module.css'
import { ContextTodo } from '../../context/todoConrext'






export const Main = () => {
  const todos = useContext(ContextTodo)
   if (!todos.length) {
    return  <p className='m-3'>TODO пока пуст....</p>
   }
    return (
        
      
      <main className={`m-3  ${styles.wrapper}`} > 
      <Todo/>

      <DeleteAllButton/>
      
      </main>
   
        
    )
}
