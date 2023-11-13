import React, { Component } from 'react'
import './tour.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default class tour extends Component {
  state = {
    showinfo: false
  }

  toggleInfo = id =>{
    // console.log(id);
    this.setState({
      showinfo: !this.state.showinfo
    })
  }

  render() {
    // console.log(this.props);
    const {id,city,img,name,info} = this.props.info;
    const removeTour = this.props.removeTour;

    // console.log(removeTour);

    return (
      <article className='tour'>
        <div className="img-container">
          <img src={img} alt={city} />
          
            <span className='close-btn' onClick={()=>(removeTour(id))}>
              <FontAwesomeIcon icon={icon({name:'rectangle-xmark', style:'regular' })} />
              {/* <FontAwesomeIcon icon={regular("rectangle-xmark")} /> */}
            </span>
          
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          {/* Toggle info */}
          <h5>
            info {" "}
            
              <span onClick={()=>(this.toggleInfo(id))}>
                <FontAwesomeIcon icon={icon({name:'circle-down', style:'regular' })} />
              </span>

          </h5>
          {/* conditional render using  && operator */}
          {this.state.showinfo && (<p>{info}</p>)}
          {/* <p>{info}</p> */}

        </div>
        
      </article>
    )
  }
}
