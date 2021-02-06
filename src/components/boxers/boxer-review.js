import React from 'react'
import {ThumbDiv,BoxerReviewText,BoxerReviewerName,BoxerReviewContainer,BoxerReviewBody,BoxerReviewHeader,BoxerReviewCard,AvatarImg} from '../../css/boxers'
import {Typography} from '@material-ui/core'
import {shortenTitle} from '../../helpers'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share'
const BoxerReviews = () => {

    const reviewText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor. Iaculis eu non diam phasellus vestibulum lorem sed risus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.';

    return (
        <BoxerReviewContainer>
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
                        {shortenTitle(reviewText)}
                    </BoxerReviewText>
                    <ThumbDiv>
                        <ThumbUpIcon style={{marginLeft:'1rem'}} color='action'/>
                        <p style={{margin:'0.7rem'}}>Like</p>
                        <ShareIcon style={{marginLeft:'1.5rem'}} color='action' />
                        <p style={{margin:'0.7rem'}}>Share</p>
                    </ThumbDiv>
                </BoxerReviewBody>
            </BoxerReviewCard>
        </BoxerReviewContainer>
    )
};

export default BoxerReviews