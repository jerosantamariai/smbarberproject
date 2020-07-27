import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashAppointView = props => {
    const { store, actions } = useContext(Context)
    const { appoints } = store;
    const appointurl = props.match.params.app_email;
    const updateAppointment = (e, appointment) => {
        e.preventDefault();
        actions.setAppoint(e, appointment)
    }
    return (
        <>
            <div className="blogteiner">
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
                <div className="card-group">
                    <div className="row">
                        {
                            !!store.appoints ?
                                store.appoints.map((appoint, i) => {
                                    if (JSON.stringify(appoint.app_email) === JSON.stringify(appointurl)) {
                                        // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white mb-3 mx-auto d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-md-12 py-4">
                                                    <h1>Appointment {appoint.id}</h1>
                                                    <p className="card-title">Name: {appoint.app_name}</p>
                                                    <p className="card-text">Last Name: {appoint.app_lastname}</p>
                                                    <p className="card-text">Email: {appoint.app_email}</p>
                                                    <p className="card-text">Phone: {appoint.app_phone}</p>
                                                    <p className="card-text">During: {appoint.app_time}</p>
                                                    <p className="card-text">Comments: {appoint.app_message}</p>
                                                    <hr className="hr1" />
                                                    <p className="card-text">Date of Incorporation: {appoint.app_createdate}</p>
                                                    <hr className="hr1" />
                                                    {
                                                        appoint.app_status === true ? (
                                                            <button className="btn noDecoration dashitem" onClick={e => updateAppointment(e, appoint)}>Status: Ready</button>
                                                        ):(
                                                            <button className="btn noDecoration dashitem" onClick={e => updateAppointment(e, appoint)}>Status: Pending</button>
                                                        )
                                                    }
                                                    <hr className="hr1" />
                                                    <Link to="/dashboard/dashadminappoint/" className="btn noDecoration dashitem">Back</Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="mx-auto" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashAppointView;