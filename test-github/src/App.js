import React, { Component } from 'react';
import AppContent from './components/app-content';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    }
  }

  handleSearch (e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    console.log('change', keyCode)

    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${value}`)
      .then(ret => {
        const result = ret.data
        console.log('result', result)
        this.setState({
          userInfo: {
            name: result.name,
            login: result.login,
            photo: result.avatar_url,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,


          }
        })
      })
    }
  }
  

  render () {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
    />;
  }
  
}

export default App;
