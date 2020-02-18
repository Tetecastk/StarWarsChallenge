import React, { Component } from "react";
import axios from "axios";
import ListPlanets from './ListPlanets';

class Planets extends Component {

  constructor(props){
    super(props);
    this.state = {planets: []}

    this.getPlanets = this.getPlanets.bind(this);
  };

  getPlanets(){
    return axios.get("https://swapi.co/api/planets").then(res => {
      const planets = res.data.results;
      const keys = Object.keys(planets);
      // console.log(keys)
      this.setState({
        planets: res.data.results,
        keys: keys
      });
    });
  }

  componentDidMount() {
    this.getPlanets();
  }

  render() {
    const { planets } = this.state;
    console.log(planets);
    return (
      <div className="container">
        <ListPlanets planets={planets} />
      </div>
    );
  }

   // ######################################################################################3

   /* constructor(props){
      super(props)
      this.state = {
        planet:{
          name: '', rotation_period: '', orbital_period: '', diameter:'',
          climate:'', gravity:'', terrain: '', population: '', films: []
        }
      }
    }
  
    getPlanetData = () => {
      let idPlanet = Math.floor(Math.random() * 61 + 1);
      this.setState({loading: true})
      planets.getPlanet(idPlanet).then(planet => {
        this.setState({
          planet: planet.data
        })
      })
    };

    componentDidMount() {
        this.getPlanetData()
    }

  render() {

  return ( 
    <div className="plannet">
      <div className="planet-card">
        <div className="toph"><h1>PLANET</h1></div>
          <h1>{this.state.planet.name}</h1>
          <div className="details">
            <ul>
              <li><span>CLIMATE</span> <span>{this.state.planet.climate}</span></li>
              <li><span>GRAVITY</span> <span>{this.state.planet.gravity}</span></li>
              <li><span>POPULATION</span> <span>{this.state.planet.population}</span> </li>
              <li><span>TERRAIN</span> <span>{this.state.planet.terrain}</span></li>
              <li><span>DIAMETER</span> <span>{this.state.planet.diameter}</span></li>
            </ul>
          </div>
          <div className="films-featured">FEATURED IN {this.state.planet.films.length} FILMS</div>
      </div>
      <input className="start-btn" type="button" value="NEXT" onClick={this.getPlanetData} />
  </div>
      );
    } */
  }
  
  export default Planets;