import './App.css';
import './static/scss/app.scss';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/getting_started';
import Finalize from './components/presentation/test';
import AboutUs from './components/presentation/aboutUs';
import Register from './components/presentation/Register';
import Signin from './components/presentation/signin';

function App() {
  return (
   <div className="App">
     <Header></Header>
     <Switch>
     <Route path="/login" component={Signin}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/finalize" component={ Finalize}></Route>
        <Route path="/getting-started" component={GettingStarted}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
   </div>
  );
}

export default App;
