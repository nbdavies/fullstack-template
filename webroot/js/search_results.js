var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = function (_React$Component) {
  _inherits(SearchResults, _React$Component);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: 'render',
    value: function render() {
      console.log(this.props.results);
      if (this.props.results.length > 0) {
        return React.createElement(
          'table',
          { className: 'table' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Full name'
              ),
              React.createElement(
                'th',
                null,
                'Alpha 2 code'
              ),
              React.createElement(
                'th',
                null,
                'Alpha 3 code'
              ),
              React.createElement(
                'th',
                null,
                'Flag'
              ),
              React.createElement(
                'th',
                null,
                'Region'
              ),
              React.createElement(
                'th',
                null,
                'Subregion'
              ),
              React.createElement(
                'th',
                null,
                'Population'
              ),
              React.createElement(
                'th',
                null,
                'Languages'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.props.results.map(function (result) {
              return React.createElement(
                'tr',
                { key: result.alpha2Code },
                React.createElement(
                  'td',
                  null,
                  result.name
                ),
                React.createElement(
                  'td',
                  null,
                  result.alpha2Code
                ),
                React.createElement(
                  'td',
                  null,
                  result.alpha3Code
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('img', { src: result.flag, className: 'flag border' })
                ),
                React.createElement(
                  'td',
                  null,
                  result.region
                ),
                React.createElement(
                  'td',
                  null,
                  result.subregion
                ),
                React.createElement(
                  'td',
                  null,
                  result.population
                ),
                React.createElement(
                  'td',
                  null,
                  result.languages.map(function (language) {
                    return language.name;
                  }).join(', ')
                )
              );
            })
          )
        );
      } else {
        return React.createElement(
          'div',
          { className: 'alert alert-warning', role: 'alert' },
          'No results.'
        );
      }
    }
  }]);

  return SearchResults;
}(React.Component);

export default SearchResults;