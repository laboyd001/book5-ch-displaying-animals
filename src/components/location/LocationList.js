import React, {Component} from 'react'

export default class LocationList extends Component {
  render() {
    return (
      // <article>
      //           <h1>Location List</h1>
                
      //             <h4>Nashville North</h4>
      //             <p>123 main st</p>
                
                
      //             <h4>Nashville South</h4>
      //             <p>456 church st</p>
                
      // </article>
      <section className="locations">
      <h2>Location List</h2>
        {this.props.locations.map(location =>
            <div key={location.id}>
               <p> Name: {location.name}</p>
               <p> Address: {location.address} </p>
                <br></br>
            </div>
         )
        }
      </section>
    )
  }
}

