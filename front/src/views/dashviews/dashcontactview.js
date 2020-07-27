import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashContactView = props => {
    const { store, actions } = useContext(Context)
    const conturl = props.match.params.cont_email;
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
                            !!store.contact ?
                                store.contact.map((contac, i) => {
                                    if (JSON.stringify(contac.cont_email) === JSON.stringify(conturl)) {
                                        return (
                                            <div className="row card-group text-white mb-3 d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-md-12 py-4">
                                                    <h1>Profile Name</h1>
                                                    <p className="card-title">Name: {contac.cont_name}</p>
                                                    <p className="card-text">Last Name: {contac.cont_lastname}</p>
                                                    <p className="card-text">Email: {contac.cont_email}</p>
                                                    <p className="card-text">Phone: {contac.cont_phone}</p>
                                                    <p className="card-text">Date of Incorporation: {contac.createdate}</p>
                                                    <p className="card-text">Message: {contac.cont_message}</p>
                                                    <hr className="hr1" />
                                                    {
                                                        (
                                                            <>
                                                                <button type="button" 
                                                                className="btn btn-block dashitem text-white"
                                                                id="deleteid"
                                                                name="deleteid"
                                                                value={store.deleteid}
                                                                onClick={e => actions.deleteContac(contac.id, props.history)}>
                                                                    Delete<i className="fas my-auto p-3 fa-trash"></i>
                                                                </button>
                                                            </>
                                                        )
                                                    }
                                                    <hr className="hr1" />
                                                    <Link to={"/dashboard/dashcontacts"} className="btn btn-secondary d-flex justify-content-center blogitem text-white">Back</Link>
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
export default DashContactView;