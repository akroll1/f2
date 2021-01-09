import React, {useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'
import {Title} from '../components/title'
import {HeroDiv} from '../css/home'
import '../css/spring.css'

const Home = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <>
            <Title/>
            {/* <HeroDiv onClick={() => set(state => !state)}>
                <a.div className="c back" style={{backgroundImage: 'url(/boxer_in_ring.jpg)',opacity: opacity.interpolate(o => 1 - o), transform }} />
                <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
            </HeroDiv> */}
            <HeroDiv />
        </>
    )
}
export default Home