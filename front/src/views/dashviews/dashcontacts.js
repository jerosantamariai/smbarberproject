import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashContacts = props => {
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
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="my-5">Current Active Contact Messages</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.contact ?
                                        store.contact.map((contac, i) => {
                                            return (
                                                <div className="d-flex">
                                                    {
                                                        (
                                                            <>
                                                                <Link
                                                                    to={"/dashboard/dashcontacts/" + contac.cont_email}
                                                                    key={i} 
                                                                    onClick={() => actions.getCurrentContact(contac.id)}
                                                                    className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white">
                                                                    {contac.id} - {contac.cont_email}
                                                                </Link>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
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
            </div>
        </>
    )
}

export default DashContacts;