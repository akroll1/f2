import React, {useEffect} from 'react'
import {HeroText,ThumbDiv,BoxerReviewText,BoxerReviewerName,BoxerReviewContainer,BoxerReviewBody,BoxerReviewHeader,BoxerReviewCard,AvatarImg, BoxerReviewCardContainer} from '../../css/boxers'
import {Typography} from '@material-ui/core'
import {shortenText} from '../../helpers'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share'

const BoxerReviews = () => {

    const reviewText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor. Iaculis eu non diam phasellus vestibulum lorem sed risus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.';
    const reviewArr = [1,2,3,4,5];
    return (

        <BoxerReviewContainer>
            <HeroText>Fan Reviews</HeroText>
            {
                reviewArr && reviewArr.length > 0
                ? reviewArr.map((review,i) => 
                    (<BoxerReviewCardContainer key={i}>
                    <BoxerReviewCard>
                        <BoxerReviewHeader>
                            <AvatarImg src='/boxer_in_ring.jpg' />
                            <div style={{marginLeft: '1.5rem'}}>
                                <Typography variant='overline'>27 Reviews</Typography>
                                <BoxerReviewerName>Cool1</BoxerReviewerName>
                            </div>
                        </BoxerReviewHeader>
                        <BoxerReviewBody>
                            <BoxerReviewText>
                                {shortenText(reviewText,150)}
                            </BoxerReviewText>
                            <ThumbDiv>
                                <ThumbUpIcon style={{cursor: 'pointer'}} color='action'/>
                                <p style={{margin:'0.7rem',marginRight:'0.3rem'}}>Like</p>
                                <p>1.4K</p>
                                <ShareIcon style={{cursor: 'pointer',marginLeft:'1.5rem'}} color='action' />
                                <p style={{margin:'0.7rem'}}>Share</p>
                            </ThumbDiv>
                        </BoxerReviewBody>
                    </BoxerReviewCard>
                    </BoxerReviewCardContainer>))
                : ''
            }
        </BoxerReviewContainer>
    )
};

export default BoxerReviews