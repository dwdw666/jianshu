import {reducer as headerReducer} from '../common/Header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detaiReducer} from '../pages/detail/store';
import { combineReducers } from 'redux-immutable';  
import {reducer as logInReducer } from '../pages/login/store';

//make reducer be a immutable objet 
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detaiReducer,
    logIn: logInReducer
    
})