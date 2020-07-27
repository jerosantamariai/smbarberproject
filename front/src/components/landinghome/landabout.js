import React from 'react';
import { Link } from 'react-router-dom';
import barber01 from '../../images/barber_01.jpg';
import barber02 from '../../images/barber_02.jpg';
import barber03 from '../../images/barber_03.jpg';

const LandAbout = props => {
  return (
    <>
      <hr className="hr1 my-5 col-md-10" />
      <div class="row">
        <div class="col-md-12">
          <div class="about-tab">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item mx-2" role="presentation">
                <a href="#tab_a" className="nav-link active btn btn-light specialbtn" id="pills-mission-tab" data-toggle="pill" to="#pills-mission" role="tab" aria-controls="pills-mission" aria-selected="true">Our Mission</a>
              </li>
              <li className="nav-item" role="presentation">
                <a href="#tab_b" className="nav-link btn btn-light specialbtn" data-toggle="tab" aria-selected="false">Why Us?</a>
              </li>
              <li className="nav-item" role="presentation">
                <a href="#tab_c" className="nav-link btn btn-light specialbtn" data-toggle="tab" aria-selected="false">About Us</a>
              </li>
            </ul>
            <div class="tab-content  col-10 mx-auto text-center">
              <div className="tab-pane fade show active" id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor mi, eget mattis velit sagittis id. Duis ornare mauris eu eros interdum, vitae finibus arcu ultricies. Donec vitae felis eleifend, dignissim erat a, pretium diam. Donec eu massa odio. Suspendisse et ornare lacus, pharetra imperdiet ligula.</p>
                <p>Vestibulum ac quam id lorem semper condimentum. Nulla vel ligula turpis. Nullam luctus, mi nec rhoncus gravida, tortor est semper purus, a feugiat sapien odio non urna. Fusce pellentesque neque ut nisi rhoncus imperdiet. Sed eu purus vel turpis consectetur convallis. Donec a dolor tellus. Phasellus dignissim erat nec ipsum condimentum sollicitudin. </p>
              </div>
              <div class="tab-pane fade" id="tab_b">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <ul className="no-bullets">
                  <li><i class="far fa-circle" aria-hidden="true"></i> User Experince</li>
                  <li><i class="far fa-circle" aria-hidden="true"></i> Full Devices</li>
                  <li><i class="far fa-circle" aria-hidden="true"></i> Awesome Design</li>
                  <li><i class="far fa-circle" aria-hidden="true"></i> Visual Impact</li>
                  <li><i class="far fa-circle" aria-hidden="true"></i> 100% Sincronized</li>
                  <li><i class="far fa-circle" aria-hidden="true"></i> Custom Support</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="tab_c">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr1 my-5 col-md-10" />
      <div className="row text-center mx-auto">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="service-widget text-justify">
            <div className="post-media wow fadeIn">
              <Link to="images/barber_01.jpg" data-rel="prettyPhoto[gal]"
                className="hoverbutton global-radius"><i className="flaticon-unlink"></i></Link>
              <img src={barber01} alt="" className="img-responsive img-rounded" />
            </div>
            <h4 className="titulo-imagen-about">Show us Your Graft Style</h4>
            <p className="p-imagen-about">Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi
                                    est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="service-widget text-justify">
            <div className="post-media wow fadeIn">
              <Link to="images/barber_02.jpg" data-rel="prettyPhoto[gal]"
                className="hoverbutton global-radius"><i className="flaticon-unlink"></i></Link>
              <img src={barber02} alt="" className="img-responsive img-rounded" />
            </div>
            <h4 className="titulo-imagen-about">Outstanding Barber Shop</h4>
            <p className="p-imagen-about">Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed
                                    leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="service-widget text-justify">
            <div className="post-media wow fadeIn">
              <Link to="images/barber_03.jpg" data-rel="prettyPhoto[gal]"
                className="hoverbutton global-radius"><i className="flaticon-unlink"></i></Link>
              <img src={barber03} alt="" className="img-responsive img-rounded" />
            </div>
            <h4 className="titulo-imagen-about">The Barber Materials</h4>
            <p className="p-imagen-about">Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa
                                    sodales aliquam at eget quam. Integer ultricies et magna quis posuere.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandAbout;