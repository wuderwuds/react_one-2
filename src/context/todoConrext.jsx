import React from "react";
import { useTodos } from "../hooks/useTodos";


export const ContextTodo = React.createContext()
export const ContextFun = React.createContext()

export const TodosContextProvider = ({children}) => {
    const {todos, addToList, deleteList, deleteOneTodo, updTodoStatus, getCurrentTudo} = useTodos()
    const fun = {addToList, deleteList, deleteOneTodo, updTodoStatus, getCurrentTudo}

    return (
        <ContextTodo.Provider value={todos}>
            <ContextFun.Provider value={fun}>
                {children}
            </ContextFun.Provider>
        </ContextTodo.Provider>
    )

}