function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">PromoRoo</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">About Us</li>
                                <li className="my-2">Faq</li>
                                <li className="my-2">Contect Us</li>
                                <li className="my-2">Tems of Services</li>
                                <li className="my-2">Privacy Policy</li>
                                <li className="my-2">Sitemap</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">Marketplace</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">Real Estate</li>
                                <li className="my-2">Food &amp; Hospitality</li>
                                <li className="my-2">Bussiness Opportunities</li>
                                <li className="my-2">Reatail</li>
                                <li className="my-2">Health &amp; Beauty</li>
                                <li className="my-2">Manufacturing Services</li>
                                <li className="my-2">Transport Services</li>
                                <li className="my-2">Leisure &amp; Tourism</li>
                                <li className="my-2">Professional Services</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">Bussiness Promotion</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">Video Promo</li>
                                <li className="my-2">Banner Promo</li>
                                <li className="my-2">Enterpreneur Center</li>
                                <li className="my-2">SEO Promo</li>
                                <li className="my-2">Email Marketing</li>
                                <li className="my-2">Affiliate Marketing</li>
                                <li className="my-2">Shop Saver</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">Partners</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">Business Media Group</li>
                                <li className="my-2">Business Partner Group</li>
                                <li className="my-2">The Business Leader</li>
                                <li className="my-2">Lions Bussiness Brokers</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">Partner Programs</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">Business Partner Group</li>
                                <li className="my-2">
                                    <i className="fas fa-check" /> Referral Program
                                </li>
                                <li className="my-2">
                                    <i className="fas fa-check" /> Affiliate Program
                                </li>
                                <li className="my-2">
                                    <i className="fas fa-check" /> SEO Managment
                                </li>
                                <li className="my-2">
                                    <i className="fas fa-check" /> SEM Managment
                                </li>
                                <li className="my-2">
                                    <i className="fas fa-check" /> SMM Managment
                                </li>
                                <li className="my-2 d-flex">
                                    <i className="fas fa-check mr-1" /> Email Marketing &amp; Managment
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-white py-4">
                            <h6 className="m-1">Stay Connected</h6>
                            <hr className="m-0" />
                            <ul className="list-inline my-3">
                                <li className="my-2">
                                    <i className="fab fa-facebook-f" /> Facebook
                                </li>
                                <li className="my-2">
                                    <i className="fab fa-youtube" /> You Tube
                                </li>
                                <li className="my-2">
                                    <i className="fab fa-twitter" /> Twitter
                                </li>
                                <li className="my-2">
                                    <i className="fab fa-instagram" /> Instagram
                                </li>
                                <li className="my-2">
                                    <i className="fab fa-linkedin-in" /> LinkedIn
                                </li>
                                <li className="my-2">Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white text-center pb-5">
                        <h5 className="my-4">Sign up for news and special offers</h5>
                        <div className="col-lg-6 d-flex mx-auto">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email Address"
                            />
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <p className="my-3">
                            {" "}
                            © Bussiness Media Group 2024. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )

}

export default Footer;