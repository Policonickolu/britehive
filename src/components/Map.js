import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import './Map.css'

export default class MapContainer extends Component {
    
  render() {

    let maxLong = 0
    let minLong = 0
    let maxLat = 0
    let minLat = 0

    let position = [0,0]
    let markers = this.props.cities.map( (c, i) => {

      maxLong = Math.max(maxLong, c.longitude)
      minLong = Math.min(minLong, c.longitude)
      maxLat = Math.min(maxLat, c.latitude)
      minLat = Math.min(minLat, c.latitude)

      if(i === 20)
        position = [c.latitude, c.longitude]

      return (
                <Marker riseOnHover="true" position={[c.latitude, c.longitude]}>
                  <Popup>
                    <ul>
                      <li>City : {c.city}</li>
                      <li>Population : {c.population}</li>
                      <li>State : {c.state}</li>
                      <li>Growth (2000 to 2013) : {c.growth_from_2000_to_2013}</li> 
                    </ul>
                  </Popup>
                </Marker>
      )

    })

    return (
      <Map class="MapContainer" center={position} zoom={6}>
        <TileLayer class="TileLayer"
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        { markers }
      </Map>
    )
  }
}
