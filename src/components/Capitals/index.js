import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: 'NEW_DELHI'}

  fun = event => {
    console.log(event.target.value)
    this.setState({activeId: event.target.value})
  }

  getTheObj = activeId => {
    const filteredArray = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeId,
    )
    console.log(filteredArray)
    return filteredArray[0]
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)
    const filteredArray = this.getTheObj(activeId)
    const {country} = filteredArray
    console.log(country)
    return (
      <div className="mainDiv">
        <div className="whiteCon">
          <h1>Countries and Capitals</h1>
          <div className="flex">
            <select className="sle" onChange={this.fun} value={activeId}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
