import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ContextFun } from "../../context/todoConrext";
import { useState } from "react";
import { useEffect } from "react";

export const CurrentTodo = () => {
 const {idOfTudo} = useParams()

 const navigate = useNavigate()

 const {getCurrentTudo} = useContext(ContextFun)
 
 const [currentTodos, setCurrentTodos] = useState('')    
 
 useEffect(() => {
    
const tudo = getCurrentTudo(idOfTudo)
 setCurrentTodos(JSON.stringify(tudo))
 }, [getCurrentTudo, idOfTudo])
 console.log(currentTodos);

 return (
        <>
        <div>{currentTodos}</div>
        <button onClick={()=>navigate('/')}>nazad</button>
     
        </>
    )

}