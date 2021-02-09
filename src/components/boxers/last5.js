import React from 'react'
import {Last5Link,Last5Img,Last5Publisher,Last5Title,Last5Description,Last5Wrapper,Last5Container} from '../../css/boxers'

const Last5 = () => {
    return [1,2,3,4,5].map((el,i) => {
        return (
                <Last5Wrapper key={i}>
                    <Last5Link href="#">
                        <Last5Img src='/boxer_in_ring.jpg'/>
                        <Last5Title>Joe Smith</Last5Title>
                    </Last5Link>
                </Last5Wrapper>
        )
    })
}
export default Last5