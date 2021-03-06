/**
 * @fileoverview Tests for jsx-pascal-case
 * @author Jake Marsh
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/jsx-pascal-case');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('jsx-pascal-case', rule, {
  valid: [{
    code: '<testComponent />'
  }, {
    code: '<test_component />'
  }, {
    code: '<TestComponent />'
  }, {
    code: '<CSSTransitionGroup />'
  }, {
    code: '<BetterThanCSS />'
  }, {
    code: '<TestComponent><div /></TestComponent>'
  }, {
    code: '<Test1Component />'
  }, {
    code: '<TestComponent1 />'
  }, {
    code: '<T3stComp0nent />'
  }, {
    code: '<T />'
  }, {
    code: '<YMCA />',
    options: [{allowAllCaps: true}]
  }, {
    code: '<TEST_COMPONENT />',
    options: [{allowAllCaps: true}]
  }, {
    code: '<Modal.Header />'
  }, {
    code: '<Modal:Header />'
  }, {
    code: '<IGNORED />',
    options: [{ignore: ['IGNORED']}]
  }, {
    code: '<T />'
  }, {
    code: '<$ />'
  }, {
    code: '<_ />'
  }],

  invalid: [{
    code: '<Test_component />',
    errors: [{message: 'Imported JSX component Test_component must be in PascalCase'}]
  }, {
    code: '<TEST_COMPONENT />',
    errors: [{message: 'Imported JSX component TEST_COMPONENT must be in PascalCase'}]
  }, {
    code: '<YMCA />',
    errors: [{message: 'Imported JSX component YMCA must be in PascalCase'}]
  }, {
    code: '<_TEST_COMPONENT />',
    options: [{allowAllCaps: true}],
    errors: [{message: 'Imported JSX component _TEST_COMPONENT must be in PascalCase or SCREAMING_SNAKE_CASE'}]
  }, {
    code: '<TEST_COMPONENT_ />',
    options: [{allowAllCaps: true}],
    errors: [{message: 'Imported JSX component TEST_COMPONENT_ must be in PascalCase or SCREAMING_SNAKE_CASE'}]
  }, {
    code: '<__ />',
    options: [{allowAllCaps: true}],
    errors: [{message: 'Imported JSX component __ must be in PascalCase or SCREAMING_SNAKE_CASE'}]
  }, {
    code: '<$a />',
    errors: [{message: 'Imported JSX component $a must be in PascalCase'}]
  }]
});
