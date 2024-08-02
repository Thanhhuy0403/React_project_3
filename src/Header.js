import "./Header.css";
import logo from "./img/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/">
                    <div className="logo-header">
                        <img src={logo} alt="" className="logo" />
                        <p className="logo-name">
                            <strong>shine</strong> smile
                        </p>
                    </div>
                </a>

                {/* <!-- Navigation bar --> */}
                <nav className="navbar">
                    <a href="#home" className="home">
                        Home
                    </a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#doctor">Doctors</a>
                </nav>

                {/* <!-- Action --> */}
                <div className="action">
                    <a href="#!" className="log-in">
                        Log In
                    </a>
                    <a href="#!" className="btn sign-up">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
