'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWeekHeader = _styledComponents2.default.div(_templateObject, _styles.weekHeaderStyles);
var StyledDayOfWeek = _styledComponents2.default.span(_templateObject, _styles.dayOfWeekStyles);

var WeekHeader = function (_React$Component) {
  _inherits(WeekHeader, _React$Component);

  function WeekHeader() {
    _classCallCheck(this, WeekHeader);

    return _possibleConstructorReturn(this, (WeekHeader.__proto__ || Object.getPrototypeOf(WeekHeader)).apply(this, arguments));
  }

  _createClass(WeekHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          DayOfWeek = _props.DayOfWeek,
          rest = _objectWithoutProperties(_props, ['children', 'DayOfWeek']);

      return _react2.default.createElement(
        StyledWeekHeader,
        rest,
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Sun'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Mon'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Tues'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Wed'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Thurs'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Fri'
          )
        ),
        _react2.default.createElement(
          StyledDayOfWeek,
          null,
          _react2.default.createElement(
            DayOfWeek,
            null,
            'Sat'
          )
        )
      );
    }
  }]);

  return WeekHeader;
}(_react2.default.Component);

exports.default = WeekHeader;