import {reducer as headerReducer} from '../common/Header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detaiReducer} from '../pages/detail/store'
import { combineReducers } from 'redux-immutable';  


//make reducer be a immutable objet 
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detaiReducer
    
})