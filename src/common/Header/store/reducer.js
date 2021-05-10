import * as constants from './constants'; 
import { fromJS } from 'immutable';

//use imuutable to make state immutable use function: set() to get a new state  
const defaultState = fromJS({
    focused: false,
    mouseIn: false, //mouse state
    list: [],  //immutable list
    page: 1,
    totalPage: 1 
});

export default function reducer(state=defaultState, action ){
    // immutable's set function 
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
            
    }
    
}