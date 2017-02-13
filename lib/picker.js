"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _emojione = require("emojione");

var _emojione2 = _interopRequireDefault(_emojione);

var _store = require("store");

var _store2 = _interopRequireDefault(_store);

var _each = require("lodash/each");

var _each2 = _interopRequireDefault(_each);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _emoji = require("emojione/emoji.json");

var _emoji2 = _interopRequireDefault(_emoji);

var _emoji3 = require("./emoji");

var _emoji4 = _interopRequireDefault(_emoji3);

var _categories = require("./categories");

var _categories2 = _interopRequireDefault(_categories);

var _createRowsSelector = require("./utils/createRowsSelector");

var _createRowsSelector2 = _interopRequireDefault(_createRowsSelector);

var _createEmojisFromStrategy = require("./utils/createEmojisFromStrategy");

var _createEmojisFromStrategy2 = _interopRequireDefault(_createEmojisFromStrategy);

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_Component) {
  _inherits(Picker, _Component);

  function Picker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Picker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modifier: _store2.default.get("emoji-modifier") || "0",
      frequentlyUsed: _store2.default.get('emoji-frequently-used') || [],
      category: false,
      term: _this.props.search !== true ? _this.props.search : ""
    }, _this.onChange = function (data) {
      _this.addToFrequentlyUsed(data.shortname);
      _this.props.onChange(data);
    }, _this.setFocus = function (ev) {
      if (ev.target.id === "flags") {
        _this.categories[_this.state.category].children[0].focus();
      }
    }, _this._renderHeaderCategories = function () {
      return (0, _map2.default)(_this.props.categories, function (details, key) {
        return _react2.default.createElement(
          "li",
          {
            key: key,
            className: _this.state.category === key ? "active" : undefined
          },
          _react2.default.createElement(_emoji4.default, {
            id: key,
            role: "menuitem",
            ariaLabel: key + " category",
            shortname: ":" + details.emoji + ":",
            onSelect: function onSelect() {
              _this.categories.jumpToCategory(key);
            }
          })
        );
      });
    }, _this._renderCategories = function () {
      var rows = _this.rowsSelector(_this.props.categories, _this.state.emojis, _this.state.modifier, _this.props.search, _this.state.term);

      return _react2.default.createElement(
        "div",
        { className: "emoji-categories-wrapper" },
        _react2.default.createElement(_categories2.default, {
          ref: _this._setCategoriesRef,
          rows: rows,
          modifier: _this.state.modifier,
          onActiveCategoryChange: _this._onActiveCategoryChange,
          onChange: _this.onChange,
          onModifierChange: _this._onModifierChange
        })
      );
    }, _this._setCategoriesRef = function (categories) {
      _this.categories = categories;
    }, _this._setSearchRef = function (ref) {
      _this.search = ref;
    }, _this._onActiveCategoryChange = function (category) {
      if (category !== _this.state.category) {
        _this.setState({ category: category });
      }
    }, _this._onModifierChange = function (modifier) {
      _this.setState({ modifier: modifier });
      _store2.default.set("emoji-modifier", modifier);
    }, _this._renderSearchInput = function () {
      if (_this.props.search === true) {
        return _react2.default.createElement(
          "div",
          { className: "emoji-search-wrapper" },
          _react2.default.createElement("input", {
            className: "emoji-search",
            type: "search",
            placeholder: "Search...",
            ref: _this._setSearchRef,
            onChange: _this._updateSearchTerm,
            autoFocus: true
          })
        );
      }

      return null;
    }, _this._updateSearchTerm = function () {
      _this.setState({ term: _this.search.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Picker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.rowsSelector = (0, _createRowsSelector2.default)();

      (0, _each2.default)(this.props.emojione, function (value, key) {
        _emojione2.default[key] = value;
      });
      this.setState({ emojis: _extends({}, (0, _createEmojisFromStrategy2.default)(_emoji2.default), this.getFromFrequentlyUsed(_emoji2.default, this.state.frequentlyUsed))
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ category: this.categories.getActiveCategory() }); // eslint-disable-line
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.search !== nextProps.search) {
        this.setState({ term: this.props.search });
      }
    }
  }, {
    key: "getFromFrequentlyUsed",
    value: function getFromFrequentlyUsed(strategy, frequentlyUsed) {
      var emojis = {};
      emojis['frequentlyUsed'] = {};

      frequentlyUsed.sort(function (a, b) {
        return b.used - a.used;
      }).slice(0, 21).forEach(function (frequentlyUsed) {
        emojis['frequentlyUsed'][frequentlyUsed.strategyName] = [strategy[frequentlyUsed.strategyName]];
      });
      return emojis;
    }
  }, {
    key: "addToFrequentlyUsed",
    value: function addToFrequentlyUsed(shortname) {
      var strategyName = shortname.replace(/:/g, '');
      var currentFrequentlyUsed = _store2.default.get('emoji-frequently-used') || [];
      var newFrequentlyUsed = [].concat(_toConsumableArray(currentFrequentlyUsed.filter(function (f) {
        return f.strategyName !== strategyName;
      })), [{
        strategyName: strategyName,
        used: (currentFrequentlyUsed.find(function (f) {
          return f.strategyName === strategyName;
        }) || { used: 0 }).used + 1 % 6
      }]);
      _store2.default.set('emoji-frequently-used', newFrequentlyUsed);
      this.setState({
        frequentlyUsed: newFrequentlyUsed,
        emojis: _extends({}, this.state.emojis, this.getFromFrequentlyUsed(_emoji2.default, newFrequentlyUsed))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = (0, _omit2.default)(this.props, Object.keys(Picker.propTypes));
      var classes = "emoji-dialog";
      if (this.props.search === true) classes += " with-search";
      if (this.props.className) classes += " " + this.props.className;

      return _react2.default.createElement(
        "div",
        _extends({ className: classes, role: "dialog" }, props),
        _react2.default.createElement(
          "header",
          { className: "emoji-dialog-header", role: "menu" },
          _react2.default.createElement(
            "ul",
            { onBlur: this.setFocus },
            this._renderHeaderCategories()
          )
        ),
        this._renderSearchInput(),
        this._renderCategories()
      );
    }
  }]);

  return Picker;
}(_react.Component);

Picker.propTypes = {
  emojione: _react2.default.PropTypes.shape({
    imageType: _react2.default.PropTypes.string,
    sprites: _react2.default.PropTypes.bool,
    imagePathSVGSprites: _react2.default.PropTypes.string
  }),
  search: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),
  className: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func.isRequired,
  categories: _react2.default.PropTypes.object
};
Picker.defaultProps = {
  search: "",
  categories: _constants.defaultCategories
};
exports.default = Picker;