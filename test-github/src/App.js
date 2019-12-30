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
      showStarred: false,
      isFeching: false
    }
  }

  urlApiGitHub = `https://api.github.com/users/`;


  handleSearch (e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    // console.log('change', keyCode)
    if (keyCode === ENTER) {
        this.setState({ isFeching: true });
      axios.get(`${this.urlApiGitHub}${value}`)
      .then(ret => {
        const result = ret.data
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
          axios.get(`${this.urlApiGitHub}${this.state.userInfo.login}/repos`)
          .then(ret => {
            this.setState({
              repos: ret.data
            })
          })

          axios.get(`${this.urlApiGitHub}${this.state.userInfo.login}/starred`)
          .then(ret => {
            this.setState({
              starred: ret.data
            })
          })
        }


      })
      .finally(() => this.setState({ isFeching: false }))

    }
  }

  showReposStarred(type){
    return (e) => {
    if (type === 'repos') {
        this.setState({
          showRepos: !this.state.showRepos,
          showStarred: false
        })
      } else {
        this.setState({
          showRepos: false,
          showStarred: !this.state.showStarred
        })
      }
    }
    
  }
  

  render () {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      handleRepos={this.showReposStarred('repos')}
      handleStarred={this.showReposStarred('starred')}
      showRepos={this.state.showRepos}
      showStarred={this.state.showStarred}
      isFeching={this.state.isFeching}
    />;
  }
  
}

export default App;
