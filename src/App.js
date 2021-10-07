import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/detail/:id" component={Detail}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;