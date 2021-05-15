import { fromJS } from 'immutable';
import * as constants from './constants';
//use imuutable to make state immutable use function: set() to get a new state  
const defaultState = fromJS({
    logIn: false
});

export default function reducer(state=defaultState, action){
    // immutable's set function 
    switch (action.type) {
        default: 
            return state;
            
    }
    
}