import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
  position: relative;
  margin-left: 39.9px;
  margin-right: 39.9px;
  width: 1440px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  

`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    dispaly: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size : contain;

`;

export const Nav = styled.div`
    position: absolute;
    left: 240px;
    width: 960px;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;

`;

export const NavItem = styled.div`
    line-height: 56px;
    padding : 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
        color: #ea6f5a;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    
`;
export const NavSearch = styled.input.attrs({ 
    placeholder: 'search' })`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;

    
    &::placeholder{
        color: #999;
    }

    &.focused{
        width: 240px;
    }
    &.slide-enter{
        width:160 px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit{
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    height: 200px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);

`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 20px;
    front-size: 14px;
    color: #969696;
`;
export const SearchInfoSwich = styled.span`
    cursor:pointer;
    float: right;
    font-size: 13px;
`;
export const SearchInfoIteam = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 13px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;

`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writ{
        color: #fff;
        background: #ec6149;
    }

`





