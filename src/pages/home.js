import React, {useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'
import {Title} from '../components/title'
import {Tonight,HeroContainer,HeroDiv,HeroText,HeroImg,NewsButton} from '../css/home'
import '../css/spring.css'
import { RiArrowRightSLine } from "react-icons/ri"

const Home = () => {
    const [flipped, set] = useState(false);
    const [tonight, showTonight] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 400, friction: 80 }
    })
    useEffect(() => {

    },[]);
    return (
        <>
            <Title/>
            <HeroContainer>
                <HeroDiv style={{}}>
                    <HeroText>Latest Boxing News</HeroText>
                    <NewsButton>News<span style={{marginLeft: '1rem',marginTop: '8px'}}><RiArrowRightSLine /></span></NewsButton>
                </HeroDiv>
                <HeroDiv style={{}}>
                    <HeroImg src="/boxer_in_ring.jpg"></HeroImg>
                </HeroDiv>
            </HeroContainer>
            <HeroContainer>
                <HeroText>Upcoming Fights Go Here</HeroText>
            </HeroContainer>
        </>
    )
}
export default Home