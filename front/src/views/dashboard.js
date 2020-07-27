import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Dashboard = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashteiner">
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper text-center">
                        {
                            !!store.currentUser && (
                                <div className="col-md-12 my-3 mx-auto">
                                    <h1>Hi <strong>{store.currentUser.users.email}</strong>!</h1>
                                    <p> What do you want to do today?!</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="row listwrapper">
                        <div className="col-md-12 my-3 mx-auto">
                            {
                                store.currentUser && store.currentUser.users.role.rolename === "admin" && (
                                    <>
                                        <div className="list-group">
                                            <p>Menú Admin</p>
                                            <Link to="/dashboard/dashadminuser" className="list-group-item list-group-item-action dashitem text-white">User's Admin</Link>
                                            <Link to="/dashboard/dashadminblog" className="list-group-item list-group-item-action dashitem text-white">Blog's Admin</Link>
                                            <Link to="/dashboard/dashadminappoint" className="list-group-item list-group-item-action dashitem text-white">Appointment's Admin</Link>
                                            <Link to="/dashboard/dashcontacts" className="list-group-item list-group-item-action dashitem text-white">Contact's Admin</Link>
                                        </div>
                                        <hr className="hr1 my-5 col-md-10" />
                                    </>
                                )
                            }
                            <div className="list-group">
                                <Link to="/dashboard/dashuser" className="list-group-item list-group-item-action dashitem text-white" onClick={() => actions.getCurrentUser(store.currentUser.users.id, store.currentUser.users.email)}>Add/Change Personal Information</Link>
                                <Link to="/dashboard/dashpass" className="list-group-item list-group-item-action dashitem text-white">Change Password</Link>
                                <Link to="/" className="list-group-item list-group-item-action dashitem text-white" onClick={actions.logout}>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;