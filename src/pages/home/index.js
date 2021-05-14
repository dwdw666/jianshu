import React from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends React.PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/fr-fr/production/fr-fr/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
               
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])

})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);

