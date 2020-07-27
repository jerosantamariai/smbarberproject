import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <>

            <footer className="page-footer font-small special-color-dark">
                <div className="copyrights">
                    <div className="container-fluid">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-links">
                                    <Link to="/">Home</Link>
                                    <Link to="/blogs">Blogs</Link>
                                    <Link to="/pricing">Pricing</Link>
                                    <Link to="/aboutus">About</Link>
                                    <Link to="/contact">Contact</Link>
                                </p>
                                <p className="footer-company-name">All Rights Reserved. &copy; 2018 <Link to="#">SMBarber</Link> Design By : <Link to="https://html.design/">html design</Link></p>
                            </div>

                            <div className="footer-right">
                                <form method="get" action="#">
                                    <input placeholder="Subscribe our newsletter.." name="search" />
                                    <i className="fas fa-envelope"></i>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;