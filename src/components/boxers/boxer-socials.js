import React from 'react'
import {HeroText, SocialsContainer} from '../../css/boxers'
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';

const BoxerSocials = ({boxerTwitter}) => {

    return (
        <SocialsContainer>
            <HeroText>Latest Tweets</HeroText>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName={boxerTwitter}
                options={{height: 600}}
            />
        </SocialsContainer>
    )
}
export default BoxerSocials