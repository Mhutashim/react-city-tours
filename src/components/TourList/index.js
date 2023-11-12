// there are some error due to the naming of index instead of TourList 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'; 



import React, { Component } from 'react';
import './tourlist.scss'; // scss
import Tour from '../tour'; // Tour file is directed to Tour.js file via package.json
import {tourData} from '../../tourData';

export default class TourList extends Component {
  state = {
    tours : tourData
  }

  removeTour = id => {
    console.log(id);
  }

  
  render() {
    // console.log(this.state.tourdata);
    const {tours} = this.state;
    
    return (
      <section className='tourlist'>
        <h1>Hello from TourList</h1>
        {tours.map((tour)=>(<Tour key={tour.id} info={tour} removeTour={this.removeTour}></Tour>))}
      </section>
    );
  }
}
