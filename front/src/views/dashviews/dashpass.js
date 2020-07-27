import React, { useContext } from 'react';
import { Context } from '../../store/appContext';

const Dashpass = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashpassteiner">
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
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper">
                        <div className="col-md-12 my-3 mx-auto text-center">
                            <h1>Change Password!</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb text-white" id="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                                </ol>
                            </nav>
                            <form onSubmit={e => actions.changePassword(e, props.history)}>
                                <div className="form-group">
                                    <label htmlFor="oldpassword">Insert Current Password</label>
                                    <input type="password" className="form-control" id="oldpassword" name="oldpassword" onChange={actions.handleChange} value={store.oldpassword} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Insert New Password</label>
                                    <input type="password" className="form-control" id="password " name="password" onChange={actions.handleChange} value={store.password} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashpass;