import React, { Component } from 'react'
import './tour.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default class tour extends Component {
  render() {
    // console.log(this.props);
    const {id,city,img,name,info} = this.props.info;
    const {removeTour} = this.props.removeTour;
    return (
      <article className='tour'>
        <div className="img-container">
          <img src={img} alt={city} />
          <span>
            <FontAwesomeIcon icon={icon({name:'rectangle-xmark', style:'regular' })} />
            {/* <FontAwesomeIcon icon={regular("rectangle-xmark")} /> */}
          </span>
        </div>
        <div className="tour-info">
          <h3 className='city'>{city}</h3>
          <h4 className='tour-name'>{name}</h4>
          <h5>
            info {" "}
            <span>
              <FontAwesomeIcon icon={icon({name:'circle-down', style:'regular' })} />
            </span>
          </h5>
          <p>{info}</p>

        </div>
        
      </article>
    )
  }
}
