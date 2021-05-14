import React from 'react';
import { connect } from 'react-redux';
import { constants } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style' ;
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { fromJS } from 'immutable';

class List extends React.Component{
    render(){
        const { list, getMoreLite, page} = this.props;
        return (
                <div>{
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={ './detail' }>
                                <ListItem key={item.get('id')}>
                                    <img className='pic' alt='' src={item.get('imgurl')}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>

                        )
                    })
                    
                }
                <LoadMore onClick={() => getMoreLite(page) }>loadmore</LoadMore>
                
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.getIn(['home','articlePage'])
})
const mapDispatchToProps = (dispatch) =>({
    getMoreLite(page){
        dispatch(actionCreators.getMoreLite(page))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);

