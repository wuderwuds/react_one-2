import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import { CurrentTodo } from './pages/CurrentTodo/CurrentTodo';
import { TodosContextProvider } from './context/todoConrext';
import { Layout } from './layout';
import { Contacts } from './pages/Contacts/Contacts';
import { Todos } from './pages/Todos/Todos';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [{
      path: "tudos",
      element: <Todos/>,
    },
    
  
    {
    path: "tudos/:idOfTudo",
    element: <CurrentTodo/>
  },
  
  {
    path: "contacts",
    element: <Contacts/>
  }
]
   

  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <TodosContextProvider>
    <RouterProvider router={router} />
    </TodosContextProvider>
  </React.StrictMode>
  
);

