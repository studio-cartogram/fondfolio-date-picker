'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayStyles = exports.weekStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      color: ', ';\n      background: ', ';\n      &:before {\n        opacity: 1;\n      }\n      '], ['\n      color: ', ';\n      background: ', ';\n      &:before {\n        opacity: 1;\n      }\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background: ', ';\n\n    &:hover:before {\n      opacity: 0.25;\n    }\n  '], ['\n    background: ', ';\n\n    &:hover:before {\n      opacity: 0.25;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', '%;\n  padding: 2%;\n  cursor: pointer;\n  transition: opacity 200ms;\n\n  &:before {\n    transition: opacity 200ms;\n    opacity: 0;\n    content: \'\';\n    padding-top: 100%;\n    width: 100%;\n    position: absolute;\n    border: 1px solid;\n    border-radius: 50%;\n    background: white;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.4);\n  }\n\n  * {\n    color: inherit !important;\n    position: relative;\n    z-index: 1;\n  }\n\n  ', '\n\n'], ['\n  position: relative;\n  width: ', '%;\n  padding: 2%;\n  cursor: pointer;\n  transition: opacity 200ms;\n\n  &:before {\n    transition: opacity 200ms;\n    opacity: 0;\n    content: \'\';\n    padding-top: 100%;\n    width: 100%;\n    position: absolute;\n    border: 1px solid;\n    border-radius: 50%;\n    background: white;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.4);\n  }\n\n  * {\n    color: inherit !important;\n    position: relative;\n    z-index: 1;\n  }\n\n  ', '\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']);

var _styledComponents = require('styled-components');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var variantStyles = function variantStyles(_ref) {
  var otherMonth = _ref.otherMonth,
      disabled = _ref.disabled,
      selected = _ref.selected,
      activeColor = _ref.activeColor,
      otherMonthColor = _ref.otherMonthColor,
      monthBackgroundColor = _ref.monthBackgroundColor,
      disabledColor = _ref.disabledColor;

  if (selected) {
    return (0, _styledComponents.css)(_templateObject, activeColor, monthBackgroundColor);
  }
  if (otherMonth) {
    return (0, _styledComponents.css)(_templateObject2, otherMonthColor);
  }
  if (disabled) {
    return (0, _styledComponents.css)(_templateObject2, disabledColor);
  }
  return (0, _styledComponents.css)(_templateObject3, monthBackgroundColor);
};

var dayStyles = function dayStyles(_ref2) {
  var rest = _objectWithoutProperties(_ref2, []);

  return (0, _styledComponents.css)(_templateObject4, 100 / 7, variantStyles(rest));
};
var weekStyles = (0, _styledComponents.css)(_templateObject5);

exports.weekStyles = weekStyles;
exports.dayStyles = dayStyles;