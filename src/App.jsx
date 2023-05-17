
// import { useState } from 'react';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import {Main} from './components/Main/Main';
import { TodosContextProvider } from './context/todoConrext';




function App() {



return (
    <div className="App">
     <TodosContextProvider>
      <MemoHeader/>
      <Main/>
      </TodosContextProvider>
      
   
     
      <MemoFooter/>
             
    </div>
  );
}

export default App;
