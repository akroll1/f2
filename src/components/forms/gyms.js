import React, {useState, useEffect} from 'react'
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {EditorInput as Input,Form, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'
import {Typography} from '@material-ui/core'
const Gyms = ({selected, getTime}) => {
    const [loading, setLoading] = useState(false);
    const [gym, setGym] = useState({
        gymOwner: '',
        gymName: '',
        gymAddress: ''
    });
    useEffect(() => {
        setLoading(false);
    },[]);
    const handleChange = (e) => {
        console.log('handleChange, e: ',e.target.id);
        setGym({[e.target.id]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }
    const {gymOwner,gymName,gymAddress} = gym;
    return (
        <>
            <Title style={{margin: '1rem auto'}}>Create a Gym Profile</Title>
            <Form onSubmit={handleSubmit}>
                <Typography variant="overline">Owner</Typography>
                <Input
                    id='gymOwner'
                    value={gymOwner}
                    type="text"
                    onChange={handleChange}
                    label="gymOwner"
                    placeholder="Gym Owner"
                />

                <Typography variant="overline">Name</Typography>
                <Input
                    id='gymName'
                    value={gymName}
                    type="text"
                    onChange={handleChange}
                    label="GymName"
                    placeholder="Gym Name"
                />
                <Typography variant="overline">Address</Typography>
                <Input
                    id='gymAddress'
                    value={gymAddress}
                    type="text"
                    onChange={handleChange}
                    label="gymAddress"
                    placeholder="Gym Address"
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    )
}
export default Gyms