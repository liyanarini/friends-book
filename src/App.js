import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <PostDetails></PostDetails>
          </Route>
         </Switch>
        </Router>
      
    </div>
  );
}

export default App;
