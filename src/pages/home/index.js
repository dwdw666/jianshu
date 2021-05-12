import React from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

export default class Home extends React.Component {
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
            </HomeWrapper>
        )
    }
}

