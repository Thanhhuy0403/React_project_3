import imgSearch from "../img/search.svg";
import imgDoctor from "../img/doctor.svg";
import imgTreatment from "../img/treatment.svg";
import "./Works.css";

function Works() {
    return (
        // <!-- Works -->
        <section className="Work" id="about">
            <div className="container">
                <h1 className="title">How it works</h1>
                <p className="sub-title">
                    Exceptional dental care for all ages. Your great smile begins with a great dentist.
                </p>

                {/* <!-- List item --> */}
                <div className="list-item">
                    {/* <!-- Item 1 --> */}
                    <div className="item">
                        <img src={imgSearch} alt="Search" />
                        <h3>Search doctor</h3>
                        <p>Search a doctor by education, qualifications or experience-contact for inquiry.</p>
                        <a href="#!">Learn More</a>
                    </div>

                    {/* <!-- Item 2 --> */}
                    <div className="item">
                        <img src={imgDoctor} alt="Doctor" />
                        <h3>Search doctor</h3>
                        <p>Search a doctor by education, qualifications or experience-contact for inquiry.</p>
                        <a href="#!">Learn More</a>
                    </div>

                    {/* <!-- Item 3 --> */}
                    <div className="item">
                        <img src={imgTreatment} alt="Treatment" />
                        <h3>Get treatment</h3>
                        <p>Search a doctor by education, qualifications or experience-contact for inquiry.</p>
                        <a href="#!">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;
