import { useContext } from 'react'
import styles from './todoItem.module.css'
import { ContextFun } from '../../context/todoConrext'
import { useNavigate } from 'react-router-dom'



export const TodoItem = ({todo, index}) => {
    const {deleteOneTodo, updTodoStatus} = useContext(ContextFun)

    const navigate = useNavigate()

    return (<li className={`list-group-item d-flex ${styles.wrapper1}`}> 
    {`${index+1}. `}  
    <span className={todo.status ? 'text-decoration-line-through' : ''} >
    {todo.title} 
    </span>
    <div className={`${styles.wrapper3}`}>
    <button 
    type="submit" 
    className='btn btn-danger'
    onClick={() => deleteOneTodo(todo.id)}>
      Удалить 
    </button>
  
    <button 
    type="submit" 
    className='btn btn-success mx-3'
    onClick={() => updTodoStatus(todo.id)}>
      Изменить
    </button>
    <button 
    type="submit" 
    className='btn btn-warning'
    onClick={() => navigate(`/tudos/${todo.id}`)}>
     Открыть
    </button>
 
  
    </div>
    
    </li>
    )
  }