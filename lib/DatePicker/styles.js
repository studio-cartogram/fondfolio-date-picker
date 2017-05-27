'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datePickerStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n  border: 0;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  padding-bottom: 2%;\n\n  &,\n  &:before,\n  &:after,\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n'], ['\n  overflow: hidden;\n  border: 0;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  padding-bottom: 2%;\n\n  &,\n  &:before,\n  &:after,\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var datePickerStyles = function datePickerStyles(_ref) {
  var borderColor = _ref.borderColor,
      borderRadius = _ref.borderRadius;
  return (0, _styledComponents.css)(_templateObject, borderColor, borderRadius);
};

exports.datePickerStyles = datePickerStyles;