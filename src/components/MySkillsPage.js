import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:170vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`


const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 35vw;
height: 60vh;
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
font-size: calc(0.4em + 1vw);
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

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />

                <Grid>
                    <Main>
                        <Title>
                            <Develope width={60} height={60} /> Android/Native-Platform App Developer
                        </Title>
                        <Description>
                            I love to create apps with minimalistic and beautiful user interface which have a real life impact.
                        </Description>
                        <Description>
                            <strong>Tools I use to develop:</strong>
                            <ul>
                                <li>
                                    Flutter
                                </li>
                                <li>
                                    Java
                                </li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>Database technologies I have expereince in:</strong>
                            <ul>
                                <li>
                                    Firebase
                                </li>
                                <li>
                                    SqlLite
                                </li>
                            </ul>
                        </Description>

                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Full Stack Developer
                        </Title>
                        <Description>
                            Creating websites and learning new technologies always interests me.  <br></br><br></br>I develop both in server-side as well as client-side interface.
                        </Description>
                        <Description>
                            <strong>Languages I use to develop:</strong>
                            <ul>
                                <li>
                                    MERN Stack(ReactJS, ExpressJs, NodeJS, MongoDB)
                                </li>
                                <li>
                                    HTML, CSS, SCSS, JS, SQL, PHP
                                </li>
                            </ul>
                        </Description>
                    </Main>

                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Devops Engineer
                        </Title>
                        <Description>
                            As a seasoned DevOps engineer, I excel in streamlining deployment pipelines and infrastructure, significantly reducing costs and improving efficiency. My expertise in Kubernetes, Docker, and Linux has enabled me to craft scalable solutions that enhance operational agility. Complementing this, my integration of Elasticsearch and Kibana has empowered data-driven decision-making, ensuring robust, timely product enhancements through advanced CI/CD methodologies.
                        </Description>
                        <Description>
                            <strong>Tools and Languages I use to develop:</strong>
                            <ul>
                                <li>
                                    Kubernetes, Terraform, Jenkins, Spinnaker, Docker, GIT
                                </li>
                            </ul>
                        </Description>
                    </Main>
                </Grid>
                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
