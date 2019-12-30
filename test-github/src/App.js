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
      showRepos: false,
      showStarred: false
    }
  }

  handleSearch (e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    // console.log('change', keyCode)

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
        if(this.state.userInfo) {
          axios.get(`https://api.github.com/users/${this.state.userInfo.login}/repos`)
          .then(ret => {
            this.setState({
              repos: ret.data
            })
          })

          axios.get(`https://api.github.com/users/${this.state.userInfo.login}/starred`)
          .then(ret => {
            this.setState({
              starred: ret.data
            })
          })
        }

      })
    }
  }

  handleShowRepos(){
    this.setState({
      showRepos: !this.state.showRepos,
      showStarred: false
    })
  }

  handleShowStarred(){
    this.setState({
      showRepos: false,
      showStarred: !this.state.showStarred
    })
  }
  

  render () {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      handleShowRepos={() => this.handleShowRepos()}
      handleShowStarred={() => this.handleShowStarred()}
      showRepos={this.state.showRepos}
      showStarred={this.state.showStarred}
    />;
  }
  
}

export default App;
