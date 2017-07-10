import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Case,
  Default,
} from '../src';

const Test = ({ text, }) => <div>{text}</div>;

Test.propTypes = {
  text: PropTypes.string.isRequired,
};

class Test2 extends React.Component {
  componentDidMount() {}
  render() {
    return <div>{this.props.text}</div>;
  }
}

Test2.propTypes = {
  text: PropTypes.string.isRequired,
};

const Demo = () => (
  <Switch>
    <Case
      cond={false}
      component={Test}
    />
    <Case
      cond
      component={Test2}
      componentProps={{ text: 'case 2', }}
    />
    <Case
      cond={false}
      component={Test}
      componentProps={{ text: 'case 3', }}
    />
    <Default
      component={({ text, }) => <div>{text}</div>}
      componentProps={{ text: 'default text', }}
    />
  </Switch>
);

export default Demo;
