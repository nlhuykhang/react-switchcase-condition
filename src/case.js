import React, {
  Component,
  // cloneElement,
} from 'react';
import PropTypes from 'prop-types';

export default class Case extends Component {
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

Case.propTypes = {
  component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
};

Case.defaultProps = {
  componentProps: {},
};
