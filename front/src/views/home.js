import React, { useContext } from 'react';
import LandAppoint from '../components/landinghome/landappoint';
import LandAbout from '../components/landinghome/landabout';
import LandBarbers from '../components/landinghome/landbarbers';
import LandComments from '../components/landinghome/landcomments';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Home = props => {
  const { store, actions } = useContext(Context)
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {
            !!store.success && (
              <div className="row fixed-top text-center">
                <div className="col-md-12">
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>CONGRATULATIONS!</strong> {store.success.success}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          }
          <LandAppoint />
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="message-box">
            <h4>About</h4>
            <h1><strong>Welcome to SMBarber</strong></h1>
            <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                                    vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus
            faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum
            neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu
                                    bibendum risus. Phasellus et congue justo. </p>
            <Link to="/aboutus" data-scroll
              className="btn btn-dark btn-radius btn-brd grd1 effect-1 specialbtn">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandBarbers />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandComments />
        </div>
      </div>
    </>
  );
}

export default Home;