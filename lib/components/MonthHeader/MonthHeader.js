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

var _dateHelpers = require('../dateHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMonthHeader = _styledComponents2.default.div(_templateObject, _styles.monthHeaderStyles);
var StyledMonthTitle = _styledComponents2.default.div(_templateObject, _styles.monthTitleStyles);
var StyledMonthNextPrev = _styledComponents2.default.a(_templateObject, _styles.monthNextPrevStyles);

var MonthHeader = function (_React$Component) {
  _inherits(MonthHeader, _React$Component);

  function MonthHeader(props) {
    _classCallCheck(this, MonthHeader);

    var _this = _possibleConstructorReturn(this, (MonthHeader.__proto__ || Object.getPrototypeOf(MonthHeader)).call(this, props));

    _this.moveBackward = function () {
      var view = (0, _dateHelpers.clone)(_this.state.view);
      view.setMonth(view.getMonth() - 1);
      _this.move(view, false);
    };

    _this.moveForward = function () {
      var view = (0, _dateHelpers.clone)(_this.state.view);
      view.setMonth(view.getMonth() + 1);
      _this.move(view, true);
    };

    _this.move = function (view, isForward) {
      _this.setState({
        view: view
      });

      _this.props.onMove(view, isForward);
    };

    _this.state = {
      view: props.view
    };
    return _this;
  }

  _createClass(MonthHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ArrowRight = _props.ArrowRight,
          ArrowLeft = _props.ArrowLeft,
          MonthName = _props.MonthName,
          rest = _objectWithoutProperties(_props, ['ArrowRight', 'ArrowLeft', 'MonthName']);

      return _react2.default.createElement(
        StyledMonthHeader,
        rest,
        _react2.default.createElement(
          StyledMonthNextPrev,
          { onClick: this.moveBackward },
          _react2.default.createElement(ArrowLeft, null)
        ),
        _react2.default.createElement(
          StyledMonthTitle,
          null,
          _react2.default.createElement(
            MonthName,
            null,
            (0, _dateHelpers.toMonthAndYearString)(this.state.view)
          )
        ),
        _react2.default.createElement(
          StyledMonthNextPrev,
          { onClick: this.moveForward },
          _react2.default.createElement(ArrowRight, null)
        )
      );
    }
  }]);

  return MonthHeader;
}(_react2.default.Component);

exports.default = MonthHeader;