import React, {useState} from 'react'
import { CreateReviewButton,AvgRankingSpan,BoxerReviewContainer, AvgRankingEl, RatingContainer,ProfileAsideContainer,AvgRankDiv,SubmitStarsButton} from '../../css/boxers'
import {HeroText} from '../../css/home'
import {Typography} from '@material-ui/core'
import BoxerProfile from './boxer-profile'
import Stars from './stars'
import BoxerReviews from './boxer-review'
import CreateIcon from '@material-ui/icons/Create';

const ProfileAside = ({starRating,handleStarsSubmit,handleStarDivClick,starArr, selectedBoxer}) => {
    const [modal,setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const handleOpenReviewModal = (e) => {
    //     e.preventDefault();
    //     console.log('modal clicked.')
    //     // setModal(x => !x);
    // }
    console.log('modal: ',modal)
   return (
    <ProfileAsideContainer>
        <BoxerProfile selectedBoxer={selectedBoxer}/>
        <RatingContainer>
            <HeroText>Fan Rankings</HeroText>
            <div style={{width: '100%',display: 'flex',flexDirection:'row'}}>
                <div>
                    <Stars
                        starArr={starArr} 
                        starRating={starRating}
                        handleStarDivClick={handleStarDivClick}
                    />
                    <div style={{width: '100%',display: 'flex',justifyContent:'center',alignItems: 'center'}}>
                        <CreateReviewButton onClick={handleStarsSubmit}>Submit</CreateReviewButton>
                    </div>

                </div>
                <AvgRankDiv>
                    <Typography style={{margin:'0'}} variant="h2" gutterBottom>4.3</Typography>
                    <Typography style={{textAlign:'center'}} variant="subtitle2" gutterBottom>578 Total Reviews</Typography>
                    <AvgRankingEl>
                        <AvgRankingSpan width={78}/>
                    </AvgRankingEl>
                </AvgRankDiv>
            </div>
        </RatingContainer>
        <HeroText>Fan Reviews</HeroText>
        <div style={{width: '100%',display: 'flex',justifyContent:'center',alignItems: 'center'}}>
            <CreateReviewButton onClick={() => setModal(!modal)}><CreateIcon />&nbsp;Write a Review</CreateReviewButton>
        </div>
        <BoxerReviews />
    </ProfileAsideContainer>
   )
}
export default ProfileAside;