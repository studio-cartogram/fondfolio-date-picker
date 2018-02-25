'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthNextPrevStyles = exports.monthTitleStyles = exports.monthHeaderStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 4% 2% 2%;\n'], ['\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 4% 2% 2%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  pointer-events: none;\n'], ['\n  pointer-events: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  transition: 200ms opacity;\n  opacity: 0.5;\n  &:hover {\n    opacity: 1;\n  }\n'], ['\n  cursor: pointer;\n  transition: 200ms opacity;\n  opacity: 0.5;\n  &:hover {\n    opacity: 1;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var monthHeaderStyles = (0, _styledComponents.css)(_templateObject);

var monthTitleStyles = (0, _styledComponents.css)(_templateObject2);

var monthNextPrevStyles = (0, _styledComponents.css)(_templateObject3);

exports.monthHeaderStyles = monthHeaderStyles;
exports.monthTitleStyles = monthTitleStyles;
exports.monthNextPrevStyles = monthNextPrevStyles;