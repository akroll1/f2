import React, {useState, useEffect} from 'react'
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {TableText, Row,Form, EditorInput as Input, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'
import {Datepicker} from '../page-components/date-picker'

const Podcast = ({selected, getTime}) => {
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
    const {podcastOwner,podcastTitle} = podcast;
    return (
        <>
            <Form>
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
            <Form>
                <Datepicker
                    showTimeSelect
                    selected={selected}
                    onChange={getTime} 
                />
            </Form>
        </>
    )
}
export default Podcast