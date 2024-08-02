import imgFeature1 from "../img/feature-1.svg";
import imgFeature2 from "../img/feature-2.svg";
import "./Feature.css";

function Feature() {
    return (
        // <!-- Feature -->
        <section className="feature">
            <div className="container">
                <div className="picture">
                    <img src={imgFeature1} alt="Feature1" />
                    <img className="image" src={imgFeature2} alt="Feature2" />
                </div>

                {/* <!-- Information --> */}
                <div className="info">
                    <h2 className="title">Take back your smile with shine.</h2>
                    <p className="sub-title">
                        If you’re missing multiple teeth due to decay, injury, or the natural aging process, dentures
                        might be the perfect solution.
                    </p>
                    <a href="#!" className="btn btn-feature">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Feature;
