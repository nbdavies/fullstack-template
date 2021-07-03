// import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      invalidInput: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return(
      <div className='row gy-4'>
        <div className='col'>
          <form onSubmit={this.handleSubmit}>
            <div className='input-group'>
              <input type='text' name='term' onChange={this.handleChange} value={this.state.term} className='form-control' placeholder='Country name or ISO code'/>
              <input type='submit' value='Search' className='btn btn-primary'/>
            </div>
            { this.state.invalidInput &&
              <div className="alert alert-warning" role="alert">
                You must enter a search term to get results.
              </div>
            }
          </form>
        </div>
      </div>
    )
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.term != '') {
      this.props.onSearch(this.state.term)
      this.setState((state) => {
        state.term = ''
        return state
      })
    }
    else {
      this.setState((state) => {
        state.invalidInput = true
        return state
      })
    }
    return false;
  }
  
  handleChange = (event) => {
    this.setState({ term: event.target.value, invalidInput: false })
  }
}

export default SearchBar;
