"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modifier = function (_Component) {
  _inherits(Modifier, _Component);

  function Modifier() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modifier);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modifier.__proto__ || Object.getPrototypeOf(Modifier)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function (ev) {
      _this.props.onClick(ev, _this.props.type);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modifier, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("a", {
        onClick: this._handleClick,
        className: this.props.active ? "modifier active" : "modifier",
        style: { background: this.props.hex },
        "aria-label": "Fitzpatrick type " + this.props.type
      });
    }
  }]);

  return Modifier;
}(_react.Component);

Modifier.propTypes = {
  onClick: _react2.default.PropTypes.func.isRequired,
  active: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.string.isRequired,
  hex: _react2.default.PropTypes.string.isRequired
};
exports.default = Modifier;