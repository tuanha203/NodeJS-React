import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
