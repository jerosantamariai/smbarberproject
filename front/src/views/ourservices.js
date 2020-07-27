import React from 'react';
import { Link } from 'react-router-dom';

const OurServices = props => {
  return (
    <>
       <div className="servisteiner text-center">
        <div className="  ">
          <h2 className="aboutsteinertitulo">Our Services<br /></h2>
          <ul className="breadcrumb" id="breadcrumb">
            <li><Link className="text-white" href="/">Home / </Link></li>
            <li><p className="text-warning"> Our Services</p></li>
          </ul>
        </div>
        {/* <div className="mustache">
              <img src="/images/mustache.jpg" />
								</div> */}
      </div>
      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
    </>
  );
}

export default OurServices;