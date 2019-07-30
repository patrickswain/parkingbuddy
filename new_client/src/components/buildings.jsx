import React, { Component } from 'react';
import axios from 'axios';
import Lambo from "./lambo.jpg";

class Buildings extends Component {
  constructor() {
    super();
    this.state =
    {
      destination : "",
      garage : "",
      distance : "   ",
      spaces : "        ",
      src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.391417721491!2d-81.20224858518527!3d28.6024273824297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7685d6a0a495f%3A0x5fd59b92b3c79bab!2sUniversity+of+Central+Florida!5e1!3m2!1sen!2sus!4v1564505557528!5m2!1sen!2sus"
    };
    this.changeDestination = this.changeDestination.bind(this);
    this.setPicture = this.setPicture.bind(this);
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
          <h4>You Chose: <u><font className = "orangeColor">{this.state.destination}</font></u>
          <br/>Closest Available Garage: <u><font className = "orangeColor">{this.state.garage}</font></u>
          <br/>Walking Distance: <u><font className = "orangeColor">{this.state.distance}</font></u> Miles
          <br/>Availability: <u><font className = "orangeColor">{this.state.spaces}</font></u> Spaces Available
          </h4>
          <h4>Map From Garage To Destination</h4>
        </div>
        <div className = "row">
          <iframe src={this.state.src} width="530" height="350" frameborder="0" styles="border:0" allowfullscreen></iframe>
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
      this.setPicture(code, result.garage);
      if(result.garage === "Park and Ride")
      {
        this.setState({
          garage : "Park and Ride",
          distance : "  ",
          spaces : "None, All Full"
        });
      }
      else{
        this.setState({
          garage : result.garage,
          distance : "0".concat(result.distance),
          spaces : result.availability
        });
      }
      })
      .catch(error => {
        console.log('Error',error);
      });
  }

  setPicture(code, garage)
  {
    switch(code)
    {
      case "SU":
        switch(garage)
        {
          case "Garage A":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.7184181518217!2d-81.20416794193532!3d28.600919645607537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sParking+Garage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+12715+Pegasus+Dr%2C+Orlando%2C+FL+32816!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564496415381!5m2!1sen!2sus"});
            break;
          case "Garage B":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.483006524829!2d-81.20340013518533!3d28.599386882430867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564496466233!5m2!1sen!2sus" });
            break;
          case "Garage C":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.6968292888778!2d-81.19932794193532!3d28.602352995607415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564496557818!5m2!1sen!2sus"});
            break;
          case "Garage D":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3547540974805!2d-81.20094353518526!3d28.603644432429217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564497737265!5m2!1sen!2sus"});
            break;
          case "Garage H":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3537509151047!2d-81.20293013518527!3d28.603677732429187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564497789118!5m2!1sen!2sus"});
            break;
          case "Garage I":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.712600620466!2d-81.20425634193529!3d28.601305895607553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564497827447!5m2!1sen!2sus"});
            break;
          case "Garage Libra":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.4934134370624!2d-81.20089633518533!3d28.599041382431015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685c69505879%3A0xb3ff663aee77d71!2sUCF+Student+Union%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6019313!2d-81.2005485!5e1!3m2!1sen!2sus!4v1564497858608!5m2!1sen!2sus"});
            break;
          default:
            break;
        }
        break;
      case "CB1":
        switch(garage)
        {
          case "Garage A":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.982587063415!2d-81.20745994735297!3d28.60188054965423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505194724!5m2!1sen!2sus"});
            break;
          case "Garage B":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.061581274252!2d-81.20588199735313!3d28.600540399776513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505226186!5m2!1sen!2sus"});
            break;
          case "Garage C":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.912888502911!2d-81.20277999735295!3d28.603062949546352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505261909!5m2!1sen!2sus"});
            break;
          case "Garage D":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.818805410156!2d-81.20358934735283!3d28.604658949400815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505285608!5m2!1sen!2sus"});
            break;
          case "Garage H":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.9116047282146!2d-81.20341817090709!3d28.604584242183066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505309720!5m2!1sen!2sus"});
            break;
          case "Garage I":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.9784048705005!2d-81.20754834735307!3d28.60195149964772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505338423!5m2!1sen!2sus"});
            break;
          case "Garage Libra":
            this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.087931572219!2d-81.20315169735325!3d28.60009334981724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685b91a22a8b%3A0x54fb2f6239af137a!2sClassroom+Building+1%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.6037185!2d-81.20052009999999!5e1!3m2!1sen!2sus!4v1564505366877!5m2!1sen!2sus"});
            break;
          default:
            break;
        }
        break;
      case "CB2":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3973311240643!2d-81.2050655851853!3d28.602231082429793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498558164!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6330.887355360107!2d-81.20541957562982!3d28.600692529721222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498602793!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3492230245943!2d-81.20020373518524!3d28.60382803242909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498630028!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.6590096783455!2d-81.1998503419353!3d28.604863795607223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498660332!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.315849118409!2d-81.20320713518527!3d28.604935832428612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498771295!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3951938083696!2d-81.20551388518533!3d28.602302032429744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498804856!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.296055733292!2d-81.2025137471885!3d28.600353449793253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685b9803019d%3A0xf893c9fb0ccece8b!2sClassroom+Building+II%2C+Gemini+Boulevard+North%2C+Orlando%2C+FL!3m2!1d28.6043058!2d-81.2001114!5e1!3m2!1sen!2sus!4v1564498842750!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "MSB":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.318275301917!2d-81.2074513971886!3d28.59998194982701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564498898173!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3142.713122369381!2d-81.20329252086606!3d28.598176692472723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564498925120!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.277983822008!2d-81.20294224718846!3d28.600655599765513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564498948802!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12570.381887470505!2d-81.2079750162065!3d28.602110809437683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564498981913!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.169115026111!2d-81.2066012971884!3d28.602475749599456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564499008268!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.307850379748!2d-81.20753979718859!3d28.6001562498111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564499030706!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.446629257964!2d-81.20286679718879!3d28.597835850022822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685db15d9505%3A0x92faff49fc7ce7ef!2sUCF+Mathematical+Sciences+Building+(MSB)%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.5994779!2d-81.200503!5e1!3m2!1sen!2sus!4v1564499057893!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "HEC":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.448150813888!2d-81.20382883518538!3d28.600544032430378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499187748!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.17021893542!2d-81.20299304735327!3d28.598697249944543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499259571!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.0050913297714!2d-81.19902222090711!3d28.6014123923265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499298596!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.96600132947!2d-81.19935492090713!3d28.60273869226652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499336011!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.910952066646!2d-81.20414834735294!3d28.603095799543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499374245!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.120544303354!2d-81.21046186686556!3d28.60056260972636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499415132!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.090197632574!2d-81.1995609709072!3d28.598524592457025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685cc4a4541b%3A0x6384a5663b5dc837!2sHEC%2C+Orlando%2C+FL!3m2!1d28.6005395!2d-81.1976138!5e1!3m2!1sen!2sus!4v1564499457675!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "BA1":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.448150813888!2d-81.20468988518533!3d28.600544032430378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499573282!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3142.697177792613!2d-81.2018485208661!3d28.598709892448518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499611503!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.23997631459!2d-81.20220514718842!3d28.601291049707534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499681335!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.138363967717!2d-81.20272684718829!3d28.602989849552582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499716748!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.124441784507!2d-81.20480119718833!3d28.60322259953137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499748451!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12570.567091347757!2d-81.21132291620707!3d28.60056260972499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499776283!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.404124686566!2d-81.20243589718872!3d28.59854654995796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685cf3f20ba9%3A0x8a5bb4062ab02140!2sBusiness+Administration+I%2C+Florida!3m2!1d28.6009229!2d-81.1993359!5e1!3m2!1sen!2sus!4v1564499801218!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "BA2":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12570.567091347757!2d-81.21084796620704!3d28.60056260972499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499852841!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3142.6987402655104!2d-81.20164082086603!3d28.598657642450934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499894721!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.228429463377!2d-81.2016809471884!3d28.60148409968995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499923743!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3142.5746882320764!2d-81.19974462086603!3d28.60280574226337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499950755!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.128015802762!2d-81.20419059718834!3d28.603162849536904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499973291!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12570.567091347757!2d-81.21093636620706!3d28.60056260972499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564499996811!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6285.402937511096!2d-81.20210209718867!3d28.598566399956105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685cf279f551%3A0x2b3e6d8f9035f8ea!2sBusiness+Administration+II%2C+Orlando%2C+FL!3m2!1d28.600818399999998!2d-81.1987099!5e1!3m2!1sen!2sus!4v1564500026502!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "ENG1":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.44065778947!2d-81.2043940351853!3d28.600792782430325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500120459!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.492173951236!2d-81.20249388518538!3d28.599082532431048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500149366!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.69885891161!2d-81.19865389193534!3d28.60221824560744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500172305!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3618501512888!2d-81.20058118518527!3d28.603408882429342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500193947!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3581582819565!2d-81.20252608518534!3d28.60353143242923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500218911!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.454083439539!2d-81.20448243518534!3d28.600347082430538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500244203!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.487999146149!2d-81.20025793518538!3d28.599221132430895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685c9244d7eb%3A0xc75b5c120fc98433!2sUCF+Engineering+Building+I+(ENG1)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6014295!2d-81.1987442!5e1!3m2!1sen!2sus!4v1564500265553!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "ENG2":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.4219573500914!2d-81.2043718851853!3d28.601413582430034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500301950!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.482414637649!2d-81.20247173518537!3d28.599406532430876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500354161!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.6968292888769!2d-81.19840444193532!3d28.602352995607443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500373572!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1582.679331243239!2d-81.19872044193534!3d28.603514695607338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500397407!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.3480451067253!2d-81.20251343518527!3d28.60386713242906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500419039!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.419779423597!2d-81.20446028518533!3d28.601485882430083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500444884!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6330.974883966379!2d-81.20244662562993!3d28.59923962972364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685c9affd389%3A0xa46ed85409eff418!2sUCF+Engineering+Building+II+(ENG2)%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6021009!2d-81.1986999!5e1!3m2!1sen!2sus!4v1564500484745!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "PSY":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.85675279639!2d-81.21120521686474!3d28.602800209311138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564500683567!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.031508289129!2d-81.20506214735302!3d28.601050599729902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564500955643!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.862219223916!2d-81.2020792473529!3d28.60392249946786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564500980232!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.89605930438!2d-81.20052852090707!3d28.605111642159216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564501005435!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.8948021591864!2d-81.20253287090706!3d28.60515429215728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564501042857!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.848388165123!2d-81.2116535168647!3d28.602871159297962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564501070886!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.042486577102!2d-81.20233764735319!3d28.60086434974683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685ba7e92cf9%3A0x8a047e76ddbd3fcd!2sPsychology+Building%2C+Orlando%2C+FL!3m2!1d28.6046554!2d-81.1995065!5e1!3m2!1sen!2sus!4v1564501103402!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "BIO":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.4615763570514!2d-81.20417543518538!3d28.600098332430566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501192734!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.0956156062916!2d-81.2015012709072!3d28.598340742465357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501222175!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.013629428396!2d-81.19939272090714!3d28.60112269233954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501258045!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.974539790574!2d-81.19963972090714!3d28.60244899227959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501279980!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.9369125223575!2d-81.20419059735298!3d28.60265539958343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501303729!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.173085787741!2d-81.21080846686574!3d28.600116909809067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501325516!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.100566460019!2d-81.19956097090723!3d28.59817274247301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685ce00c6d73%3A0x1e95562bc7cfa066!2sUCF+Biological+Sciences+Building+(BIO)%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.6001846!2d-81.19850009999999!5e1!3m2!1sen!2sus!4v1564501348003!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "VAB":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.9965217433655!2d-81.20825524735308!3d28.601644149675696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501377551!5m2!1sen!2sus" });
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.087153535042!2d-81.20652589735319!3d28.60010654981609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501399621!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.816762731458!2d-81.20830221686464!3d28.603139409248175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501425778!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.687269517055!2d-81.20909446686424!3d28.604237759044352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501452496!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.9250100138347!2d-81.2045713209071!3d28.604129442203554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501483928!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.99238379104!2d-81.20923194735302!3d28.6017143496693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501504283!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.213950213545!2d-81.20843426686581!3d28.59977025987341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685eab51dc0d%3A0xd00e972354c27098!2sVisual+Arts+Building%2C+Orlando%2C+FL!3m2!1d28.6027946!2d-81.20316749999999!5e1!3m2!1sen!2sus!4v1564501524450!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "TA":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.0549026654053!2d-81.20695252090711!3d28.599722242402944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501549759!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.366352309331!2d-81.21180211686628!3d28.598477410113325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501590482!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.108496318633!2d-81.20888166686551!3d28.6006648097074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501618303!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.916978759706!2d-81.20969801686493!3d28.60228935940593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501640198!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.950573446268!2d-81.20719494735299!3d28.602423649604695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501660512!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.038936748139!2d-81.20704092090719!3d28.600263992378377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501686287!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.40537570911!2d-81.20901371686645!3d28.598146360174738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685e4492ceab%3A0x80b540c9e7675ec2!2sUCF+Teaching+Academy%2C+Andromeda+Loop+North%2C+Orlando%2C+FL!3m2!1d28.599373699999997!2d-81.2038719!5e1!3m2!1sen!2sus!4v1564501716550!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "NSC":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.4063321973626!2d-81.20607728518533!3d28.601932282429882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564501810378!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.0696711888595!2d-81.20652589735315!3d28.600403149789134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564501850927!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.816762731458!2d-81.20814481686463!3d28.603139409248175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564501991726!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.675833197049!2d-81.2087774168642!3d28.60433475902634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564502017482!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.91689258846!2d-81.2045713209071!3d28.60440484219112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564502040392!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.974803284494!2d-81.208890847353!3d28.602012599642105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564502061610!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.178985900888!2d-81.20880786686573!3d28.600066859818387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e768595c9ce73f%3A0xc8c9d21d65423247!2sUCF+Nicholson+School+of+Communication+and+Media+(NSC)%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.603945099999997!2d-81.2029043!5e1!3m2!1sen!2sus!4v1564502087565!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "HPA1":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.995087720554!2d-81.21037931686513!3d28.601626809528895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502137258!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.098894788326!2d-81.20411249735312!3d28.59990734983419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502158387!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.9285361301!2d-81.20165114735302!3d28.60279749957063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502177695!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.9295373485365!2d-81.19996232090712!3d28.603975842210566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502204878!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.837716733515!2d-81.20355814735287!3d28.60433814943005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502239700!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.995087720554!2d-81.21046771686522!3d28.601626809528895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502262356!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6330.945346754979!2d-81.20211282562998!3d28.59972992972272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685c5c8a72b9%3A0xc0170de291feebfc!2sUCF+College+of+Health+Professions+and+Sciences%2C+Pegasus+Drive%2C+Orlando%2C+FL!3m2!1d28.6030138!2d-81.1986503!5e1!3m2!1sen!2sus!4v1564502368146!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "HPA2":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.994020814354!2d-81.21037931686517!3d28.601635859527224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502401470!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.09836136454!2d-81.20411249735328!3d28.59991639983328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502424470!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.9641385963355!2d-81.19922072090714!3d28.60280189226361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502450370!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3096.9272077650603!2d-81.19971522084296!3d28.604051792206977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502471226!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.831948446776!2d-81.2035581473528!3d28.604435999421025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502504521!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.994020814354!2d-81.2104677168652!3d28.601635859527196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502528549!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.108263571005!2d-81.20210209735325!3d28.59974839984872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685b677d6329%3A0x9bcd341819faaba1!2sHPA+II+-+UCF+College+of+Health+Professions+and+Sciences%2C+Scorpius+Street%2C+Orlando%2C+FL!3m2!1d28.6032095!2d-81.19815609999999!5e1!3m2!1sen!2sus!4v1564502550522!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "CHEM":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.12451117033!2d-81.2113657668656!3d28.600528959732607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502582841!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.09778308154!2d-81.20184852090729!3d28.59826719246874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502610180!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.030503293596!2d-81.20214049735308!3d28.60106764972834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502632061!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.952324159285!2d-81.20238749735303!3d28.60239394960747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502653932!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.931548334655!2d-81.20455504735294!3d28.60274639957532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502678736!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.124511170334!2d-81.21145416686558!3d28.600528959732607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502704858!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.205193340107!2d-81.20242654735335!3d28.598103849998644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685c551fcb89%3A0x8fdc0994dde204ca!2sChemistry+Building%2C+Orlando%2C+FL!3m2!1d28.599840699999998!2d-81.1995984!5e1!3m2!1sen!2sus!4v1564502741095!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "TCH":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.02009080022!2d-81.20825524735311!3d28.60124429971215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503196089!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.110774479185!2d-81.2065258973532!3d28.599705799852593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503219025!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.900845112357!2d-81.20827266686486!3d28.60242620938055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503247692!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.726683283965!2d-81.2092790668644!3d28.603903459106366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503266413!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.869452303829!2d-81.20677599735286!3d28.60379979947912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503288341!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.005935255549!2d-81.20922774735308!3d28.601484449690325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503322757!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.267828319853!2d-81.20840471686594!3d28.59931320995822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e769f08a22073f%3A0x331d656c9219cba8!2sTrevor+Colbourn+Hall%2C+Aquarius+Agora+Drive%2C+Orlando%2C+FL!3m2!1d28.602126!2d-81.2031591!5e1!3m2!1sen!2sus!4v1564503342256!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
        break;
      case "EC":
      switch(garage)
      {
        case "Garage A":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3165.465911318524!2d-81.20723318512104!3d28.599951332430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685fa8c560f1%3A0x6a8e03adff282868!2sGarage+A%2C+Orlando%2C+FL!3m2!1d28.5999195!2d-81.20566649999999!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564503434493!5m2!1sen!2sus"});
          break;
        case "Garage B":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6194.183718992906!2d-81.20688269735338!3d28.598468199965495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e768676262bb93%3A0x34fd56cd12c081f7!2sGarage+B%2C+Orlando%2C+FL!3m2!1d28.596883599999998!2d-81.2003522!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564503457483!5m2!1sen!2sus"});
          break;
        case "Garage C":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.108496318633!2d-81.20903016686556!3d28.6006648097074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7684359016d01%3A0x334498c30265141b!2sParking+Garage+C%2C+Orlando%2C+FL!3m2!1d28.6022678!2d-81.1959187!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564505007490!5m2!1sen!2sus"});
          break;
        case "Garage D":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12387.874454627834!2d-81.20966276686484!3d28.602650059339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685b2e8587cf%3A0x25ebc6bfbc64bdb0!2sParking+Garage+D%2C+Orlando%2C+FL!3m2!1d28.6049285!2d-81.1971839!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564505034337!5m2!1sen!2sus"});
          break;
        case "Garage H":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6193.933590854121!2d-81.2073229473529!3d28.602711749578404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685bb392fa4b%3A0x7ce662dbb1f5b668!2sUCF+Parking+Garage+H+(PGH)%2C+Orlando%2C+FL!3m2!1d28.6050033!2d-81.2012376!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564505097417!5m2!1sen!2sus"});
          break;
        case "Garage I":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3097.0306744430095!2d-81.20731622090717!3d28.60054434236571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7685ee24a8957%3A0x7e4783b863f728f!2sGarage+I%2C+Gemini+Boulevard+West%2C+Orlando%2C+FL!3m2!1d28.601144899999998!2d-81.2048988!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564505128105!5m2!1sen!2sus"});
          break;
        case "Garage Libra":
          this.setState({src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12388.40537570911!2d-81.20908251686645!3d28.598146360174738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x88e7686807ac5dc7%3A0xf11878701d539c4c!2sLibra+Garage%2C+Libra+Drive%2C+Orlando%2C+FL!3m2!1d28.596151499999998!2d-81.196636!4m5!1s0x88e7685ef66e041f%3A0xb4a018312c2d868a!2sEducation+Complex+and+Gym%2C+Orlando%2C+FL!3m2!1d28.5999499!2d-81.20442249999999!5e1!3m2!1sen!2sus!4v1564505162035!5m2!1sen!2sus"});
          break;
        default:
          break;
      }
      break;
      default:
        break;
    }
  }

  garageChecker(garage)
  {
    if(garage==="Garage A")
    {

    }
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
