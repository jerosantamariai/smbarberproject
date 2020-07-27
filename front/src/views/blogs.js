import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Blogs = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        console.log("aqui estoy")
        actions.getBlogs()
    }, [])
    return (
        <>
            <div className="blogteiner">
                <h1>Welcome to our Blog!</h1>
                <div class="card-deck">
                    <div className="row d-flex justify-content-center">
                        {
                            !!store.blog ?
                                store.blog.map((blo, i) => {
                                    // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <>
                                            <div className="col-xl-4 col-lg-6 col-md-8 col-xs-12">
                                                <div className="card text-white mb-3 blogitem text-white blogitem" key={i}>
                                                    <Link type="button" className="btn btn-light noDecoration2" to={"/blogs/" + blo.title}>
                                                        {/* <img src={"img/films/" + img} className="card-img-top" alt={"image of " + img} /> */}
                                                        <img src={store.blogPath + blo.blogimagen} className="card-img-top my-2" alt={"image of " + blo.id} />
                                                        {/* <a classNam="text" id="overlay">GO!</a> */}
                                                        <div className="card-body">
                                                            <h5 className="card-title">{blo.title}</h5>
                                                            <p className="card-text text-justify">{blo.bintro}</p>
                                                        </div>
                                                        <div class="card-footer">
                                                            <small class="text-muted">{blo.createdate}</small>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                : (
                                    <div class="text-center" id="undefined">
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

export default Blogs;