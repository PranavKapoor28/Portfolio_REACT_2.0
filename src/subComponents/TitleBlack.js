import React from 'react'
import styled from 'styled-components'


const TextBlack = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:rgba(218, 223, 226, 0.37);
font-size: calc(5rem + 5vw);
z-index:0;

`


const BigTitlte = (props) => {
    return (
        <TextBlack top={props.top} left={props.left} right={props.right}>
            {props.text}
        </TextBlack>
    )
}

export default BigTitlte
