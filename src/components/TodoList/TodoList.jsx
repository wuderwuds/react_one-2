import { useContext } from "react"
import { TodoItem } from "../TodoItem/TodoItem"
import { ContextTodo } from "../../context/todoConrext"

export const Todo =() => {
  const todos = useContext(ContextTodo)
  
  return (   
     <ul className='list-group'>
    {todos.map((todo, index)=>{
      return <TodoItem
      key={todo.id}
      todo={todo}
      index={index}
     />
    })}
    </ul>
    )
  }