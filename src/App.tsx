import React from 'react';
import './App.css';
import Darkmode from './components/darkmode';
import Header from './components/header';
// import Maincontent from './components/maincontent';
// import Footer from './components/footer';
import Todo from './components/todo';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Maincontent from './components/maincontent';
import FormValidation from './components/formValidation';
import Counter from './components/counter';
import Tabledata from './tabledata';
import New_Form from './form';
import ChildA from './components/childA';
import Loader from './loader';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Darkmode />
        <div style={{ paddingTop: '80px' }}></div>
        <div className="container mt-5">
          <Routes>
            <Route path='/' element={<Maincontent/>}></Route>
            <Route path='/todo' element={<Todo/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/form' element={<FormValidation/>}></Route>
            <Route path='/callback' element ={<Counter/>}></Route>
            <Route path="table" element={<Tabledata/>}></Route>
            <Route path='/new_form' element={<New_Form/>}></Route>
            <Route path='popdrilling' element={<ChildA/>}></Route>
            <Route path="/loader" element={<Loader/>}></Route>
          </Routes>
          {/* <Footer/> */}
        </div>
        </BrowserRouter>
    </>
  
    
  );
}

export default App;
