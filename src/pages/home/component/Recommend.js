import React from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper,RecommendItem } from '../style';
class Recommend extends React.PureComponent{
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    }

                    )
                }
            </RecommendWrapper> 
        )
    }
}
const mapStateToProps=(state) => ({
    list: state.get('home').get('recommendlist')
})
export default connect(mapStateToProps,null)(Recommend);

