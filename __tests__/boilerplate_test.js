// import React from 'react';
// import {
//   renderIntoDocument,
//   findRenderedDOMComponentWithClass,
//   findRenderedDOMComponentWithTag,
//   Simulate
// } from 'react-addons-test-utils';
import { expect } from 'chai';
import { demo } from '../src';

describe('Boilerplate', function () {
  it('should do boilerplate things', function () {
    // TODO: test something now
    expect(true).to.equal(true);
    expect(demo()).to.equal('what the hell? how do I test my component???');
  });
});
