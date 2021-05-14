import { fromJS } from 'immutable';
import * as constants from './constants.js';
//use imuutable to make state immutable use function: set() to get a new state  
const defaultState = fromJS({
    title: '',
    content: ''
});

export default function reducer(state=defaultState, action){
    // immutable's set function 
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            }) //set state
        default: 
            return state;
            
    }
    
}