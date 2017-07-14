import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ component: C, componentProps, }) => <C {...componentProps} />;

Default.componentName = 'Default';
Default.propTypes = {
  component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
};

Default.defaultProps = {
  componentProps: {},
};

export default Default;
