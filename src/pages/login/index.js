import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../detail/store';
import { DetailWrapper, Header,Content} from './style';

class LogIn extends React.Component{
    render(){
        return (
            <div></div>

        )
    }
 
};

const MapStateToProps = (state) => ({
  
});
const mapDispatchToProps = (dispatch) => ({
 
})

export default connect(MapStateToProps,mapDispatchToProps)(LogIn);
