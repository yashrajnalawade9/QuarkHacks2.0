import React, { useState, useEffect } from 'react';
import Community from './Component/Community';
import Nav from './Component/Nav';
import Chat from './Component/Chat';
import Home from './Component/Home';
import Blog from './Component/Blog'
import Chatbot from './Component/product/Chatbot';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Recommendation from './Component/product/Recommendation';
import Task from './Component/product/Task';

function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path='/recommendation' element={<Recommendation/>} />
        <Route path='/task' element={<Task/>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
