import "./HeroHeader.css";
import heroHeader1 from "../img/img-hero-header-1.svg";
import heroHeader2 from "../img/img-hero-header-2.svg";

function HeroHeader() {
    return (
        // <!-- Hero Header -->
        <header className="hero-header" id="home">
            <div className="container">
                {/* <!-- Information --> */}
                <section className="info">
                    <h1 className="title">Exceptional dental care for all ages.</h1>
                    <p className="sub-title">
                        Exceptional dental care for all ages. Your great smile begins with a great dentist.
                    </p>
                    <div className="action">
                        <a href="#!" className="btn">
                            Book Online
                        </a>
                        <p className="desc">or call (123) 456-7890</p>
                    </div>
                </section>

                {/* <!-- Image --> */}
                <div className="picture">
                    <img src={heroHeader1} alt="hero-header-1" />
                    <img src={heroHeader2} alt="hero-header-2" />
                </div>
            </div>
        </header>
    );
}

export default HeroHeader;
