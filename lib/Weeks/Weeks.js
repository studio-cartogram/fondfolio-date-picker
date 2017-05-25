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

var _Week = require('../Week');

var _Week2 = _interopRequireDefault(_Week);

var _styles = require('./styles');

var _dateHelpers = require('../dateHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWeeks = _styledComponents2.default.div(_templateObject, _styles.weeksStyles);

var Weeks = function (_React$Component) {
  _inherits(Weeks, _React$Component);

  function Weeks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Weeks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Weeks.__proto__ || Object.getPrototypeOf(Weeks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: (0, _dateHelpers.clone)(_this.props.view)
    }, _this.getWeekStartDates = function (view) {
      view.setDate(1);
      view = (0, _dateHelpers.moveToDayOfWeek)((0, _dateHelpers.clone)(view), 0);

      var current = (0, _dateHelpers.clone)(view);
      current.setDate(current.getDate() + 7);

      var starts = [view];
      var month = current.getMonth();

      while (current.getMonth() === month) {
        starts.push((0, _dateHelpers.clone)(current));
        current.setDate(current.getDate() + 7);
      }

      return starts;
    }, _this.renderWeeks = function (view) {
      var _this$props = _this.props,
          selected = _this$props.selected,
          onSelect = _this$props.onSelect,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          rest = _objectWithoutProperties(_this$props, ['selected', 'onSelect', 'minDate', 'maxDate']);

      var starts = _this.getWeekStartDates(view);
      var month = starts[1].getMonth();

      return starts.map(function (s, i) {
        return _react2.default.createElement(_Week2.default, _extends({
          key: i,
          start: s,
          month: month,
          selected: selected,
          onSelect: onSelect,
          minDate: minDate,
          maxDate: maxDate
        }, rest));
      });
    }, _this.moveTo = function (view, isForward) {
      _this.setState({
        view: (0, _dateHelpers.clone)(view)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Weeks, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        StyledWeeks,
        rest,
        this.renderWeeks(view)
      );
    }
  }]);

  return Weeks;
}(_react2.default.Component);

exports.default = Weeks;