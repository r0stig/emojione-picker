"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _modifier = require("./modifier");

var _modifier2 = _interopRequireDefault(_modifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modifiers = function (_Component) {
  _inherits(Modifiers, _Component);

  function Modifiers() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modifiers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modifiers.__proto__ || Object.getPrototypeOf(Modifiers)).call.apply(_ref, [this].concat(args))), _this), _this._handleModifierClick = function (ev, index) {
      _this.props.onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modifiers, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "ol",
        { className: "modifiers" },
        (0, _map2.default)(this.props.modifiers, function (hex, type) {
          return _react2.default.createElement(
            "li",
            { key: type },
            _react2.default.createElement(_modifier2.default, {
              hex: hex,
              type: type,
              active: _this2.props.active === type,
              onClick: _this2._handleModifierClick
            })
          );
        })
      );
    }
  }]);

  return Modifiers;
}(_react.Component);

Modifiers.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  modifiers: _react2.default.PropTypes.object,
  active: _react2.default.PropTypes.string
};
Modifiers.defaultProps = {
  active: 0,
  modifiers: {
    0: "#FFDE5C",
    1: "#FFE1BB",
    2: "#FFD0A9",
    3: "#D7A579",
    4: "#B57D52",
    5: "#8B6858"
  }
};
exports.default = Modifiers;