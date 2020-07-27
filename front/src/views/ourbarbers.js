import React from 'react';
import { Link } from 'react-router-dom';
import LandBarbers from '../components/landinghome/landbarbers';

const OurBarbers = props => {
  return (
    <>
      <div className="barbersteiner">
        <div className="  ">
          <h2 className="aboutsteinertitulo text-center">Our Barbers<br /></h2>
          <ul className="breadcrumb" id="breadcrumb">
            <li><Link className="text-white" href="/">Home / </Link></li>
            <li><p className="text-warning"> Our Barbers</p></li>
          </ul>
        </div>
        {/* <div className="mustache">
              <img src="/images/mustache.jpg" />
								</div> */}
      </div>
      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
      <LandBarbers />
    </>
  );
}

export default OurBarbers;