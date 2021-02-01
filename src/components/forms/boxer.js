import React, {useState, useEffect} from 'react'
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {EditorInput as Input,Form, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'
import { Typography } from '@material-ui/core';

const Boxer = ({selected, getTime}) => {
    const [loading, setLoading] = useState(false);
    const [boxer, setBoxer] = useState({
        boxerName: '',
        boxerRingname: '',
        boxerWins: null,
        boxerLosses: null,
        boxerDraws: null,
        boxerHometown:'',
        boxerProfileImg: '',
        boxerVideo: ''
    });
    useEffect(() => {
        setLoading(false);
    },[]);
    const handleChange = (e) => {
        console.log('handleChange, e: ',e.target.id);
        setBoxer({[e.target.id]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }
    const {boxerName, boxerRingname,boxerWins,boxerLosses,boxerDraws,boxerHometown,boxerProfileImg,boxerVideo} = boxer;
    return (
        <>
            <Title style={{margin: '1rem auto'}}>Create a Boxer Profile</Title>
            <Form onSubmit={handleSubmit}>
                <Typography variant="overline">Name</Typography>
                <Input
                    id='boxerName'
                    value={boxerName}
                    type="text"
                    onChange={handleChange}
                    label="boxerName"
                    placeholder="Boxer Name"
                />

                <Typography variant="overline">Ring Name</Typography>
                <Input
                    id='boxerRingname'
                    value={boxerRingname}
                    type="text"
                    onChange={handleChange}
                    label="boxerRingname"
                    placeholder="Ring Name"
                />
                <Typography>Wins</Typography>
                <Input
                    id='boxerWins'
                    value={boxerWins}
                    type="text"
                    onChange={handleChange}
                    label="boxerWins"
                    placeholder="Wins"
                />
                <Typography variant="overline">Losses</Typography>
                <Input
                    id='boxerLosses'
                    value={boxerLosses}
                    type="text"
                    onChange={handleChange}
                    label="boxerLosses"
                    placeholder="Losses"
                />
                <Typography variant="overline">Draws</Typography>
                <Input
                    id='boxerDraws'
                    value={boxerDraws}
                    type="text"
                    onChange={handleChange}
                    label="boxerDraws"
                    placeholder="Draws"
                />
                <Typography variant="overline">Hometown</Typography>
                <Input
                    id='boxerHometown'
                    value={boxerHometown}
                    type="text"
                    onChange={handleChange}
                    label="boxerHometown"
                    placeholder="Hometown"
                />
                <Typography variant="overline">Image Upload</Typography>
                <Input
                    style={{width: '50%'}}
                    id='boxerProfileImg'
                    value={boxerProfileImg}
                    type="file"
                    onChange={handleChange}
                    label="boxerProfileImg"
                    placeholder="Upload Image"
                />
                <Typography variant="overline">Video Upload</Typography>
                <Input
                    style={{width: '50%'}}
                    id='boxerVideo'
                    value={boxerVideo}
                    type="file"
                    onChange={handleChange}
                    label="boxerVideo"
                    placeholder="Upload Image"
                />
                <Button style={{marginBottom:'7rem'}} type='submit'>Submit</Button>
            </Form>
        </>
    )
}
export default Boxer