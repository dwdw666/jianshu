import React from 'react';
import Header from './common/Header/index';
//import {Iconfont} from '../src/statics/iconfont/iconfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
         <div className="App">
          <Header />
          <Router>
            <div>
              <Route path="/"  exact render={()=><div>home</div>}></Route>
              <Route path="/detail" render={()=><div>detail</div>}></Route>

            </div>
          </Router>
         </div>
      </Provider>
     
    );
  }
  
}

export default App;
