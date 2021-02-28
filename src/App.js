import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home';
import store from './store'
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
        </Provider>
      </Router>
      
    </div>
  );
}

export default App;
