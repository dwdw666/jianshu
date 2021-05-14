import React from 'react';
import { TopicWrapper,TopicItem } from '../style';
import { connect } from 'react-redux';


class Topic extends React.PureComponent{
    render(){
        return (
            <TopicWrapper>
              { 
                this.props.list.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img 
                                className='Topic-pic'
                                alt=''
                                src={item.get('imgurl')}
                            />
                            {item.get('title')}
                        </TopicItem>
                    )
                })
              }
            </TopicWrapper> 
        )
    }
}

const mapStateToProps = (state) => ({
   list: state.get('home').get('topicList')
   
});

export default connect(mapStateToProps,null)(Topic);

