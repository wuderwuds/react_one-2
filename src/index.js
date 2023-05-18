import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { CurrentTodo } from './components/CurrentTodo/CurrentTodo';
import { TodosContextProvider } from './context/todoConrext';
import { Layout } from './layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [{
      path: "tudos",
      element: <App />,
    },
  {
    path: "tudos/:idOfTudo",
    element: <CurrentTodo/>
  }]
   

  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TodosContextProvider>
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
  </TodosContextProvider>
);

