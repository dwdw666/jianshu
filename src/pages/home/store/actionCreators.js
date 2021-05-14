import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) =>({
    type: constants.CHANG_HOME_DATA,
    topicList: result.topicList,
    recommendlist: result.recommendlist,
    articleList: result.articleList
})
const addHomeList = (list)=>({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
})
export const getHomeInfo = () =>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
       
    }
}
export const getMoreLite = (page)=>{
    return (dispatch) => {
        axios.get('api/homeList.json?page=' + page).then((res)=>{
            const result = res.data.data;
            const action = addHomeList(result);
            dispatch(action);
        })  
    }


}

export const toggleTopShow =(show)=> ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show

})