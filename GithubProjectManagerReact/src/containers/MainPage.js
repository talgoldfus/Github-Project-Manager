import React, {Component} from 'react';
import {connect} from 'react-redux'
import getOwnersRepos from '../actions/getOwnersRepos'

class MainPage extends Component {

  componentWillMount(){
    this.props.getOwnersRepos()
  }

  render(){
    return (
            <div>
              <p>Main Page</p>
            </div>
          )
  }
}


const MainPageContainer = connect(null,{getOwnersRepos})(MainPage)
export default MainPageContainer
