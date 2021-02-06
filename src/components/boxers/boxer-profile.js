import React from 'react'
import {BoxerProfileContainer,ProfileImg,ProfileP} from '../../css/boxers'
const BoxerProfile = ({selectedBoxer}) => {
    const {boxerProfileImg,boxerName,boxerRingname,boxerWins,boxerLosses,boxerDraws,boxerKos,boxerHometown} = selectedBoxer;
    return (
        <>
        {selectedBoxer && (
            <BoxerProfileContainer>
                <ProfileImg src={boxerProfileImg} />
                <ProfileP>{boxerName} <span>"{boxerRingname}"</span></ProfileP>
                <ProfileP>Wins: {boxerWins}</ProfileP>
                <ProfileP>Losses: {boxerLosses}</ProfileP>
                <ProfileP>Draws: {boxerDraws}</ProfileP>
                <ProfileP>KO's: {boxerKos}</ProfileP>
                <ProfileP>{boxerHometown}</ProfileP>
            </BoxerProfileContainer>)
        }
        </>

    )
}
export default BoxerProfile