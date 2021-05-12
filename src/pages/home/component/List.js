import React from 'react';
import { connect } from 'react-redux';
import { NavItem } from '../../../common/Header/style';
import { ListItem, ListInfo} from '../style' 
class List extends React.Component{
    render(){
        const list = this.props.list;
        return (
                <div>{
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' alt='' src={item.get('imgurl')}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>

                        )
                    })
                    
                }
                
                
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList')
})

export default connect(mapStateToProps,)(List);

