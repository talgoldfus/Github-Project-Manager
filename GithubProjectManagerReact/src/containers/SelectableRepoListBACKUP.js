// import React, {Component,PropTypes} from 'react';
// import {connect} from 'react-redux'
// import {List,MakeSelectable} from 'material-ui/List';
// import selectedRepo from '../actions/selectedRepo'
// import completedStep from '../actions/completedStep'
//
// function wrapState(ComposedComponent) {
//   return class SelectableList extends Component {
//     static propTypes = {
//       children: PropTypes.node.isRequired,
//       defaultValue: PropTypes.number.isRequired,
//     };
//
//     componentWillMount() {
//       this.setState({
//         selectedIndex: this.props.defaultValue,
//       });
//     }
//
//     handleRequestChange = (event, index) => {
//       this.props.selectedRepo(index)
//       this.setState({
//         selectedIndex: index,
//       });
//       this.props.completedStep(true)
//     };
//
//     render() {
//       return (
//         <ComposedComponent
//           value={this.state.selectedIndex}
//           onChange={this.handleRequestChange.bind(this)}
//         >
//           {this.props.children}
//         </ComposedComponent>
//       );
//     }
//   };
// }
// const SelectableList = wrapState(MakeSelectable(List))
//
// const SelectableListContainer = connect(null,{selectedRepo,completedStep})(SelectableList)
//
// export default SelectableListContainer
