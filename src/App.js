import React from 'react';
import Header from './common/Header/index';
//import {Iconfont} from '../src/statics/iconfont/iconfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import Detail from './pages/detail';
import Home from './pages/home';
import LogIn from './pages/login';


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
              <Route path="/LogIn" component = {LogIn}></Route>
            </div>
          </Router>
         </div>
      </Provider>
     
    );
  }
  
}

export default App;
