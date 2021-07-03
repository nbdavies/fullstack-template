var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react'

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      if (_this.state.term != '') {
        _this.props.onSearch(_this.state.term);
        _this.setState(function (state) {
          state.term = '';
          return state;
        });
      } else {
        _this.setState(function (state) {
          state.invalidInput = true;
          return state;
        });
      }
      return false;
    };

    _this.handleChange = function (event) {
      _this.setState({ term: event.target.value, invalidInput: false });
    };

    _this.state = {
      term: '',
      invalidInput: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row gy-4' },
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement(
              'div',
              { className: 'input-group' },
              React.createElement('input', { type: 'text', name: 'term', onChange: this.handleChange, value: this.state.term, className: 'form-control', placeholder: 'Country name or ISO code' }),
              React.createElement('input', { type: 'submit', value: 'Search', className: 'btn btn-primary' })
            ),
            this.state.invalidInput && React.createElement(
              'div',
              { className: 'alert alert-warning', role: 'alert' },
              'You must enter a search term to get results.'
            )
          )
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

export default SearchBar;