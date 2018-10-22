import React from 'react'
import { connect } from 'react-redux'
import {Message,Segment,Button,Label,Icon} from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'
import PostForm from './PostForm' 
import { deletePost,updatePost } from '../reducers/posts'



class Post extends React.Component{
  state = { edit: false }
  toggleEdit=()=> {
    this.setState({edit: !this.state.edit})
  }

   show = (post) => {
    const {dispatch} = this.props
      return(
     
        <Message floating>
            {post.description}<br/>
            <div className="alignment">
            <span>
            <Button as='div' labelPosition='right'>
              <Button color='red' onClick={() =>{
                post.likes = post.likes+1
                dispatch(updatePost(post))}}>
                <Icon name='heart' />
                Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>
              { post.likes }
              </Label>
            </Button>
            </span>
            {
              post.updated_at === new Date() ? 
              "Just Now" :
            <ReactTimeAgo>{ new Date(Date.parse(post.created_at))}</ReactTimeAgo>
            }
          </div>
          
        </Message>
       )
     
   
   }
  
   form= (post) => {

    return(<PostForm post={post} />)  
  }
  render(){
    const {post} = this.props
    const {edit} = this.state
    const {dispatch} = this.props
    return(
    <Segment inverted color='olive'>
      <div className="displayPost">
      { edit ? this.form(post) : this.show(post) }
        <Button onClick={this.toggleEdit}> { edit ? 'Done' : 'Edit' }</Button>
        
        <Button onClick={() =>{dispatch(deletePost(post.id))}}>X</Button>
        </div>
      </Segment>
    )
  }
}

export default connect()(Post)