import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashAdminAppoint = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="appointsteiner">
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
                <Link to="/dashboard" className="btn col-md-6 offset-md-3 col-xs-12 dashitem noDecoration mb-4">Go Back</Link>
                <div className="col-md-12 justify-content-center">
                    {/* <h3>Appointment Information Nº {store.appid}</h3>
                    <form onSubmit={e => {
                        e.preventDefault();
                        actions.loadBlog(e, props.history)
                    }}>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_name">Name</label>
                            <input className="form-control text-center rows-4" id="app_name" name="app_name" placeholder="" onChange={actions.handleChange} value={store.app_name} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_lastname">Last Name</label>
                            <input className="form-control text-center rows-12" id="app_lastname" name="app_lastname" placeholder="" onChange={actions.handleChange} value={store.app_lastname} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_email">Email</label>
                            <input className="form-control text-center rows-12" id="app_email" name="app_email" placeholder="" onChange={actions.handleChange} value={store.app_email} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_phone">Phone</label>
                            <input className="form-control text-center rows-12" id="app_phone" name="app_phone" placeholder="" onChange={actions.handleChange} value={store.app_phone} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_time">During</label>
                            <input className="form-control text-center rows-12" id="app_time" name="app_time" placeholder="" onChange={actions.handleChange} value={store.app_time} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="app_status">Status (0: TO DO / 1: Ready)</label>
                            <input className="form-control text-center rows-12" id="app_status" name="app_status" placeholder="" onChange={actions.handleChange} value={store.app_status} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="app_message">Message</label>
                            <textarea className="form-control text-center rows-12" id="app_message" name="app_message" placeholder="" onChange={actions.handleChange} value={store.app_message} />
                        </div>
                        <button type="btn" className="btn btn-dark dashitem text-white btn-block" onClick={(e, history) => actions.setAppoint(e, props.history)}>Save</button>
                    </form> */}
                    <h2>Appointment: To Do</h2>
                    <div className="list-group" id="scrollablecorps">
                        <ul>
                            {
                                !!store.appoints ? (
                                    store.appoints.map((appoint, i) => {
                                        return (
                                            <div className="d-flex dashitem text-white">
                                                {
                                                    appoint.app_status == 0 && (
                                                        <>
                                                            <Link
                                                                to={`/dashboard/dashadminappoint/${appoint.app_email}`}
                                                                key={i}
                                                                className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white"
                                                                onClick={() => actions.getCurrentApp(appoint.id, appoint.app_name, appoint.app_lastname, appoint.app_email, appoint.app_phone, appoint.app_time, appoint.app_status, appoint.app_message)}
                                                            >
                                                                {appoint.id} - {appoint.app_name} {appoint.app_lastname} - {appoint.app_email}
                                                            </Link>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        )
                                    }))
                                    : (
                                        <div className="content-center" id="undefined">
                                            <div className="spinner-grow text-light" role="status">
                                            </div>
                                        </div>
                                    )
                            }
                        </ul>
                    </div>
                </div>
                <hr className="hr1" />
                <div className="col-md-12">
                    <h2>Appointment: Ready</h2>
                    <div className="list-group" id="scrollablecorps">
                        <ul>
                            {
                                !!store.appoints ? (
                                    store.appoints.map((appoint, i) => {
                                        return (
                                            <div className="d-flex dashitem text-white">
                                                {
                                                    appoint.app_status == 1 && (
                                                        <>
                                                            <Link
                                                                to={`/dashboard/dashadminappoint/${appoint.app_email}`}
                                                                key={i}
                                                                className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white">
                                                                {appoint.id} - {appoint.app_name} {appoint.app_lastname} - {appoint.app_email}
                                                            </Link>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        )
                                    }))
                                    : (
                                        <div className="content-center" id="undefined">
                                            <div className="spinner-grow text-light" role="status">
                                            </div>
                                        </div>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashAdminAppoint;