import React from 'react';
import {connect} from 'react-redux'
import SelectableList from './SelectableList';
import selectedRepo from '../actions/selectedRepo'
import completedStep from '../actions/completedStep'

const SelectableRepoList =(props)=>{

    let startFunction = props.selectedRepo
    let endFunction = props.completedStep.bind(null,true)
    return (
            <SelectableList
              handleChangeStartWithIndex={startFunction}
              handleChangeEnd={endFunction}
              defaultValue={props.defaultValue}
            >
              {props.children}
            </SelectableList>
    )
  }


const SelectableRepoListContainer = connect(null,{selectedRepo,completedStep})(SelectableRepoList)

export default SelectableRepoListContainer
