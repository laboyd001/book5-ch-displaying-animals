import React, {Component} from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
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

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI
  }

  render() {
    return (

      // <div>
      //    <h1>Student Kennels</h1>
      //   <EmployeeList />
      //   <LocationList />
      // </div>

      <article className = "kennel" >
      <LocationList locations = {this.state.locations}/> 
      <EmployeeList employees = {this.state.employees}/> 
      </article>
    )
  }
}