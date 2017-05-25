'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Calendar = require('../Calendar/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _dateHelpers = require('../dateHelpers');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDatePicker = _styledComponents2.default.div(_templateObject, _styles.datePickerStyles);

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.setMinDate = function (date) {
      _this.setState({ minDate: date });
    };

    _this.setMaxDate = function (date) {
      _this.setState({ maxDate: date });
    };

    _this.onChange = function (day) {
      _this.setState({ selected: day });

      if (_this.props.onChange) {
        _this.props.onChange(day);
      }
    };

    var def = props.selected || new Date();
    _this.state = {
      view: (0, _dateHelpers.clone)(def),
      selected: (0, _dateHelpers.clone)(def),
      minDate: null,
      maxDate: null
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          selected = _state.selected,
          minDate = _state.minDate,
          maxDate = _state.maxDate;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        StyledDatePicker,
        rest,
        _react2.default.createElement(_Calendar2.default, _extends({
          view: view,
          selected: selected,
          onSelect: this.onChange,
          minDate: minDate,
          maxDate: maxDate
        }, rest)),
        children
      );
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
  selected: _propTypes2.default.instanceOf(Date),
  onChange: _propTypes2.default.func
};

DatePicker.defaultProps = {
  ArrowLeft: function ArrowLeft() {
    return _react2.default.createElement(
      'span',
      null,
      'prev'
    );
  },
  ArrowRight: function ArrowRight() {
    return _react2.default.createElement(
      'span',
      null,
      'next'
    );
  },
  MonthName: function MonthName(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      'span',
      null,
      children
    );
  },
  Day: function Day(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
      'span',
      null,
      children
    );
  },
  DayOfWeek: function DayOfWeek(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
      'span',
      null,
      children
    );
  },
  activeColor: 'red',
  disabledColor: 'green',
  otherMonthColor: 'green'
};

exports.default = DatePicker;