import React from 'react';
import { Link } from 'react-router-dom';
import LandAbout from '../components/landinghome/landabout';

const AboutUs = props => {
  return (
    <>
      <div className="aboutsteiner text-center">
        <div className="  ">
          <h2 className="aboutsteinertitulo">About Us<br /></h2>
          <ul className="breadcrumb" id="breadcrumb">
            <li><Link className="text-white" href="/">Home / </Link></li>
            <li><p className="text-warning"> About Us</p></li>
          </ul>
        </div>
        {/* <div className="mustache">
              <img src="/images/mustache.jpg" />
								</div> */}
      </div>
      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-md-offset-2 text-center">
            <div class="message-box">
              <h4 className="message-box-h4">Unique Story</h4>
              <h2 className="message-box-h2">40 Years Of Experience</h2>
              <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
              <p className="message-box-p"> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
              <a href="#services" className="btn btn-dark" id="aboutus-button-learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <LandAbout />
      <hr className="hr1 my-5 col-md-10" />
    </>
  );
}

export default AboutUs;