import React from 'react';
import {VideoPublisher,VideoTitle,VideoDescription,VideoContainer,VideoImg,VideoWrapper, VideoLink} from '../css/home';
import {shortenText} from '../helpers'

const VideoThumbs = ({videos}) => { 
    return videos.map((video,i) => {
        let {contentUrl,creator,datePublished,description,publisher,name,thumbnailUrl} = video;
        return(
            <VideoContainer key={i}>
                <VideoLink href={contentUrl} target="_blank" rel="noopener noreferrer">
                    <VideoImg src={thumbnailUrl}/>
                    <VideoTitle>{name}</VideoTitle>
                    <VideoDescription>{shortenText(description,100)}</VideoDescription>
                    <VideoPublisher>{publisher[0].name}</VideoPublisher>
                </VideoLink>
            </VideoContainer>
        )
    })
};
export default VideoThumbs