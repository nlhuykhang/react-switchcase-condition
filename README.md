# React Switch Case Condition

[![Build Status](https://travis-ci.org/nlhuykhang/react-switchcase-condition.svg?branch=master)](https://travis-ci.org/nlhuykhang/react-switchcase-condition)

<!-- [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate) -->

Declarative way to render components conditionally

## Demo

## Install

```
npm install --save react-switchcase-condition
# OR
yarn add react-switchcase-condition
```

## Usage

```js
import {
  Switch,
  Case,
  Default,
} from 'react-switchcase-condition';

const Test1 = ({ text }) => <div>{text}</div>;
const Test2 = ({ text }) => <div>{text}</div>;
const Test3 = ({ text }) => <div>{text}</div>;

const Demo = () => (
  <Switch>
    <Case
      cond={false}
      component={Test1}
      componentProps={{ text: 'This will not be rendered', }}
    />
    <Case
      cond={true}
      component={Test2}
      componentProps={{ text: 'This will be render', }}
    />
    <Default
      component={Test3}
      componentProps={{ text: 'This is the default render' }}
    />
  </Switch>
);
```

## Components

### Switch

Wrapper component to declare the Switch block. Its children must contain at least one Case and exact one Default component. The first Case whose `cond` is `true` will be rendered. If there is no cond-true Case, Default will be rendered.

### Case

Declare a render case

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| cond | bool | true |  |Condition to determine render. Render if true and is the first Case in children list  |
| component | React component | true | | Component to render if `cond` is `true` |
| componentProps | object | false | {} | Props passed to `component` to render if `cond` is `true` |

### Default

Declare the default render case

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| component | React component | true | | Component to render if there is no cond-true `Case` |
| componentProps | object | false | {} | Props passed to `component` to render |

## License

[MIT](LICENSE)
