import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogInWrapper, LogInBox, Input,  Button} from './style';
import { actionCreators } from './store/index';

class LogIn extends React.PureComponent{
    
    render(){
        const { logInStatus } = this.props;
        console.log( logInStatus );
        if(!logInStatus){
            return (
                <LogInWrapper>
                    <LogInBox>
                        <Input placeholder='ID' ref={(input) => {this.account = input}}/>
                        <Input placeholder='PassWord' type='password' ref={(input)=>{this.passward = input}}/>    
                        <Button onClick={() => this.props.logIn(this.account,this.passward)}>login</Button>
                    </LogInBox>   
                </LogInWrapper>
            )
        }else{
            return <Redirect to='/' />
        }

    }
 
};

const mapStateToProps = (state) => ({
    logInStatus: state.getIn(['logIn','logIn'])
})

const mapDispatchToProps = (dispatch) => ({
    logIn(accountElem,passwordElem){
        dispatch(actionCreators.logIn());
        console.log(accountElem.value,passwordElem.value);
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
