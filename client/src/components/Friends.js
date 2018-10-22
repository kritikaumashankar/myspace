import React from 'react'
import { connect } from 'react-redux'
import { Header, Image, Card,Button,Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Friends extends React.Component{
  state = {friends: []}

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => this.setState({ friends: res.data }) )
  }
  downVote = (id) => {
    const { friends } = this.state
    
    this.setState({ friends: friends.filter( f => f.id !== id ) })
  }

  upVote = (id) => {
    const { friends } = this.state
    axios.put(`/api/friends/${id}`)
    .then( () => this.setState({ friends: friends.filter( f => f.id !== id ) }) )
  }


  render(){
    const { friends } = this.state
    if (friends.length) {
        return(
          
          friends.map(
            friend =>{
              return(
                <Card key={friend.id}>
                <Image src={friend.avatar} />
                <Card.Content>
                  <Card.Header>
                    <Link to= {`/friends/${friend.id}`} >{friend.name} </Link>
                  </Card.Header>
                  <Card.Description>
                    {friend.location}
                  </Card.Description>
                </Card.Content>
                { this.upVote &&
                    <Card.Content extra>
                      <Button basic onClick={() => this.downVote(friend.id)}>
                        <Icon name="thumbs down" />
                      </Button>
                      <Button basic onClick={() => this.upVote(friend.id)}>
                        <Icon name="thumbs up" />
                      </Button>
                    </Card.Content>
                }
              </Card>
              )
            
            }
          )
        )
      } else {
        return <Header textAlign="center">No More Friends</Header>
      }
  }
}

export default connect()(Friends)