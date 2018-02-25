'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('./styles');

var _dateHelpers = require('../dateHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWeek = _styledComponents2.default.div(_templateObject, _styles.weekStyles);
var StyledDay = _styledComponents2.default.div(_templateObject, _styles.dayStyles);

var Week = function (_React$Component) {
  _inherits(Week, _React$Component);

  function Week() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Week);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Week.__proto__ || Object.getPrototypeOf(Week)).call.apply(_ref, [this].concat(args))), _this), _this.buildDays = function (start) {
      var days = [(0, _dateHelpers.clone)(start)];
      var cloned = (0, _dateHelpers.clone)(start);

      for (var i = 1; i <= 6; i++) {
        cloned = (0, _dateHelpers.clone)(cloned);
        cloned.setDate(cloned.getDate() + 1);
        days.push(cloned);
      }

      return days;
    }, _this.isOtherMonth = function (day) {
      return _this.props.month !== day.month();
    }, _this.getDayType = function (day) {
      var props = {};
      if ((0, _dateHelpers.isSameDay)(day, new Date())) {
        props = _extends({}, props, { today: true });
      }
      if (_this.props.month !== day.getMonth()) {
        props = _extends({}, props, { otherMonth: true });
      }
      if (_this.props.selected && (0, _dateHelpers.isSameDay)(day, _this.props.selected)) {
        props = _extends({}, props, { selected: true });
      }
      if (_this.isDisabled(day)) {
        props = _extends({}, props, { disabled: true });
      }
      return props;
    }, _this.onSelect = function (day) {
      if (!_this.isDisabled(day)) {
        _this.props.onSelect(day);
      }
    }, _this.isDisabled = function (day) {
      return _this.props.minDate && (0, _dateHelpers.isBefore)(day, _this.props.minDate) || _this.props.maxDate && (0, _dateHelpers.isAfter)(day, _this.props.maxDate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Week, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          start = _props.start,
          Day = _props.Day,
          activeColor = _props.activeColor,
          disabledColor = _props.disabledColor,
          otherMonthColor = _props.otherMonthColor,
          monthBackgroundColor = _props.monthBackgroundColor,
          rest = _objectWithoutProperties(_props, ['start', 'Day', 'activeColor', 'disabledColor', 'otherMonthColor', 'monthBackgroundColor']);

      var days = this.buildDays(start);
      return _react2.default.createElement(
        StyledWeek,
        rest,
        days.map(function (day, i) {
          return _react2.default.createElement(
            StyledDay,
            _extends({
              key: i,
              onClick: _this2.onSelect.bind(null, day),
              activeColor: activeColor,
              disabledColor: disabledColor,
              otherMonthColor: otherMonthColor,
              monthBackgroundColor: monthBackgroundColor
            }, _this2.getDayType(day)),
            _react2.default.createElement(
              Day,
              null,
              (0, _dateHelpers.toDayOfMonthString)(day)
            )
          );
        })
      );
    }
  }]);

  return Week;
}(_react2.default.Component);

exports.default = Week;