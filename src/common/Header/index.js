import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, 
        Logo, 
        Nav, 
        NavItem, 
        NavSearch,
        Addition,
        Button,
        SearchWrapper,
        SearchInfo,
        SearchInfoTitle,
        SearchInfoSwich,
        SearchInfoIteam}
from './style';
import { connect } from 'react-redux'; 
import * as actionCreators from './store/actionCreatoer';
import { Link } from 'react-router-dom';
import { actionCreators as logInactionCreators } from '../../pages/login/store';


class Header extends React.PureComponent{

        getListArea(){
            const {list, page,focused,mouseIn, handleChangePage, handelMousEnter, handelMousLeave, totalPage, logOut} = this.props;
            const pagelist = [];
            const newlist = list.toJS();
            
            if(newlist.length){
                for (let i = page-1; i<page; i++){
                    pagelist.push(
                        <SearchInfoIteam key={newlist[i]}>{newlist[i]}</SearchInfoIteam>
                    )
                }
            }
            
            if(focused || mouseIn){
                return(
                    <SearchInfo 
                    onMouseEnter={handelMousEnter}
                    onMouseLeave={handelMousLeave}
                    >
                        <SearchInfoTitle>
                            HOT SEARCH
                            <SearchInfoSwich onClick={()=>handleChangePage(page, totalPage)}>switch</SearchInfoSwich>
                        </SearchInfoTitle>
                        <div>                  
                            {pagelist}
                        </div>
                    </SearchInfo>
                )
            }
        
        }
        render(){
            const {list, focused, hanldeInputFoucs, hanldeInputBlur, logIn, logOut} = this.props;
            return(
                <div>
                    <HeaderWrapper>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <Nav >
                            <NavItem className='left active' >Home</NavItem>
                            <NavItem className='left'>LoadApp</NavItem>
                            {
                                logIn ? 
                                    <NavItem className='right' onClick={logOut} >exit</NavItem> : 
                                    <Link to='./logIn'><NavItem className='right'>login</NavItem></Link>
                            }
                            <NavItem className='right'>Aa</NavItem>
                            <SearchWrapper>
                                <CSSTransition timeout={200} in={focused} classNames='slide'>
                                    <NavSearch 
                                        className={focused ? 'focused' : ''}
                                        onFocus={()=>hanldeInputFoucs(list)}
                                        onBlur={hanldeInputBlur}
                                    >
                                    </NavSearch>
                                </CSSTransition>
                                {this.getListArea()}
                            </SearchWrapper>
                            
                        </Nav>
                    </HeaderWrapper> 
                    <Addition>
                            <Button className='write'>Write</Button>
                            <Button className='reg'>Register</Button>
                    </Addition>
                </div>
            );
        }
    
    

} 


const mapStateToProps = (state)=>{
    return{
       focused: state.get('header').get('focused'),//this state -> paremettre de reducer initialize
       list: state.get('header').get('list'),
       page: state.get('header').get('page'),
       mouseIn: state.get('header').get('mouseIn'),
       totalPage: state.get('header').get('totalPage'),
       logIn: state.getIn(['logIn','logIn'])
    }
}
// use data in store
const mapDispatchToProps = (dispatch)=>{
    return{ 
        hanldeInputFoucs(list){
           (list.size === 0) && dispatch(actionCreators.getList()); //when size=0 ajix require
            dispatch(actionCreators.searchFocus());
        },
        handelMousEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        hanldeInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handelMousLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if( page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1)); //return to page 1
            }
            
        },
        logOut(){
            dispatch(logInactionCreators.logOut());
        }
    }   
   
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);