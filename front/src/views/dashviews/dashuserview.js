import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashUserView = props => {
    const { store, actions } = useContext(Context)
    const userurl = props.match.params.email;
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
                            !!store.users ?
                                store.users.map((usr, i) => {
                                    if (JSON.stringify(usr.email) === JSON.stringify(userurl)) {
                                        // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white mb-3 d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={store.avatarPath + usr.avatar} className="card-img-top" alt={"image of " + usr.email} />
                                                    <Link to={"/dashboard/dashadminuser"} className="btn btn-secondary d-flex justify-content-center blogitem text-white">Back</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h1>Profile Name</h1>
                                                    <p className="card-title">Name: {usr.name}</p>
                                                    <p className="card-text">Last Name: {usr.lastname}</p>
                                                    <p className="card-text">Email: {usr.email}</p>
                                                    <p className="card-text">Phone: {usr.phone}</p>
                                                    <p className="card-text">Date of Incorporation: {usr.createdate}</p>
                                                    <hr className="hr1" />
                                                    <p className="card-text">{usr.role.rolename}</p>
                                                    {/* {
                                                        usr.email !== "admin@gmail.com" && (
                                                            usr.role.rolename === "admin" ? (
                                                                <>
                                                                    <select className="custom-select col-md-4" name="rolename" onChange={actions.handleChange} value={store.rolename}>
                                                                        <option selected>Select Role for the User</option>
                                                                        <option>Customer</option>
                                                                    </select>
                                                                    <button type="button" className="btn dashitem text-white ml-2" onClick={(e) => actions.changeRole(e, props.history)}>Save</button>
                                                                </>
                                                            ) : (
                                                                    <>
                                                                        <select className="custom-select col-md-4" name="rolename" onChange={actions.handleChange} value={store.rolename}>
                                                                            <option selected>Select Role for the User</option>
                                                                            <option>Admin</option>
                                                                        </select>
                                                                        <button type="button" className="btn dashitem text-white ml-2" onClick={(e) => actions.changeRole(e, props.history)}>Save</button>
                                                                    </>
                                                                )
                                                        )
                                                    } */}
                                                    <hr className="hr1" />
                                                    {
                                                        usr.email !== "admin@gmail.com" && (
                                                            <>
                                                                <button type="button" 
                                                                className="btn btn-block dashitem text-white"
                                                                id="deleteid"
                                                                name="deleteid"
                                                                value={store.deleteid}
                                                                onClick={e => actions.deleteUsr(usr.id, props.history)}>
                                                                    Delete<i className="fas my-auto p-3 fa-trash"></i>
                                                                </button>
                                                            </>
                                                        )
                                                    }
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
export default DashUserView;