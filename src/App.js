import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Menubar from "./components/MenuBar";

function App() {
  return (
    <Router className="App">
      <Menubar />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      Helloworld!
    </Router>
  );
}

export default App;
