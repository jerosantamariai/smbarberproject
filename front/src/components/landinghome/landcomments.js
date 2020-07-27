import React from 'react';
import testi_01 from '../../images/testi_01.png';
import testi_02 from '../../images/testi_02.png';

const LandComments = props => {
  return (
    <>
      <div className="testiwrapper">
        <div id="testimonials" className="parallax">
          <div className="container-fluid">
            <div className="section-title row text-center d-flex justify-content-center">
              <div className="col-md-8 col-md-offset-2">
                <small>LET'S SEE OUR TESTIMONIALS</small>
                <h3>HAPPY TESTIMONIALS</h3>
                <hr className="grd1" />
                <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula
                                enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="testi d-flex">
              <div className="testimonial clearfix">
                <div className="desc mr-3">
                  <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                  <p className="lead">They have got my project on time with the competition with a sed
                                            highly skilled, and experienced & professional team.</p>
                </div>
                <div className="testi-meta d-flex justify-content-end">
                  <h4>James Fernando <br /><small>- Manager of Racer</small></h4>
                  <img src={testi_01} alt="testi01" />
                </div>
              </div>
              <div className="testimonial clearfix">
                <div className="desc">
                  <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                  <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure
                                            and praising pain was born and I will give you completed.</p>
                </div>
                <div className="testi-meta d-flex justify-content-end">
                  <h4>Jacques Philips <br /><small>- Designer</small></h4>
                  <img src={testi_02} alt="testi02" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandComments;