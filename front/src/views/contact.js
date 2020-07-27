import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Contact = props => {
  const { store, actions } = useContext(Context)
  return (
    <>
      <div className="contactsteiner">
        <div className="col-md-10 offset-md-1">
          <div className="row listwrapper">
            <div className="col-md-8 my-3 mx-auto text-center">
              <h1>Contact!!!</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white" id="breadcrumb">
                  <li className="breadcrumb-item"><a to="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
              <form onSubmit={e => actions.contact(e, props.history)}>
                <div className="form-group">
                  <label htmlFor="cont_name">What is your name?</label>
                  <input type="text" className="form-control text-center" id="cont_name" name="cont_name" onChange={actions.handleChange} value={store.cont_name} />
                </div>
                <div className="form-group">
                  <label htmlFor="cont_lastname">What is your last name?</label>
                  <input type="text" className="form-control text-center" id="cont_lastname" name="cont_lastname" onChange={actions.handleChange} value={store.cont_lastname} />
                </div>
                <div className="form-group">
                  <label htmlFor="cont_email">What is your email?</label>
                  <input type="email" className="form-control text-center" id="cont_email" name="cont_email" onChange={actions.handleChange} value={store.cont_email} />
                </div>
                <div className="form-group">
                  <label htmlFor="cont_phone">What is your phone number?</label>
                  <input type="text" className="form-control text-center" id="cont_phone" name="cont_phone" onChange={actions.handleChange} value={store.cont_phone} />
                  <small>***Please follow the number format!***</small>
                </div>
                <div className="form-group">
                  <label htmlFor="cont_message">What do you want to tell us?</label>
                  <input type="text" className="form-control text-center" id="cont_message" name="cont_message" onChange={actions.handleChange} value={store.cont_message} />
                </div>
                <button type="submit" className="btn btn-block dashitem text-white my-5">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;