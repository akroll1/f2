import React, {useState, useEffect, useRef} from "react";
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import {TableText, Row,Form, EditorInput as Input, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'
import {Typography} from '@material-ui/core'
// import aws_exports from "../../aws-exports";
// import { createArticle } from "../../graphql/mutations";


// Amplify.configure(aws_exports);
const Review = () => {
    // editorRef.current.textContent = 'editor';
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({
        reviewTitle: '',
        reviewSubtitle: '',
        reviewAuthor: '',
        reviewBody: ''
    })

    useEffect(() => {
        setLoading(false);
    },[]);
    const editorChange = html => {
        setReview({...review, reviewBody: html});
    };
    const handleChange = (e) => {
        // console.log('handleChange, e: ',e.target.id);
        setReview({...review,[e.target.id]: e.target.value})
    }
    let {reviewTitle,reviewSubtitle,reviewAuthor,reviewBody} = review;
    return (
        <div id="quill" style={{marginBottom: '5rem'}}>
          <Form>
            <Typography variant="overline">Title</Typography>
            <Input
              id='reviewTitle'
              value={reviewTitle}
              type="text"
              onChange={handleChange}
              label="Title"
              placeholder="Title"
            />

            <Typography variant="overline">Author</Typography>
            <Input
              id='reviewAuthor'
              value={reviewAuthor}
              type="text"
              onChange={handleChange}
              label="Author"
              placeholder="Author"
            />
       
            <Label>Review</Label>
              <ReactQuill
                id='quill'
                theme='snow'
                value={reviewBody}
                style={{width: '100%', height: '15rem',marginBottom:'3rem'}}
                // ref={editorRef}
                onChange={editorChange}
                placeholder='Review...'
              />
            <br />
            <Button
              type="button"
              style={{marginBottom:'0.5rem'}}
            //   onClick={() => handleArticleSubmit()}
            >
              Publish
            </Button>
            <SaveDraftButton
                type="button"
                // onClick={() => this.handleArticleSubmit()}
            >
              Save Draft
            </SaveDraftButton>
          </Form>
        </div>
    )

}
export default Review;

