import { useContext } from "react"
import { useState } from "react"
import { ContextFun } from "../../context/todoConrext"


export const Form = ({closeModal}) => {
   const {addToList} = useContext(ContextFun)
    const [value, setValue] = useState("")
  
   
    const hundleSubmit = (event) => {
        event.preventDefault()
        // if (!value) return;
        addToList(value)
        closeModal()
        return setValue('')
        
    }
    
      
    return (        
    <form onSubmit={(event)=>hundleSubmit(event)} className="d-flex flex-column align-items-center mt-3">
        <div className="d-flex mb-3">
          
          <input 
           placeholder="задача"
           value={value}
           onChange={(event)=>setValue(event.target.value)}
           type="text" 
           className="form-control"
           required
           />
          <button type="submit" className="btn btn-primary">Добавить</button>
        </div>
      
       
      </form>
      )

    
    } 