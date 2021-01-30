import React, {useState, useEffect} from 'react'
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {EditorInput as Input,Form, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'
import { Typography } from '@material-ui/core';

const Boxer = ({selected, getTime}) => {
    const [loading, setLoading] = useState(false);
    const [boxer, setBoxer] = useState({
        name: '',
        ringname: '',
        wins: null,
        losses: null,
        draws: null,
        hometown:''
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
    const {name, ringname,wins,losses,draws,hometown} = boxer;
    return (
        <>
            <Title style={{margin: '1rem auto'}}>Create a Boxer Profile</Title>
            <Form onSubmit={handleSubmit}>
                <Typography variant="overline">Name</Typography>
                <Input
                    id='name'
                    value={name}
                    type="text"
                    onChange={handleChange}
                    label="name"
                    placeholder="Boxer Name"
                />

                <Typography variant="overline">Ring Name</Typography>
                <Input
                    id='ringname'
                    value={ringname}
                    type="text"
                    onChange={handleChange}
                    label="ringname"
                    placeholder="Ring Name"
                />
                <Typography>Wins</Typography>
                <Input
                    id='wins'
                    value={wins}
                    type="text"
                    onChange={handleChange}
                    label="wins"
                    placeholder="Wins"
                />
                <Typography variant="overline">Losses</Typography>
                <Input
                    id='losses'
                    value={losses}
                    type="text"
                    onChange={handleChange}
                    label="losses"
                    placeholder="Losses"
                />
                <Typography variant="overline">Draws</Typography>
                <Input
                    id='draws'
                    value={draws}
                    type="text"
                    onChange={handleChange}
                    label="draws"
                    placeholder="Draws"
                />
                <Typography variant="overline">Hometown</Typography>
                <Input
                    id='hometown'
                    value={hometown}
                    type="text"
                    onChange={handleChange}
                    label="hometown"
                    placeholder="Hometown"
                />
                <Button style={{marginBottom:'7rem'}} type='submit'>Submit</Button>
            </Form>
        </>
    )
}
export default Boxer