import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

//트랜지션 설정
const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;
const slideUp = keyframes`
    from {transform: translateY(200px);}
    to {transform: translateY(0px);}
`;
//어두운 배경 div
const DarkBackground = styled.div `
    position: fixed;
    left : 0;
    top : 0;
    width: 100%;
    height : 100vh;
    display: flex;
    align-items: center;
    justify-content : center;
    background: rgba(0,0,0,0.7);

    animation: ${fadeIn} 0.25s;
    animation-fill-mode: forwards;
`;
//컨텐츠 블럭
const DialogBlock = styled.div `
    width: 320px;
    padding : 20px;
    border-radius : 6px;
    background: #fff;
    h3 {
        margin: 0;
        font-size: 24;
    }
    p {
        font-size : 18px;
    }
    
    animation: ${slideUp} 0.25s;
    animation-fill-mode: forwards;
`;

//버튼그룹
const ButtonGroup = styled.div`
    margin-top : 20px;
    display : flex;
    justify-content : flex-end;
`;

const Dialog = ({title, children, confirmText, cancleText, visible, onCancle, onConfirm}) => {
    if(!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button onClick={onCancle}>{cancleText}</Button>
                    <Button onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>     
    );
};

export default Dialog;