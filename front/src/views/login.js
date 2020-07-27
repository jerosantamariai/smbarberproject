import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const LogIn = props => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="loginsteiner">
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
        <div className="row d-flex justify-content-center text-center my-2">
          <div className="col-md-8">
            <h1>Welcome Back!</h1>
            <p>If you want an appointment, you need to access to your account. If don't have an account click <strong><Link className="noDecoration" to="/register">here!</Link></strong></p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-8">
            <form onSubmit={e => actions.login(e, props.history)}>
              <div className="form-group mb-4">
                <label htmlFor="loginEmail">Email address</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" name="email" onChange={actions.handleChange} value={store.email} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" name="password" onChange={actions.handleChange} value={store.password} />
              </div>
              <button type="submit" className="btn btn-primary mb-4 btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;