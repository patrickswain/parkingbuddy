import React, { Component } from 'react';

class ResourcesBar extends Component {
  render() {
    return (
/*
      <div className = "row">
        <h6>Resources</h6>
      </div>
*/
  <footer>
    <h6 className = "center">Resources</h6>
    <ul className="nav justify-content-md-center">
      <li className = "nav-item">
        <a class = "nav-link active" href = "https://cdn.ucf.edu/map/printable/UCF-Campus-Map-2015.pdf">UCF Campus Map</a>
      </li>
      <li className = "nav-item">
        <a class = "nav-link active" href = "https://www.google.com/maps">Google Maps</a>
      </li>
      <li className = "nav-item">
        <a class = "nav-link active" href = "http://secure.parking.ucf.edu/GarageCount/">UCF Garage Availability</a>
      </li>
    </ul>
  </footer>
    );
  }
}

export default ResourcesBar;
