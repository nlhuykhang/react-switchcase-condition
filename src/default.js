import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Default extends Component {
  componentDidMount() {}
  render() {
    const {
      component: C,
      componentProps,
    } = this.props;

    return (
      <div className="">
        <C {...componentProps} />
      </div>
    );
  }
}

Default.propTypes = {
  component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
};

Default.defaultProps = {
  componentProps: {},
};
