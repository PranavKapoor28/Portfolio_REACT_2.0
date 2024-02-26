import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 16rem;
height: 60vh;
background-color: #C34A2C;
color: #fff;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const SubTitle = styled.h3`
font-size: calc(1em + 0.2vh);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`


const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props => props.theme.text};
    }
}

`

// Framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const { id, Cname, role, year, description, tags } = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{Cname}</Title>
            <SubTitle>{role}</SubTitle>
            <SubTitle>{year}</SubTitle>
            <Description>
                {description}
            </Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>

        </Box>
    )
}

export default Card
