import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import LandComments from '../components/landinghome/landcomments';

const Appointment = props => {
  const { store, actions } = useContext(Context)
  return (
    <>
      <div className="appointsteiner text-center">
        {
          !!store.errors && (
            <div className="row fixed-top text-center">
              <div className="col-md-12">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>ERROR!</strong> {store.errors.msg}
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          )
        }
        <div>
          <h2 className="aboutsteinertitulo">Appointment<br /></h2>
          <ul className="breadcrumb" id="breadcrumb">
            <li><Link className="text-white" href="/">Home / </Link></li>
            <li><p className="text-warning"> Appointment</p></li>
          </ul>
        </div>
      </div>
      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
      <div id="barbers" className="barbersection pt-5">
        <div className="container-fluid"></div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="section-title row text-center d-flex justify-content-center">
            <div className="col-md-8 col-md-offset-2">
              <small>LET'S MAKE AN APPOINTMENT FOR YOUR LIFE</small>
              <h1><strong>Book Now</strong> </h1>
              <hr className="grd1" />
              <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula
                                enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            </div>
          </div>
        </div>
      </div>
      {
        store.currentUser ? (
          <div className="container my-5">
            <div className="row appointment-cont ">
              <div className="col-md-6">
                <div className="appointment-left">
                  <h2>Opening Time</h2>
                  <div className="appointment-time">
                    <ul>
                      <li>
                        <span>Monday </span><span id="span-1"></span> <span>9am-6pm</span>
                      </li>
                      <li>
                        <span>Tuesday </span> <span id="span-2"> </span> <span>9am-6pm</span>
                      </li>
                      <li>
                        <span>Wednesday </span> <span id="span-3"></span>  <span>9am-6pm</span>
                      </li>
                      <li>
                        <span>Thursday </span> <span id="span-4"></span>  <span>9am-6pm</span>
                      </li>
                      <li>
                        <span>Friday  </span> <span id="span-5"></span>  <span>9am-6pm</span>
                      </li>
                      <li>
                        <span>Saturday  </span> <span id="span-6"></span> <span>10am-4pm</span>
                      </li>
                      <li>
                        <span>Sunday  </span> <span id="span-7"></span>  <span>CLOSED</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6" id="contactform">
                <form id="contactform-form" className="row" onSubmit={e => actions.loadAppointment(e, props.history)}>
                  <div className=" col-md-6 col-xs-6">
                    <input type="text" id="app_name" className="form-control" placeholder="First Name" name="app_name" onChange={actions.handleChange} value={store.app_name} />
                  </div>
                  <div className="col-md-6 col-xs-6">
                    <input type="text" id="app_lastname" className="form-control" placeholder="Last Name" name="app_lastname" onChange={actions.handleChange} value={store.app_lastname} />
                  </div>
                  <div className="mt-2 col-md-12 col-xs-12">
                    <input type="email" id="app_email" className="form-control" placeholder="Your Email" name="app_email" onChange={actions.handleChange} value={store.app_email} />
                  </div>
                  <div className="mt-2 col-md-12 col-xs-12">
                    <input type="text" id="app_phone" className="form-control" placeholder="Your Phone" name="app_phone" onChange={actions.handleChange} value={store.app_phone} />
                  </div>
                  <div className="mt-2 col-md-12 col-xs-12">
                    <select id="app_time" class="form-control" name="app_time" onChange={actions.handleChange} value={store.app_time}>
                      <option selected>Select time</option>
                      <option>Weekdays</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                  <div className="mt-2 col-md-12 col-xs-12">
                    <textarea className="form-control" id="app_message" rows="6" placeholder="Give us more details.." name="app_message" onChange={actions.handleChange} value={store.app_message}></textarea>
                  </div>
                  <div className="mt-2 text-center mx-auto">
                    <button type="submit" id="submit" className="btn dashitem text-white btn-block">Get Appointment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
            <div className="my-5 text-center">
              <h1>You need to be registered to make an appointment.</h1>
              <h3>If you don't have an acount please click <Link to="/register">HERE</Link>,</h3>
              <h5>But if you have one, please click <Link to="login">HERE</Link> for Sign In.</h5>
            </div>
          )
      }
      <hr className="hr1 my-5 col-md-10" />
      <LandComments />
    </>
  );
}
export default Appointment;