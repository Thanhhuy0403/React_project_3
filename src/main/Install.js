import google from "../img/google-play.svg";
import app from "../img/app-store.svg";
import installApp from "../img/install-app.svg";
import "./Install.css";

function Install() {
    return (
        // <!-- Install App -->
        <section className="install-app">
            <div className="container">
                <div className="info">
                    <h2 className="title">Take back your smile with dentures</h2>
                    <p className="sub-title">
                        If you’re missing multiple teeth due to decay, injury, or the natural aging process, dentures
                        might be the perfect solution.
                    </p>

                    <div className="contact">
                        <a href="#!">
                            <img src={google} alt="" />
                        </a>
                        <a href="#!">
                            <img src={app} alt="" />
                        </a>
                    </div>
                </div>

                <img src={installApp} alt="" className="image" />
            </div>
        </section>
    );
}

export default Install;
