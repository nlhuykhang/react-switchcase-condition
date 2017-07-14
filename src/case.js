import React from 'react';
import PropTypes from 'prop-types';

const Case = ({ component: C, componentProps, }) => <C {...componentProps} />;

Case.componentName = 'Case';
Case.propTypes = {
  component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
};

Case.defaultProps = {
  componentProps: {},
};

export default Case;
