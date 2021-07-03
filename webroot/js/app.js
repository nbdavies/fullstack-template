var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react'
// import ReactDOM from 'react-dom'
import SearchBar from './search_bar.js';
import SearchResults from './search_results.js';

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.handleSearch = function (term) {
      var search_string = new URLSearchParams({ search_term: term }).toString();
      fetch('http://localhost:8765/api/index.php?' + search_string, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({ results: data.results, searched: true });
      });
    };

    _this.state = {
      results: [],
      searched: false
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'gx-4 gy-4' },
        React.createElement(SearchBar, { onSearch: this.handleSearch }),
        this.state.searched && React.createElement(SearchResults, { results: this.state.results })
      );
    }
  }]);

  return Search;
}(React.Component);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(React.createElement(Search, null), document.getElementById('app').appendChild(document.createElement('div')));
});