
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './Components/Nav/Nav'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import User from './Components/UserComp/User';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;