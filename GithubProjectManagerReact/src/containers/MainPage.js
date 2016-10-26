import React, {Component} from 'react';
import SearchGithub from './forms/SearchGithub'
import RepoSearchResults from './RepoSearchResults'


class MainPage extends Component {

  componentWillMount(){
  }

  render(){
    return (
            <div>
              <SearchGithub/>
              <RepoSearchResults />
            </div>
          )
  }
}

export default MainPage
