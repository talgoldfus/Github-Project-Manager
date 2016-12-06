import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import { darkBlack} from 'material-ui/styles/colors';
import SelectableRepoList from './SelectableRepoList'


class RepoSearchResults extends Component {

  results (result){
    return (

        <ListItem
          leftAvatar={<FontIcon className="fa fa-github" />}
          primaryText={result.name}
          key={result.id}
          value={result.id}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{result.description}</span>
            </p>
          }
          secondaryTextLines={2}
        />
    )
  }

  render(){
    const searcResults = this.props.searcResults || []
    const results = searcResults.map(result=>{
      return this.results(result)
    },this)

    return (
            <div>
              <SelectableRepoList defaultValue={1}>
                <Subheader>Search Results</Subheader>
                {results}
              </SelectableRepoList>
            </div>
          )
  }
}

function mapStateToProps(state){
    return {searcResults: state.github.repoSearchResults}
}

const RepoSearchResultsContainer = connect(mapStateToProps,null)(RepoSearchResults)
export default RepoSearchResultsContainer
