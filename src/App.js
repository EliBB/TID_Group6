import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {MenuBar} from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';


import Home from './components/MenuBar/Home';
import Excursions from './components/MenuBar/Excursions';
import ExcursionOverview from './components/Excursions/ExcursionOverview';
import BookSeats from './components/MenuBar/BookSeats';
import Feedback from './components/MenuBar/Feedback';
import Profile from './components/MenuBar/Profile';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import CreateExcursion from './components/Excursions/CreateExcursion';
import ExcursionInfo from './components/Excursions/ExcursionInfo';
import SignUpForm from './components/SignUp/SignUpForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <MenuBar/>

        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/excursions" element={<Excursions/>}/>
          <Route exact path="/excursionsOverview" element={<ExcursionOverview/>}/>
          <Route path="/excursionsOverview/:id" element={<ExcursionInfo/>}/>
          <Route path="/SignUpForm" element={<SignUpForm/>}/>
          <Route path="/bookSeats" element={<BookSeats/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/createExcursion" element={<CreateExcursion/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>  
        
        <Footer/>
      </BrowserRouter>
    </div>
    

  );
}

export default App;
