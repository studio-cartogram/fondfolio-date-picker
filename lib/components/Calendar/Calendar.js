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

var _Weeks = require('../Weeks');

var _Weeks2 = _interopRequireDefault(_Weeks);

var _MonthHeader = require('../MonthHeader');

var _MonthHeader2 = _interopRequireDefault(_MonthHeader);

var _WeekHeader = require('../WeekHeader');

var _WeekHeader2 = _interopRequireDefault(_WeekHeader);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCalendar = _styledComponents2.default.div(_templateObject, _styles.calendarStyles);

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onMove = function (view, isForward) {
      _this.weeks.moveTo(view, isForward);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          view = _props.view,
          selected = _props.selected,
          onSelect = _props.onSelect,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          rest = _objectWithoutProperties(_props, ['view', 'selected', 'onSelect', 'minDate', 'maxDate']);

      return _react2.default.createElement(
        StyledCalendar,
        rest,
        _react2.default.createElement(_MonthHeader2.default, _extends({
          onMove: this.onMove,
          view: view
        }, rest)),
        _react2.default.createElement(_WeekHeader2.default, rest),
        _react2.default.createElement(_Weeks2.default, _extends({
          view: view,
          ref: function ref(r) {
            _this2.weeks = r;
          },
          selected: selected,
          onSelect: onSelect,
          minDate: minDate,
          maxDate: maxDate
        }, rest))
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

exports.default = Calendar;