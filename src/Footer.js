import "./Footer.css";
import logo from "./img/logo.svg";

function Footer() {
    return (
        // <!-- Footer -->
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="list-item">
                        {/* <!-- Item 1 --> */}
                        <div className="item-1">
                            {/* <!-- Logo --> */}
                            <a href="/">
                                <div className="logo-header">
                                    <img src={logo} alt="" className="logo" />
                                    <p className="logo-name">
                                        <strong>shine</strong> smile
                                    </p>
                                </div>
                            </a>

                            <p className="desc">
                                Exceptional dental care for all ages. Your great smile begins with a great dentist.
                            </p>
                        </div>

                        {/* <!-- Item 2 --> */}
                        <div className="item-2">
                            <p>Support</p>
                            <div className="element">
                                <a href="#!">Help center</a>
                                <a href="#!">Account information</a>
                                <a href="#!">About</a>
                                <a href="#!">Contact us</a>
                            </div>

                            <p>Support</p>
                            <div className="element">
                                <a href="#!">Help center</a>
                                <a href="#!">Account information</a>
                            </div>
                        </div>

                        {/* <!-- Item 3 --> */}
                        <div className="item-3">
                            <p>Support</p>
                            <div className="element">
                                <a href="#!">Help center</a>
                                <a href="#!">Account information</a>
                            </div>

                            <p>Support</p>
                            <div className="element">
                                <a href="#!">Help center</a>
                            </div>
                        </div>

                        {/* <!-- Item 4 --> */}
                        <div className="item-4">
                            <p>Stay In Touch</p>
                            <div className="element">
                                <div className="icon-contact">
                                    <a href="#!">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="16" cy="16" r="16" fill="#FFF" />
                                            <path
                                                d="M16.9898 21.9358V16.0302H18.7647L19 13.9517H16.9898L16.9928 12.9113C16.9928 12.3692 17.0477 12.0789 17.8778 12.0789H18.9876V10H17.2122C15.0798 10 14.3293 11.0082 14.3293 12.7041V13.9519H13V16.0306H14.3293V21.8521C14.8472 21.9489 15.3826 22 15.9307 22C16.2849 22 16.6386 21.9786 16.9898 21.9358Z"
                                                fill="#2e80ce"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#!">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="16" cy="16" r="16" fill="white" />
                                            <path
                                                d="M24 11.4206C23.405 11.6615 22.771 11.8212 22.11 11.8988C22.79 11.524 23.309 10.9351 23.553 10.2252C22.919 10.5742 22.219 10.8206 21.473 10.9582C20.871 10.3665 20.013 10 19.077 10C17.261 10 15.799 11.3606 15.799 13.0286C15.799 13.2686 15.821 13.4994 15.875 13.7191C13.148 13.5963 10.735 12.3898 9.114 10.552C8.831 11.0052 8.665 11.524 8.665 12.0825C8.665 13.1311 9.25 14.0606 10.122 14.5988C9.595 14.5895 9.078 14.4483 8.64 14.2258C8.64 14.2351 8.64 14.2471 8.64 14.2591C8.64 15.7305 9.777 16.9526 11.268 17.2342C11.001 17.3015 10.71 17.3338 10.408 17.3338C10.198 17.3338 9.986 17.3228 9.787 17.2822C10.212 18.4812 11.418 19.3628 12.852 19.3914C11.736 20.1972 10.319 20.6828 8.785 20.6828C8.516 20.6828 8.258 20.6717 8 20.6412C9.453 21.5062 11.175 22 13.032 22C19.068 22 22.368 17.3846 22.368 13.384C22.368 13.2502 22.363 13.1209 22.356 12.9926C23.007 12.5662 23.554 12.0335 24 11.4206Z"
                                                fill="#2E80CE"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#!">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="16" cy="16" r="16" fill="white" />
                                            <path
                                                d="M10 11.3939C10 10.9899 10.1464 10.6566 10.4392 10.3939C10.732 10.1313 11.1126 10 11.5811 10C12.0412 10 12.4134 10.1293 12.6979 10.3879C12.9907 10.6545 13.1371 11.002 13.1371 11.4303C13.1371 11.8182 12.9949 12.1414 12.7104 12.4C12.4176 12.6667 12.0328 12.8 11.556 12.8H11.5434C11.0833 12.8 10.7111 12.6667 10.4266 12.4C10.1422 12.1333 10 11.798 10 11.3939ZM10.1631 22V13.903H12.9488V22H10.1631ZM14.4923 22H17.278V17.4788C17.278 17.196 17.3115 16.9778 17.3784 16.8242C17.4955 16.5495 17.6733 16.3172 17.9117 16.1273C18.1501 15.9374 18.4492 15.8424 18.8089 15.8424C19.7458 15.8424 20.2143 16.4525 20.2143 17.6727V22H23V17.3576C23 16.1616 22.7072 15.2545 22.1216 14.6364C21.536 14.0182 20.7622 13.7091 19.8002 13.7091C18.721 13.7091 17.8803 14.1576 17.278 15.0545V15.0788H17.2654L17.278 15.0545V13.903H14.4923C14.509 14.1616 14.5174 14.9656 14.5174 16.3152C14.5174 17.6646 14.509 19.5596 14.4923 22Z"
                                                fill="#2E80CE"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <p>Support</p>
                            <div className="element">
                                <p className="desc">Subscribe our newsletter for the latest update of Dental care</p>
                            </div>

                            {/* <!-- Action --> */}
                            <form action="" className="action">
                                <input type="email" name="email" id="email" placeholder="Enter your email..." />
                                <a href="#!" className="btn">
                                    Subscribe
                                </a>
                            </form>
                        </div>
                    </div>
                </div>

                <p className="desc">2021 GDN. Copyright and All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
