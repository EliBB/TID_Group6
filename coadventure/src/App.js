import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';


import Home from './components/MenuBar/Home';
import Excursions from './components/MenuBar/Excursions';
import ExcursionOverview from './components/Excursions/ExcursionOverview';
import BookSeats from './components/MenuBar/BookSeats';
import Feedback from './components/MenuBar/Feedback';
import Profile from './components/MenuBar/Profile';


function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar/>
        

        <Switch>
          <Route path="/excursions" exact render={Excursions}/>
          <Route path="excursionsOverview" render={ExcursionOverview}/>
          <Route path="/bookSeats" render={BookSeats}/>
          <Route path="/feedback" render={Feedback}/>
          <Route path="/profile" render={Profile}/>
          <Route path="/" exact render={Home}/>
        </Switch>  

        <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
