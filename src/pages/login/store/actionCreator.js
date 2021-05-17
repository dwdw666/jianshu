import axios from 'axios';
import * as constants from './constants';
//action
const changeLogIn = () => ({
    type: constants.CHANGE_LOGIN,
    value: true

})

export const logIn = (account, password) => {
    return (dispatch) => {
        axios.get('/api/logIn.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changeLogIn());
            }
        })
            
    }
    
}

export const logOut = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})