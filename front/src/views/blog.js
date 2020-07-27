import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Blog = props => {
    const { store, actions } = useContext(Context)
    const blogger = props.match.params.title;
    return (
        <>
            <div className="blogteiner">
                <div className="card-group">
                    <div className="row">
                        {
                            !!store.blog ?
                                store.blog.map((blo, i) => {
                                    if (JSON.stringify(blo.title) === JSON.stringify(blogger)) {
                                        // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white mb-3 d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={store.blogPath + blo.blogimagen} className="card-img-top my-2" alt={"image of " + blo.id} />
                                                    <Link to={"/blogs"} className="btn btn-secondary d-flex justify-content-center blogitem text-white">Back to Blogs!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h2 className="card-title">{blo.title}</h2>
                                                    <h5 className="card-text">{blo.bintro}</h5>
                                                    <p className="card-text mb-5">{blo.publictext}</p>
                                                    {
                                                        !!store.currentUser ? (
                                                            <>
                                                                <iframe width="560" height="315" src={blo.blogvideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                <p className="card-text my-5">{blo.privatext}</p>
                                                                <small>Si por alguna extraña razón no puedes ver el video. Haz click <a href={blo.blogvideo} target="_blank">aquí</a> para verlo en Youtube!</small>
                                                            </>
                                                        ) : (
                                                                <>
                                                                    <h3>You are not register!! :&#40;</h3>
                                                                    <h4>If you want to see all the content you need to <Link to="/register">register</Link>...</h4>
                                                                    <h5>...but if you already have an account please <Link to="/login">login</Link>!!!</h5>
                                                                </>
                                                            )
                                                    }
                                                    <p className="card-text mt-5">Release Date: {blo.createdate}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;