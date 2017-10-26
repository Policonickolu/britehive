import React, { Component } from 'react';

import './List.css';

export default class List extends Component {
    


  render() {

    var cities = this.props.cities.map( (c, i) => {
      return (
              <li rank={c.rank}>
                <ul>
                  <li>City : {c.city}</li>
                  <li>Population : {c.population}</li>
                  <li>State : {c.state}</li>
                  <li>Growth (2000 to 2013) : {c.growth_from_2000_to_2013}</li> 
                </ul>
              </li>
              )
    } )

    return (
      <div className="List">
        <div>
          <button className="previous" onClick={this.props.onButtonClick}>Previous</button>
          <button className="next" onClick={this.props.onButtonClick}>Next</button>
        </div>
        <div className="scroll">
          <ul>
            {cities}   
          </ul>
        </div>
      </div>
    )
  }
}
