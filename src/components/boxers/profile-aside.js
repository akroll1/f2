import React from 'react'
import { BoxerReviewContainer, AvgRankingEl, RatingContainer,ProfileAsideContainer,AvgRankDiv,SubmitStarsButton} from '../../css/boxers'
import {HeroText} from '../../css/home'
import {Typography} from '@material-ui/core'
import BoxerProfile from './boxer-profile'
import Stars from '../stars'
import BoxerReviews from './boxer-review'
const ProfileAside = ({starRating,handleStarsSubmit,handleStarDivClick,starArr, selectedBoxer}) => {
    
   return (
    <ProfileAsideContainer>
        <BoxerProfile selectedBoxer={selectedBoxer}/>
        <RatingContainer>
            <HeroText>Fan Rankings</HeroText>
            <div style={{width: '100%',display: 'flex',flexDirection:'row'}}>
                <div style={{width: '60%'}}>
                    <Stars
                        starArr={starArr} 
                        starRating={starRating}
                        handleStarDivClick={handleStarDivClick}
                        />
                    <SubmitStarsButton onClick={handleStarsSubmit}>Submit</SubmitStarsButton>
                </div>
                <AvgRankDiv>
                    <Typography style={{margin:'0'}} variant="h2" gutterBottom>4.3</Typography>
                    <Typography style={{textAlign:'center'}} variant="subtitle2" gutterBottom>578 Total Reviews</Typography>
                    <AvgRankingEl></AvgRankingEl>
                </AvgRankDiv>
            </div>
        </RatingContainer>
        <BoxerReviews />
    </ProfileAsideContainer>
   )
}
export default ProfileAside;