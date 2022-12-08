
import './App.css';
import React from 'react';
import Notes from './components/Notes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeletedItems from './components/DeletedItems';
function App() {
 
  
 
  return (
   <>
    <div className='h-screen w-full bg-slate-200 overflow-x-auto pb-5'>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Notes />} exact/>
        <Route path="/deletedItems" element={<DeletedItems/> }exact />
     
          </Routes>
          </BrowserRouter>
  
    
   </div>
   </>
  
  )
}

export default App;
