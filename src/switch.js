import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {
  componentDidMount() {}
  render() {
    const children = Children.toArray(this.props.children);
    const caseToRender = children.filter(
      child => child.type.displayName === 'Case' && child.props.cond
    )[0];

    const defaultChild = children.filter(child => child.type.displayName === 'Default');

    if (
      defaultChild.length !== 1 ||
      !defaultChild[0]
    ) {
      throw new Error('There has to be exact one Default component');
    }

    const childToRender = caseToRender || defaultChild;

    return (
      <div className="">
        {childToRender}
      </div>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.arrayOf(function (props, propName, componentName) {
    let error;
    const prop = props[propName];

    React.Children.forEach(prop, function (child) {
      if (
        !child ||
        !child.type ||
        !(child.type.displayName === 'Case' ||
        child.type.displayName === 'Default')
      ) {
        error = new Error(`${componentName} only accepts children of type Case or Default.`);
      }
    });

    return error;
  }).isRequired,
};
