import React from 'react'
import { Card,Image,Button,Icon,Grid,Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Home.css'
import axios from 'axios'

class MyFriends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data }) )
  }
  downVote = (id) => {
    const { friends } = this.state
    axios.put(`/api/friends/${id}`)
    .then( () => 
    this.setState({ friends: friends.filter( f => f.id !== id ) }) )
  }

  upVote = (id) => {
    const { friends } = this.state
    axios.put(`/api/friends/${id}`)
    .then( () => this.setState({ friends: friends.filter( f => f.id !== id ) }) )
  }

  render() {
    const { friends } = this.state
    if (friends.length) {
          return (
            <div className="friendsContainer">
            <Grid>
              <Grid.Row columns={3}>
              {
                friends.map( friend =>{
                      return(
                        
                          <Grid.Column>
                            <div className="friendCard">
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
                          </div>
                          </Grid.Column>
                        
                      )
                            
                  })
                }
                </Grid.Row>
            </Grid>
            </div>
          )
      }else{
        return <Header textAlign="center">No Liked Friends</Header>
      }
    }
 }

export default MyFriends



