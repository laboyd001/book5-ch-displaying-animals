import React, {Component} from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"




export default class Kennel extends Component {

  employeesFromAPI = [{
      id: 1,
      name: "Jessica Younker"
    },
    {
      id: 2,
      name: "Jordan Nelson"
    },
    {
      id: 3,
      name: "Zoe LeBlanc"
    },
    {
      id: 4,
      name: "Blaise Roberts"
    }
  ]

  // This will eventually get pulled from the API
  locationsFromAPI = [{
      id: 1,
      name: "Nashville North",
      address: "500 Circle Way"
    },
    {
      id: 2,
      name: "Nashville South",
      address: "10101 Binary Court"
    }
  ]

  animalsFromAPI = [{
    id: 1,
    name: "cat",
  },
  {
    id: 2,
    name: "dog",
  },
  {
    id: 3,
    name: "frog",
  },
  {
    id: 4,
    name: "fish",
  }
]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className = "kennel" >
      <LocationList locations = {this.state.locations}/> 
      <EmployeeList employees = {this.state.employees}/> 
      <AnimalList animals = {this.state.animals}/> 
      </article>
    )
  }
}