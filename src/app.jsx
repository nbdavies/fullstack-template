// import React from 'react'
// import ReactDOM from 'react-dom'
import SearchBar from './search_bar.js'
import SearchResults from './search_results.js'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searched: false
    }
  }

  render() {
    return(
      <div className='gx-4 gy-4'>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.searched &&
          <SearchResults results={this.state.results} />
        }
      </div>
    )
  }

  handleSearch = (term) => {
    let search_string = new URLSearchParams({ search_term: term }).toString()
    fetch('http://localhost:8765/api/index.php?' + search_string, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results, searched: true })
      })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Search />,
    document.getElementById('app').appendChild(document.createElement('div')),
  )
})
