import React from 'react';
import { connect } from 'react-redux';
import { LogInWrapper, LogInBox, Input,  Button} from './style';

class LogIn extends React.PureComponent{
    render(){
        return (
            <LogInWrapper>
                <LogInBox>
                    <Input placeholder='ID' ref={(input) => {this.account = input}}/>
                    <Input placeholder='PassWord' type='password' ref={(input)=>{this.passward = input}}/>    
                    <Button onClick={() => this.props.logIn(this.account,this.passward)}>login</Button>
                </LogInBox>   
            </LogInWrapper>
        )
    }
 
};

const mapDispatchToProps = (dispatch) => ({
    logIn(accountElem,passwordElem){
        console.log(accountElem,passwordElem);
    }
});

export default connect(null,mapDispatchToProps)(LogIn);
