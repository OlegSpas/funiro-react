import Title from './components/title/title';
import Content from './components/productsList/content/Content';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ProductPage from './components/productPage/productPage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Title/>
            <Content/>
          </Route>
          <Route path="/product" component={ProductPage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
