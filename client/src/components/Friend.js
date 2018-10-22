import React from 'react'
import axios from 'axios'
// import { connect } from 'react-redux'
import { Header, Container, Image,Segment,Message, Button } from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'


class Friend extends React.Component{
  state={ friend: {},friendPosts:[] }

  componentDidMount(){
    axios.get(`/api/friends/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ friend: res.data })} )
      axios.get(`/api/friends/${this.props.match.params.id}/posts`)
      .then( res => {
        this.setState({ friendPosts: res.data })} )

  }
  render(){
    const { friend }= this.state
    const { friendPosts }= this.state
    return(
      <Container>
        <div className="friendContent">

        <Image src={friend.avatar} />
          <Header as='h1'>{friend.name}</Header>
          <Header as='h4'>{friend.location}</Header>
          <Header as='h4'>{friend.Bio}</Header>
          <Header as='h4'>Quote: {friend.quotes}</Header>
        {
          
          friendPosts.map( p=>{
            return(
              <Segment inverted color='black'>
                <strong> <Message floating>
                        {p.description}<br/>
                        <div className="alignment">
                        <span>
                          Likes:{ p.likes }
                        </span>
                      <ReactTimeAgo>{ new Date(Date.parse(p.updated_at)) }</ReactTimeAgo>
                      </div>
                      
                </Message></strong>
              </Segment>
            )
          })
        
        }
       
      <Button onClick={this.props.history.goBack}>Back</Button>
               
         
        </div>
      </Container>
    )
  }
}

export default Friend