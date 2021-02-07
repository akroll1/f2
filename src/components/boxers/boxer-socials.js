import React, {useEffect, useState} from 'react'
import {SocialsA,Socials,SocialsUl,SocialsListDiv,SocialButtonsDiv,HeroText, SocialsContainer} from '../../css/boxers'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton } from 'react-twitter-embed';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

const BoxerSocials = ({socialsArr}) => {
    const [count,setCount] = useState(0);
    // useEffect(() => {
    //     setTwitter(boxerTwitter);
    //     setCount(count => count +1);
    // },[twitter])
    return (
        <>
            <SocialsContainer>
                <SocialsListDiv>
                    <HeroText style={{padding: '1rem'}}>Socials</HeroText>
                    <SocialsUl>
                        {socialsArr && socialsArr.length > 0
                            ? socialsArr.map((social,i) => <SocialsA href={`${social.handle}`} target='_blank' rel="noopener noreferrer"><Socials key={i}><LinkOutlinedIcon htmlColor={'gray'} fontSize={'large'}/>&nbsp;&nbsp;{social.social}</Socials></SocialsA>)
                            : []
                        }
                    </SocialsUl>
                </SocialsListDiv>
                <HeroText style={{padding: '1rem'}}>Latest Tweets</HeroText>
                <SocialButtonsDiv>
                    <div style={{marginBottom: '0rem 1rem'}}>
                        <TwitterShareButton 
                            url={'https://fightcloud.live'}
                            options={{text: socialsArr[0].Twitter + ' is the man!', via:'fightcloudlive'}}
                        />
                    </div>
                    <div style={{marginBottom: '0rem 1rem'}}>
                        <TwitterFollowButton 
                            screenName={socialsArr[0].Twitter}
                        />
                    </div>
                </SocialButtonsDiv>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={socialsArr[0].Twitter}
                    options={{height: 600}}
                />
            </SocialsContainer>
        </>
    )
}
export default BoxerSocials