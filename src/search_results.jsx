class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.countRegions()
    this.countRegions()
  }

  countRegions(){
    let regionCounts = {}
    let subregionCounts = {}
    this.props.results.forEach((result) => {
      let region = result.region
      regionCounts[region] = (regionCounts[region] || 0) + 1
      subregionCounts[region] = subregionCounts[region] || {}
      let subregion = result.subregion
      subregionCounts[region][subregion] = (subregionCounts[region][subregion] || 0) + 1
    })
    this.state = { regionCounts: regionCounts, subregionCounts: subregionCounts}
  }

  render(){
    if (this.props.results.length > 0) {
      return(
        <div className='row'>
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
            <tfoot>
              <tr>
                <th>Total</th>
                <td>{this.props.results.length}</td>
              </tr>
            </tfoot>
            {Object.keys(this.state.regionCounts).map(region => (
              <tfoot key={region}>
                <tr>
                  <th>{region}</th>
                  <td>{this.state.regionCounts[region]}</td>
                </tr>
                {Object.keys(this.state.subregionCounts[region]).map(subregion => (
                  <tr key={subregion}>
                    <td>{subregion}</td>
                    <td>{this.state.subregionCounts[region][subregion]}</td>
                  </tr>
                ))}
              </tfoot>
            ))}
          </table>
        </div>
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
