import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';

// import Loader from 'react-loaders'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import myabout from '../assets/Images/myavatarAbout.png'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};

background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 20%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 60%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => lightTheme.body};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <>
            <ThemeProvider theme={DarkTheme}>
                <Box>

                    <LogoComponent theme='dark' />
                    <SocialIcons theme='dark' />
                    <PowerButton />
                    <ParticleComponent theme='dark' />

                    <Spaceman>
                        <img src={myabout} alt="spaceman" />
                    </Spaceman>
                    <Main>

                        Embarking on a journey through the realms of software engineering at Northeastern University, I've found my calling in creating websites and applications that seamlessly blend aesthetics with usability. <br>
                        </br>
                        My toolkit is stocked with full-stack development prowess, cloud technology expertise, and a flair for data analysis, all of which I've applied in various projects and internships, <br></br>transforming challenges into triumphs.
                        <br></br>If you're drawn to innovative, user-centered design, let's connect. <br></br><br></br>My social links are just to the left—drop me a line, and let's create something remarkable together.

                    </Main>

                    <BigTitle text="ABOUT" top="10%" left="5%" />


                </Box>

            </ThemeProvider>
            {/* 
            <Loader type="pacman" /> */}
        </>
    )
}

export default AboutPage
