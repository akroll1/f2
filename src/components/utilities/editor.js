import React, {useState, useEffect, useRef} from "react";
import ReactQuill from "react-quill";
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
// import aws_exports from "../../aws-exports";
// import { createArticle } from "../../graphql/mutations";
// import { Icon, Menu, Table } from "semantic-ui-react";
import {TableText, Row,Form, EditorInput as Input, Button, Title, Text, Label, SaveDraftButton} from '../../css/editor'

// Amplify.configure(aws_exports);
const Editor = () => {
    const editorRef = useRef;
    // editorRef.current.textContent = 'editor';
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({
        articleTitle: '',
        articleSubtitle: '',
        articleAuthor: '',
        articleBody: ''
    })

    useEffect(() => {
        setLoading(false);
    },[]);
    const articleTitle = 'article title';
    const articleSubtitle = 'article subtitle';
    const articleAuthor = 'article author';
    const articleBody = 'article body';
    const editorChange = html => {
        setArticle({...article, articleBody: html});
    };
    const handleChange = (e) => {
        console.log('handleChange, e: ',e);
    }
    return (
        <div id="quill">
          <Form>
            <Label>Title</Label>
            <Input
              value={articleTitle}
              type="text"
              onChange={e => handleChange(e)}
              label="Title"
              placeholder="Enter Article title"
            />

            <Label>Sub-Title</Label>
            <Input
              value={articleSubtitle}
              type="text"
              onChange={e => handleChange(e)}
              label="Sub-title"
              placeholder="Enter Article Sub-title"
            />

            <Label>Author</Label>
            <Input
              value={articleAuthor}
              type="text"
              onChange={e => handleChange(e)}
              label="Author"
              placeholder="Author Name"
            //   ref={input => (this.author = input)}
            />

            <Label>Content</Label>
            <div className="_quill">
              <ReactQuill
                value={articleBody}
                style={{width: '100%'}}
                // ref={editorRef}
                onChange={html => editorChange(html)}
                rows={3}
              />
            </div>
            <br />
            <Button
              type="button"
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
export default Editor;

// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       userSub: this.props.userInfo.userSub,
//       articleTitle: '',
//       articleSubtitle: '',
//       articleAuthor: '',
//       articleTags: '',
//       articleBody: '',
//       selectedArticle:{
//         articleAuthor:'',
//         articleTitle:'',
//         articleSubtitle:'',
//         articleBody:'',
//       },
//     };
//   }
  
//   componentDidMount(){
//     let { userInfo, articles } = this.props;
//     this.setState({ ...userInfo, articles  });
//   }

//   onChange(html) {
//     this.setState({ articleBody: html });
//   }
//   handleTitleChange(e) {
//     this.setState({ articleTitle: e.target.value });
//   }
//   handleSubtitleChange(e) {
//     this.setState({ articleSubtitle: e.target.value });
//   }
//   handleAuthorChange(e) {
//     this.setState({ articleAuthor: e.target.value });
//   }
//   handleTagsChange(e) {
//     this.setState({ articleTags: e.target.value });
//   }
//   async handleArticleSubmit() {
//     let articleObj = {
//       userSub: this.state.userSub,
//       articleTitle: this.state.articleTitle,
//       articleSubtitle: this.state.articleSubtitle,
//       articleAuthor: this.state.articleAuthor,
//       articleBody: this.state.articleBody,
//       // tags: this.state.tags,
//       // tags: ['Brandon Rios','Danny Garcia','welterweights'],
//     };
//     console.log('articleObj: ',articleObj);
//     let newArticle = await API.graphql(graphqlOperation(createArticle, { input: articleObj }));
//     try {
//       console.log('posted a new article');
//     }
//     catch (err){
//       console.error(err);
//     }
//     finally {
//       window.location.reload();
//     }
//   }
//   renderArticle(i){
//     let { articles } = this.state;
//     let article = articles[i];
//     this.setState({selectedArticle: {...article}, row:i});
//   }

//   render() {
//     let { username } = this.state;
//     const articles = this.state.articles && this.state.articles.length > 0 ? this.state.articles.map((article,i) => {
//         let { id, articleTitle, articleBody, articleAuthor, articleSubtitle, published, createdAt, updatedAt } = article;
//         let status = published ? 'Yes' : 'No';
//         let created = Date(createdAt).slice(0,16);
//         let lastUpdated = Date(updatedAt).slice(0,16);

//       return(
//         <Table.Row className={this.state.row === i ? "active" : null} key={i} onClick={() => this.renderArticle(i)}>
//           <Table.Cell>{articleTitle}</Table.Cell>
//           <Table.Cell>{articleSubtitle}</Table.Cell>
//           <Table.Cell>{articleAuthor}</Table.Cell>
//           <Table.Cell>{status}</Table.Cell>
//           <Table.Cell>{created}</Table.Cell>
//           <Table.Cell>{lastUpdated}</Table.Cell>
//         </Table.Row>
//       )
//     }) : [];
//     let { articleAuthor,articleTitle,articleSubtitle,articleBody } = this.state.selectedArticle;
//     return (
//       <div id="editor-wrapper">
//         {articles.length > 0 ? <h1>Here are your articles, {username}</h1>
//         : <h1>Submit an Article for Publication</h1>}
//         <div> 
//         <Table celled id="editor-table" selectable>
//               <Table.Header>
//                 <Table.Row>
//                   <Table.HeaderCell>Title</Table.HeaderCell>
//                   <Table.HeaderCell>Sub-Title</Table.HeaderCell>
//                   <Table.HeaderCell>Author</Table.HeaderCell>
//                   <Table.HeaderCell>Status</Table.HeaderCell>
//                   <Table.HeaderCell>Created</Table.HeaderCell>
//                   <Table.HeaderCell>Last Updated</Table.HeaderCell>
//                 </Table.Row>
//               </Table.Header>

//               <Table.Body>{articles}</Table.Body>

//               <Table.Footer>
//                 <Table.Row>
//                   <Table.HeaderCell colSpan={6}>
//                     <Menu floated="right" pagination>
//                       <Menu.Item as="a" icon>
//                         <Icon name="chevron left" />
//                       </Menu.Item>
//                       <Menu.Item as="a">1</Menu.Item>
//                       <Menu.Item as="a">2</Menu.Item>
//                       <Menu.Item as="a">3</Menu.Item>
//                       {/* <Menu.Item as="a">4</Menu.Item> */}
//                       {/* <Menu.Item as="a">5</Menu.Item> */}
//                       <Menu.Item as="a" icon>
//                         <Icon name="chevron right" />
//                       </Menu.Item>
//                     </Menu>
//                   </Table.HeaderCell>
//                 </Table.Row>
//               </Table.Footer>
//             </Table>
//         </div>
//         <div id="quill" style={{width:'100%',margin:'auto'}}>
//           <Form>
//             <Label>Title</Label>
//             <Input
//               value={articleTitle}
//               type="text"
//               onChange={e => this.handleTitleChange(e)}
//               label="Title"
//               placeholder="Enter Article title"
//               className="form-control"
//             />

//             <Label>Sub-Title</Label>
//             <Input
//               value={articleSubtitle}
//               type="text"
//               onChange={e => this.handleSubtitleChange(e)}
//               label="Sub-title"
//               placeholder="Enter Article Sub-title"
//               className="form-control"
//             />

//             <Label>Author</Label>
//             <Input
//               value={articleAuthor}
//               type="text"
//               onChange={e => this.handleAuthorChange(e)}
//               label="Author"
//               placeholder="Author Name"
//               className="form-control"
//               ref={input => (this.author = input)}
//             />

//             <Label>Content</Label>
//             <div className="_quill">
//               <ReactQuill
//                 value={articleBody}
//                 style={{width: '100%'}}
//                 ref="editor"
//                 onChange={html => this.onChange(html)}
//                 rows={3}
//               />
//             </div>
//             <br />
//             <Button
//               type="button"
//               onClick={() => this.handleArticleSubmit()}
//             >
//               Publish
//             </Button>
//             <SaveDraftButton
//                 type="button"
//                 onClick={() => this.handleArticleSubmit()}
//             >
//               Save Draft
//             </SaveDraftButton>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }
