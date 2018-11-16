import React, {Component} from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      // <article>
      //           <h1>Employee List</h1>
      //           <section>Jessica Younker</section>
      //           <section>Jordan Nelson</section>
      //           <section>Zoe LeBlanc</section>
      //           <section>Blaise Roberts</section>
      // </article>

      <section className="employees">
      <h2>Employee List</h2>
        {this.props.employees.map(employee =>
            <div key={employee.id}>
               <li> {employee.name} </li>
            </div>
         )
        }
      </section>
    )
  }
}


