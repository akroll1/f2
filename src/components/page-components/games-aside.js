import React, {useEffect, useState} from 'react'
import {Heading} from '../../css/core'
import {LiveAside} from '../../css/live'
import {Li,TableText,TableWrapper,Ul} from '../../css/components'
import axios from 'axios'

const GamesAside = ({handleGameClick}) => {

    const [games, setGames] = useState([]);
    const [showHeader,setShowHeader] = useState(false);
    const [showTable,setShowTable] = useState(false);
    const [showNoGames, setShowNoGames] = useState(false);

    useEffect(() => {
        const getGames = async () => {
            let url = process.env.REACT_APP_GET_GAMES_URL;
            axios(url)
            .then(data => setGames(data.data))
            .catch(err => console.log(err));
            setShowHeader(true);
            setShowTable(true);
        }
        getGames();
    },[])
    console.log('games; ',games);
    return (
        <LiveAside style={{justifyContent: 'flex-start', padding: '0'}}>
            <Heading variant='h3' style={{padding:'0.5rem',fontSize: '1.5rem', fontWeight: 'bold'}}>Choose a Podcast</Heading>
            {games && games.length === 0 && <Heading variant='p'>There are no games at this time.</Heading>}
            <TableWrapper>
                <Ul>
                {
                    games && games.length > 0 && games.map(({game},i) =>  {
                        return <Li id={game} onClick={handleGameClick} key={i}>{game}</Li>
                    })
                }
                </Ul>
            </TableWrapper>
        </LiveAside>
    )
}
export default GamesAside