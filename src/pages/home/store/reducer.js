import { fromJS } from 'immutable';
import * as constants from './constants';
//use imuutable to make state immutable use function: set() to get a new state  
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendlist:[],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state,action) => {
    return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList':  fromJS(action.articleList),
        'recommendlist':  fromJS(action.recommendlist)
    })
}

export default function reducer(state=defaultState, action){
    // immutable's set function 
    switch (action.type) {
        case constants.CHANG_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return state.set('articleList', state.get('articleList').concat(action.list)); 
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll',action.show);
        default: 
            return state;
            
    }
    
}