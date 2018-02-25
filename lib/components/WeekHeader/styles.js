'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayOfWeekStyles = exports.weekHeaderStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', '%;\n  padding: 2%;\n  pointer-events: none;\n'], ['\n  width: ', '%;\n  padding: 2%;\n  pointer-events: none;\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var weekHeaderStyles = (0, _styledComponents.css)(_templateObject);

var dayOfWeekStyles = (0, _styledComponents.css)(_templateObject2, 100 / 7);

exports.weekHeaderStyles = weekHeaderStyles;
exports.dayOfWeekStyles = dayOfWeekStyles;