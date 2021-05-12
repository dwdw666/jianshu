import { fromJS } from 'immutable';

//use imuutable to make state immutable use function: set() to get a new state  
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "Top",
        imgurl: "https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=c_scale,q_auto,w_140&v=1619585878"
    },{
        id: 2,
        title: "Jungle",
        imgurl: "https://opgg-static.akamaized.net/images/lol/champion/Amumu.png?image=c_scale,q_auto,w_140&v=1619585878"
    }],
    articleList:[{
        id: 1,
        title:'REAL-TIME CHAMPION INFORMATION',
        desc: 'sssssssssssssssssss',
        imgurl: "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=c_scale,q_auto,w_140&v=1619585878"
    },{
        id: 1,
        title:'REAL-TIME CHAMPION INFORMATION',
        desc: 'sssssssssssssssssss',
        imgurl: "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=c_scale,q_auto,w_140&v=1619585878"
    }]
});

export default function reducer(state=defaultState, action ){
    // immutable's set function 
    switch (action.type) {
        
        default: 
        return state;
            
    }
    
}