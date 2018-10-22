import React, { Component } from 'react';
import { Menu,Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu pointing secondary>
        <Menu.Menu>
        <Header as='h2' textAlign="center"><i>MySpace</i></Header>
        </Menu.Menu>
        <Menu.Menu position='left'>
          <Link to='/'>
              <Menu.Item name='home' />
            </Link>
            <Link to="/my_friends"><Menu.Item name='my friends' /></Link>
        </Menu.Menu>
        
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
        </Menu>
      )
    }
    return (
      <Menu pointing secondary>
      <Menu.Menu position='center'>
        <Header as='h2' textAlign="center"><i>MySpace</i></Header>
        </Menu.Menu>
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
      </Menu>
    )
  }

  render() {
    return (
      <div>
        
          { this.rightNavs() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
