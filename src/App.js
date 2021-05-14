import React from 'react';
import Header from './common/Header/index';
//import {Iconfont} from '../src/statics/iconfont/iconfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import Detail from './pages/detail';
import Home from './pages/home';


class App extends React.PureComponent {
  render(){
    return (
      <Provider store={store}>
         <div className="App">
          <Router>
            <Header />
            <div>
              <Route path="/"  exact component = {Home}></Route>
              <Route path="/detail" component = {Detail}></Route>
            </div>
          </Router>
         </div>
      </Provider>
     
    );
  }
  
}

export default App;
