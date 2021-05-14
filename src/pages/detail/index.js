import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../detail/store';
import { DetailWrapper, Header,Content} from './style';
class Detail extends React.Component{
    render(){
        return (
            
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML = {{__html: this.props.content}}/> 
            </DetailWrapper>
        )
    }
    componentDidMount(){
         this.props.getDetail();
    }
};

const MapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});
const mapDispatchToProps = (dispatch) => ({
    getDetail(){
        dispatch(actionCreators.getDetail());
    }

})

export default connect(MapStateToProps,mapDispatchToProps)(Detail);
