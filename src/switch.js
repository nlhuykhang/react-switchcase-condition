import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

function isCaseAndCondTrueComponent(component) {
  return component.type.componentName === 'Case' && component.props.cond;
}

function isDefaultComponent(component) {
  return component.type.componentName === 'Default';
}

function isOnlyDefaultChild(childList) {
  return childList.length === 1 && childList[0];
}

function isCaseOrDefaultComponent(component) {
  return component && component.type &&
    (component.type.componentName === 'Case' ||
    component.type.componentName === 'Default');
}

export default class Switch extends Component {
  componentDidMount() {}
  render() {
    const {
      children: childrenObj,
      ...restProps
    } = this.props;
    const children = Children.toArray(childrenObj);
    const caseToRender = children.filter(isCaseAndCondTrueComponent)[0];

    const defaultChild = children.filter(isDefaultComponent);

    if (!isOnlyDefaultChild(defaultChild)) {
      throw new Error('There has to be exact one Default component');
    }

    const childToRender = caseToRender || defaultChild[0];

    return (
      <div {...restProps}>
        {childToRender}
      </div>
    );
  }
}

Switch.componentName = 'Switch';
Switch.propTypes = {
  children: PropTypes.arrayOf(function (props, propName, componentName) {
    let error;
    const prop = props[propName];

    React.Children.forEach(prop, function (child) {
      if (!isCaseOrDefaultComponent(child)) {
        error = new Error(`${componentName} only accepts children of type Case or Default.`);
      }
    });

    return error;
  }).isRequired,
};
