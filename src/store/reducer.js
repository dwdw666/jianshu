import headerReducer from '../common/Header/store/reducer';
import { combineReducers } from 'redux-immutable';  


//make reducer be a immutable objet 
export default combineReducers({
    header: headerReducer
})