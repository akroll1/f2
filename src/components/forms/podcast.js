import React, {useState, useEffect} from 'react'
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {Form, EditorInput as Input, Button, Title, Label, SaveDraftButton} from '../../css/editor'
import {Datepicker} from '../page-components/date-picker'

const Podcast = ({selected, getTime, handleTimeSelect}) => {
    const [loading, setLoading] = useState(false);
    const [podcast, setPodcast] = useState({
        podcastOwner: '',
        podcastTitle: ''
    });
    useEffect(() => {
        setLoading(false);
    },[]);
    const handleChange = (e) => {
        console.log('handleChange, e: ',e.target.id);
        setPodcast({...podcast,[e.target.id]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }
    const {podcastOwner,podcastTitle} = podcast;
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Label>Owner</Label>
                <Input
                    id='podcastOwner'
                    value={podcastOwner}
                    type="text"
                    onChange={handleChange}
                    label="Owner"
                    placeholder="Owner"
                />

                <Label>Title</Label>
                <Input
                    id='podcastTitle'
                    value={podcastTitle}
                    type="text"
                    onChange={handleChange}
                    label="Title"
                    placeholder="Title"
                />
            </Form>
            <Form onSubmit={handleSubmit}>
                <Datepicker
                    showTimeSelect
                    selected={selected}
                    onChange={getTime} 
                    handleTimeSelect={handleTimeSelect}
                />
            <Button type='submit'>Submit</Button>
            </Form>
        </>
    )
}
export default Podcast