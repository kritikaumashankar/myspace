import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {getPosts} from '../reducers/posts'
import Friends from './Friends'
import {Container, Segment} from 'semantic-ui-react'
import '../Home.css'
import PostForm from './PostForm';
import Post from './Post';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  defualtState = {
    description: ''
  }
  state = {...this.defualtState, edit: false}

    componentDidMount() {
      const { dispatch } = this.props
      dispatch(getPosts())
    }
    
    render() {
      const{user}  = this.props
      console.log(user)
      if(this.props.posts !==undefined){
        const user_posts =this.props.posts.filter(p => p.user_id === user.id)
        return(
          <Fragment>
           
              <div className="home">
              <Segment>
                <Friends />
                </Segment>
                <Segment>
                <Container text align="left">
                  <PostForm post={null}/>
                {
                  user_posts.map(
                  post => {
                    return(
                     <Post post={post} />
                    )
                  }
                )
              }
              </Container>
              </Segment>
              </div>
              
        </Fragment>
        )
      }else{
        return(
          <h1>No more posts</h1>
        )
      }
    }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user
  }
}
export default connect(mapStateToProps)(Home)