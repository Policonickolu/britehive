import React, { Component } from 'react';

import './App.css';
import { citiesAPI } from '../api.js'
import List from '../components/List'
import Map from '../components/Map'

export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      firstCity: 0,
      lastCity: 100
    }

    this.loadData = this.loadData.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {

    var res = await citiesAPI()

    res.sort((a,b) => { return a.longitude < b.longitude })
    
    this.setState({
      cities: res
    })
  }

  handleButtonClick(e) {

    var className = e.target.className
    var first = this.state.firstCity
    var last = this.state.lastCity
    var len = this.state.cities.length

    if(className === "previous"){ 
      first = (first - 100 < 0 ? 0 : first - 100)    
    }else if(className === "next"){
      first = (first + 100 <= len  ? first + 100 : first)
    }

    last = (first + 100 <= len ? first + 100 : len)

    this.setState({
      firstCity: first,
      lastCity: last
    })

  }

  render() {

    var cities = this.state.cities.slice(this.state.firstCity, this.state.lastCity)

    return (
            <div className="App">
              <List cities={cities} onButtonClick={this.handleButtonClick} />
              <Map cities={cities}/>
            </div>
          )
  }
}
