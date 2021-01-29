import React, {useEffect, useState} from 'react'
import {Heading} from '../../css/core'
import {LiveAside} from '../../css/live'
import {Li,TableText,TableWrapper,Ul} from '../../css/components'
import axios from 'axios'

const GamesAside = ({handlePodcastClick}) => {

    const [podcasts, setPodcasts] = useState([]);
    const [showHeader,setShowHeader] = useState(false);
    const [showTable,setShowTable] = useState(false);
    const [showNoGames, setShowNoGames] = useState(false);

    useEffect(() => {
        const getPodcasts = async () => {
            let url = process.env.REACT_APP_GET_GAMES_URL;
            axios(url)
            .then(data => setPodcasts(data.data))
            .catch(err => console.log(err));
            setShowHeader(true);
            setShowTable(true);
        }
        getPodcasts();
    },[])
    console.log('podcasts; ',podcasts);
    return (
        <LiveAside style={{justifyContent: 'flex-start'}}>
            <Heading variant='h3' style={{padding:'0.5rem',fontSize: '1.5rem', fontWeight: 'bold'}}>Choose a Podcast</Heading>
            {podcasts && podcasts.length === 0 && <Heading variant='p'>There are no games at this time.</Heading>}
            <TableWrapper>
                <Ul>
                {
                    podcasts && podcasts.length > 0 && podcasts.map(({game,playbackUrl},i) =>  {
                        return <Li data-url={playbackUrl} id={game} onClick={(e,playbackUrl) => handlePodcastClick(e, playbackUrl)} key={i}>{game}</Li>
                    })
                }
                </Ul>
            </TableWrapper>
        </LiveAside>
    )
}
export default GamesAside