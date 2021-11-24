import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';


import Home from './components/MenuBar/Home';
import Excursions from './components/MenuBar/Excursions';
import BookSeats from './components/MenuBar/BookSeats';
import Feedback from './components/MenuBar/Feedback';
import Profile from './components/MenuBar/Profile';
import Member from './components/Member/Member';
import MemberRegistration from './components/Member/SignUp/MemberRegistration';
import ExcursionInfo from './components/Member/ExcursionInfo';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar/>

        <Switch>
          <Route path="/excursions" render={Excursions}/>
          <Route path="/bookSeats" render={BookSeats}/>
          <Route path="/feedback" render={Feedback}/>
          <Route path="/profile" render={Profile}/>
          <Route path="/signUp" render={SignUp}/>
          
          <Route path="/member" exact render={Member}/>
          <Route path="/member/:excursionId" render={ExcursionInfo}/>
          <Route path="/memberRegistration" render={MemberRegistration}/>
          <Route path="/" exact render={Home}/>
        </Switch>  

        <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
