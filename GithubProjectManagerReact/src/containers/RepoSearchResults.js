import React, {Component} from 'react';
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

class RepoSearchResults extends Component {

  results (result){
    return (
      <div>
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="" />}
          primaryText={result.name}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{result.language}</span> --
              {result.description}
            </p>
          }
          secondaryTextLines={2}
        />
      </div>
    )
  }

  render(){
    const searcResults = this.props.searcResults || []
    const results = searcResults.map(result=>{
      return this.results(result)
    },this)

    return (
            <div>
              <List>
                <Subheader>Search Results</Subheader>
                {results}
              </List>
            </div>
          )
  }
}

function mapStateToProps(state){
    return {searcResults: state.github.repoSearchResults}
}

const RepoSearchResultsContainer = connect(mapStateToProps,null)(RepoSearchResults)
export default RepoSearchResultsContainer
