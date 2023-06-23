import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-0 mt-md-0 mt-3">
                <h5 className="text-uppercase">MAKEUP MIRAGE</h5>
                <p>Enhance your confidence and radiance with high-quality cosmetics for every occasion</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-0 mt-md-0 mt-3">
                <form className='d-flex justify-content-center'>
                    <p className='pt-2'>
                        <strong>Sign up for our newsletter</strong>
                    </p>
                        <input type="email" placeholder="Email" />
                        <button type="submit">Subscribe</button>
                </form>
            </div>


            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">ABOUT</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Stores</a></li>
                    <li><a href="#!">Join the team</a></li>
                    <li><a href="#!">Ts & Cs </a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">CUSTOMER CARE</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">The Blog</a></li>
                    <li><a href="#!">FAQs</a></li>
                    <li><a href="#!">Shipping Info</a></li>
                    <li><a href="#!">Returns</a></li>
                    
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">CONTACT</h5>
                <ul className="list-unstyled">
                    <li>info@makeupmirage.com</li>
                    <li>+ 64 123 456 789 </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© Makeup Mirage 2023: Coded by Janine Soo Thow
    </div>

</footer>

export default Footer