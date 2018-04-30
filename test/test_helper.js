import jsdom from 'jsdom';
import jquery from 'jquery';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import React from 'react';
import ReactDOM from 'react-dom'
import { StaticRouter } from 'react-router-dom'
import history from '../src/history';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import { sinon, spy } from 'sinon';

// Set up test environmnet to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window); // Configure jquery to use jsdom

/**
 * Renders a React Class to our fake jsdom for inspection
 *
 * @param ComponentClass
 * @param props
 * @param state
 * @returns {jQuery|HTMLElement}
 */
const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <StaticRouter context={{}}>
        <ComponentClass {...props} />
      </StaticRouter>
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // Produces HTML
};

/**
 * Helper function for simulating events
 *
 * @param eventName
 * @param value
 */
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Export references
export { renderComponent, expect, sinon, spy }

global.navigator = {
  userAgent: 'node.js'
};