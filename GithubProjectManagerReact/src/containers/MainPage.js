import React, {Component} from 'react';
import SearchGithub from './forms/SearchGithub.js'


class MainPage extends Component {

  componentWillMount(){
  }

  render(){
    return (
            <div>
              <SearchGithub/>
            </div>
          )
  }
}

export default MainPage
