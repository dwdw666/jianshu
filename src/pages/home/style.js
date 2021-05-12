import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    height: 1000px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    width: 625px;
    margin: 0 auto;
    .banner-img {
        width: 625px;
        height: 270px;
    }

`;
export const HomeRight = styled.div`
    float: left;
    margin-left: 15px;
    width: 245px;
    margin: 0 auto;
    backgroud: green;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;


`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .Topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }

`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }

`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    word-break: break-all;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight:  bold;
    }
    .desc{
        line-height: 18px;
        line-height: 13px;
        color: #999;
    }

`;