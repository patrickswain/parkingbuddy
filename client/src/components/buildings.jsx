import React, { Component } from 'react';
import axios from 'axios';
import Lambo from "./lambo.jpg";

class Buildings extends Component {
  constructor() {
    super();
    this.state =
    {
      destination : "blank",
      garage : "blank",
      distance : "blank",
      spaces : "blank"
    };
    this.changeDestination = this.changeDestination.bind(this);
  }
  render() {
    return (
      <React.Fragment>
      <div className = "col">
        <h3 className = "Sub-header">Pick your destination building</h3>
        <ul>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Student Union","SU")}>SU - Student Union</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Classroom Building 1","CB1")}>CB1 - Classroom Building 1</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Classroom Building 2","CB2")}>CB2 - Classroom building 2</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Mathematical Sciences Building","MSB")}>MSB - Mathematical Sciences Building</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Harris Corporation Engineering Center","HEC")}>HEC - Harris Corporation Engineering Center</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Business Administration 1","BA1")}>BA1 - Business Administration 1</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Business Administration 2","BA2")}>BA2 - Business Administration 2</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Engineering Building 1","ENG1")}>ENG1 - Engineering Building 1</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Engineering Building 2","ENG2")}>ENG2 - Engineering Building 2</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Psychology Building","PSY")}>PSY - Psychology Building</button>
          </li>
          <li>
            <button className = "astext"  onClick= {this.changeDestination.bind(this, "Biological Sciences Building","BIO")}>BIO - Biological Sciences Building</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Visual Arts Building","VAB")}>VAB - Visual Arts Building</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Teaching Academy","TA")}>TA - Teaching Academy</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Nicholson School of Communication","NSC")}>NSC - Nicholson School of Communication</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Health and Public Affairs 1","HPA1")}>HPA1 - Health and Public Affairs 1</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Health and Public Affairs 2","HPA2")}>HPA2 - Health and Public Affairs 2</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Chemistry Building","CHEM")}>CHEM - Chemistry Building</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Trevor Colbourn Hall","TCH")}>TCH - Trevor Colbourn Hall</button>
          </li>
          <li>
            <button className = "astext" onClick= {this.changeDestination.bind(this, "Education Complex and Gym","EC")}>EC - Education Complex and Gym</button>
          </li>
        </ul>
      </div>
      <div className = "col">
        <div className = "row pictureHeight">
          <h3>You chose {this.state.destination}, the closest available garage right now is {this.state.garage}. There are {this.state.spaces} spaces available. The walking distance is {this.state.distance} miles.</h3>
        </div>
        <div className = "row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.408172767679!2d-81.2052819851853!3d28.60187118242992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564253416948!5m2!1sen!2sus" width="480" height="300" frameborder="0" styles="border:0" allowfullscreen></iframe>
        </div>
      </div>
      </React.Fragment>
    );
  }


  changeDestination(building, code)
  {
    this.setState({destination: building});

    var basicLink = "https://parkingbuddy.herokuapp.com/testing/"
    var url = basicLink.concat(code);

    fetch(url,{
      method: 'GET',
      headers: {'Accept' : 'application/json', 'Content-Type': 'application/json'},
      //body: JSON.stringify({
      //  destination : 'CB1'
      //})
    })
    .then(response => response.json())
    .then((result) => {
        this.setState({
          garage : result.garage,
          distance : result.distance,
          spaces : result.availability
        });
      })
      .catch(error => {
        console.log('Error',error);
      });
  }

/*
  changeDestination(building)
  {
    this.setState({destination: building});

    const buildingObj = {
      destination : building
    };

    fetch("https://parkingbuddy.herokuapp.com/testing", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, cors, *same-origin
        //headers: {'Content-Type': 'application/json',// 'Content-Type': 'application/x-www-form-urlencoded',},
        headers: {'Accept' : 'application/json', 'Content-Type': 'application/json'},
        //redirect: 'follow', // manual, *follow, error
        //referrer: 'no-referrer', // no-referrer, *client
        //responseType: 'text',
        //body: JSON.stringify(buildingObj), // body data type must match "Content-Type" header
    })
    .then(response => console.log(response)) // parses JSON response into native JavaScript objects
    .then((result) => {
        this.setState({
          garage : result.status
        })
      })
      .catch((error) => {
      console.error(error);
    });
}
*/
}

export default Buildings;
