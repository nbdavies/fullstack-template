class SearchResults extends React.Component {
  render(){
    console.log(this.props.results)
    if (this.props.results.length > 0) {
      return(
        <table className='table'>
          <thead>
            <tr>
              <th>Full name</th>
              <th>Alpha 2 code</th>
              <th>Alpha 3 code</th>
              <th>Flag</th>
              <th>Region</th>
              <th>Subregion</th>
              <th>Population</th>
              <th>Languages</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(result => (
              <tr key={result.alpha2Code}>
                <td>{result.name}</td>
                <td>{result.alpha2Code}</td>
                <td>{result.alpha3Code}</td>
                <td><img src={result.flag} className='flag border' /></td>
                <td>{result.region}</td>
                <td>{result.subregion}</td>
                <td>{result.population}</td>
                <td>
                  {result.languages.map(language => (language.name)).join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
    else {
      return(
        <div className="alert alert-warning" role="alert">
          No results.
        </div>
      )
    }
  }
}

export default SearchResults;
