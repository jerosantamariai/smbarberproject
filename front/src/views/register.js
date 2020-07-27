import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Register = props => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="registeiner col-md-12">
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
        <div className="row d-flex justify-content-center text-center py-3">
          <div className="col-md-12">
            <h1 id="title">REGISTER FORM</h1>
            <p id="description"><i>Thank you for join our community!</i></p>
          </div>
        </div>
        <div className="row d-flex justify-content-center py-3" id="survey-form">
          <form onSubmit={e => actions.register(e, props.history)}>
            <div className="col-md-12">
              <div className="form-group py-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-md-12">
                  <input type="email" className="form-control" id="email" placeholder="Enter your Email" name="email" onChange={actions.handleChange} value={store.email} />
                  <div className="invalid-feedback">
                    Please choose a correct email.
                            </div>
                </div>
              </div>
              <div className="form-group py-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-md-12">
                  <input type="password" className="form-control" id="password" placeholder="Enter you password..." name="password" onChange={actions.handleChange} value={store.password} />
                </div>
              </div>
              <div className="form-group py-3 ">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-success btn-md btn-block">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;