import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../reducers/posts'
import { updatePost } from '../reducers/posts'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  defaultValues = {id: null, description: '',likes: 0}
  state = {...this.defaultValues}

  componentDidMount(){
      if(this.props.post !== null){
        this.setState({id: this.props.post.id,description: this.props.post.description})
      }
    }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const func = this.state.id ? updatePost : addPost
    dispatch(func(this.state))
    this.setState({description: ''})
    
  }

  handleChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
    const { description } = this.state
      return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="What's on your mind?" name="description" value={description} onChange={this.handleChange} />
          </Form>
      ) 
    }
}

export default connect()(PostForm)