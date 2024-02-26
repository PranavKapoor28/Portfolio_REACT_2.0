import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Degree, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/TitleBlack'

const Box = styled.div`
background-color: black;
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 40vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const EducationPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Degree width={100} height={100} /> Bachelors of Technology
                    </Title>
                    <Description>
                        University : Vellore Institute of Technology (Computer Science)
                    </Description>
                    <Description>
                        <strong>Year : </strong>
                        2018 - 2022
                    </Description>
                    <Description>
                        <strong>CGPA : </strong>
                        8.81 / 10.00
                    </Description>

                </Main>
                <Main>
                    <Title>
                        <Degree width={100} height={100} /> Masters of Science
                    </Title>
                    <Description>
                        University : Northeastern University (Software Engineering Systems)
                    </Description>

                    <Description>
                        <strong>Year : </strong>
                        2022 - 2024
                    </Description>
                    <Description>
                        <strong>CGPA : </strong>
                        3.75 / 4.00
                    </Description>
                </Main>

                <BigTitle text="EDUCATION" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default EducationPage
