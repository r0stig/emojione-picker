"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require("react-addons-shallow-compare");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _emoji = require("./emoji");

var _emoji2 = _interopRequireDefault(_emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmojiRow = function (_Component) {
  _inherits(EmojiRow, _Component);

  function EmojiRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmojiRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmojiRow.__proto__ || Object.getPrototypeOf(EmojiRow)).call.apply(_ref, [this].concat(args))), _this), _this._handleEmojiSelect = function (ev, emoji) {
      _this.props.onChange(emoji);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmojiRow, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          emojis = _props.emojis,
          style = _props.style;


      return _react2.default.createElement(
        "div",
        { className: "emoji-row", style: style },
        emojis.map(function (emoji) {
          return _react2.default.createElement(_emoji2.default, _extends({}, emoji, {
            ariaLabel: emoji.name,
            role: "option",
            key: emoji.unicode,
            onSelect: _this2._handleEmojiSelect
          }));
        })
      );
    }
  }]);

  return EmojiRow;
}(_react.Component);

EmojiRow.propTypes = {
  emojis: _react.PropTypes.array.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  style: _react.PropTypes.object.isRequired
};
exports.default = EmojiRow;