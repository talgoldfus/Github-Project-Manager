import React, {Component,PropTypes} from 'react';
import {List,MakeSelectable} from 'material-ui/List';


function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      const {handleChangeStartWithEventIndex,handleChangeStartWithIndex,handleChangeEnd} = this.props
      handleChangeStartWithIndex ? handleChangeStartWithIndex(index) : null
      handleChangeStartWithEventIndex ? handleChangeStartWithEventIndex(event, index) : null
      this.setState({
        selectedIndex: index,
      });
      handleChangeEnd ? handleChangeEnd() : null
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange.bind(this)}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

const SelectableList = wrapState(MakeSelectable(List))

export default SelectableList
