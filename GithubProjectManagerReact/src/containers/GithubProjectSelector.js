import React from 'react';
import {connect} from 'react-redux'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import ConnectGithubButton from '../containers/ConnectGithubButtonContainer';
import SearchGithub from './forms/SearchGithub'
import RepoSearchResults from './RepoSearchResults'
import completedStep from '../actions/completedStep'


class GithubProjectSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        loading: false,
        finished: false,
        stepIndex: 0,
      };
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   debugger
  //   if (!this.state.stepStarted &&  this.state.stepIndex < nextState.stepIndex ){
  //     debugger
  //     this.setState({stepStarted:true})
  //
  //   }
  //   return true
  // }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      })
    this.props.completedStep(false)
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      })
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <p>
              Connect to github .
            </p>
            <ConnectGithubButton />
          </div>
        );
      case 1:

        return (
          <div>
            <p>Search for your Github repositories</p>
            <SearchGithub/>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Select to start managing</p>
            <RepoSearchResults />
          </div>
        );
      default:
        return null;
    }
  }

  renderContent() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            disabled={!this.props.stepCompleted}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Connect to Github</StepLabel>
          </Step>
          <Step>
            <StepLabel>Search your repos</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select project to manage</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {stepCompleted: state.github.stepCompleted}
}

const GithubProjectSelectorConnector = connect(mapStateToProps,{completedStep})(GithubProjectSelector)
export default GithubProjectSelectorConnector
