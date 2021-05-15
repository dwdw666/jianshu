import styled from 'styled-components';

export const LogInWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;

` ;

export const LogInBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    padding-top: 20px; 
    background: #fff;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);

`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    margin: 10 auto;
    line-height: 30px;
    padding: 0 10px;
    color: #777;

`;
export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3149d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;


`