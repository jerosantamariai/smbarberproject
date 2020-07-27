import React from 'react';
import barber_team_01 from '../../images/barber_team_01.jpg';
import barber_team_02 from '../../images/barber_team_02.jpg';
import barber_team_03 from '../../images/barber_team_03.jpg';

const LandBarbers = props => {
  return (
    <>
      <div id="barbers" className="barbersection pt-5">
        <div className="container-fluid">
          <div className="section-title row text-center d-flex justify-content-center">
            <div className="col-md-8 col-md-offset-2">
              <small>MEET OUR BABRER TEAM</small>
              <h1><strong>OUR BARBERS</strong> </h1>
              <hr className="grd1" />
              <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula
                                enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            </div>
          </div>
          <div className="row dev-list text-center barberlist">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 fadeIn">
              <div className="widget clearfix">
                <div className="hover-br">
                  <img src={barber_team_01} alt="" className="img-responsive" />
                  <div className="socialhover card-img-overlay">
                    <div className="footer-social">
                      <a href="http://www.facebook.com" className="btn grd1"><i className="fab fa-facebook"></i></a>
                      <a href="http://www.github.com" className="btn grd1"><i className="fab fa-github"></i></a>
                      <a href="http://www.twitter.com" className="btn grd1"><i className="fab fa-twitter"></i></a>
                      <a href="http://www.linkedin.com" className="btn grd1"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="widget-title">
                  <h3>Soren Bo Bostian</h3>
                  <small>The Founder</small>
                </div>
                <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of The
                                    Barber Shop Company.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 fadeIn">
              <div className="widget clearfix">
                <div className="hover-br">
                  <img src={barber_team_03} alt="" className="img-responsive" />
                  <div className="socialhover card-img-overlay">
                    <div className="footer-social">
                      <a href="http://www.facebook.com" className="btn grd1"><i className="fab fa-facebook"></i></a>
                      <a href="http://www.github.com" className="btn grd1"><i className="fab fa-github"></i></a>
                      <a href="http://www.twitter.com" className="btn grd1"><i className="fab fa-twitter"></i></a>
                      <a href="http://www.linkedin.com" className="btn grd1"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="widget-title">
                  <h3>Bryan Saftler</h3>
                  <small>The Barber</small>
                </div>
                <p>Hello guys, I am Soren from Sirbistana. I am senior art director and barber of the
                                    Barber Shop Market.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 fadeIn">
              <div className="widget clearfix">
                <div className="hover-br">
                  <img src={barber_team_02} alt="" className="img-responsive" />
                  <div className="socialhover card-img-overlay">
                    <div className="footer-social">
                      <a href="http://www.facebook.com" className="btn grd1"><i className="fab fa-facebook"></i></a>
                      <a href="http://www.github.com" className="btn grd1"><i className="fab fa-github"></i></a>
                      <a href="http://www.twitter.com" className="btn grd1"><i className="fab fa-twitter"></i></a>
                      <a href="http://www.linkedin.com" className="btn grd1"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="widget-title">
                  <h3>Matthew Bayliss</h3>
                  <small>The Barber</small>
                </div>
                <p>Hello guys, I am Soren from Sirbistana. I am senior art director and barber of the
                                    Barber Shop Website.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandBarbers;