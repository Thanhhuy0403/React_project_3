import imgVirtual1 from "../img/virtual-1.svg";
import imgVirtual2 from "../img/virtual-2.svg";
import imgVirtual3 from "../img/virtual-3.svg";
import imgVirtual4 from "../img/virtual-4.svg";
import "./Virtual.css";

function Virtual() {
    return (
        // <!-- Virtual -->
        <section className="virtual" id="doctor">
            <div className="container">
                <h2 className="title">Our virtual dentist</h2>
                <a href="#!" className="btn btn-virtual ">
                    Meet our dentist
                </a>
                <div className="list-item">
                    {/* <!-- Item 1 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgVirtual1} alt="Dr. Essence Page" />
                        </div>
                        <strong className="name">Dr. Essence Page</strong>
                        <p className="desc">DDS, California - Linda University</p>
                    </div>

                    {/* <!-- Item 2 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgVirtual2} alt="Dr. Essence Page" />
                        </div>
                        <strong className="name">Dr. Essence Page</strong>
                        <p className="desc">DDS, California - Linda University</p>
                    </div>

                    {/* <!-- Item 3 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgVirtual3} alt="Dr. Essence Page" />
                        </div>
                        <strong className="name">Dr. Essence Page</strong>
                        <p className="desc">DDS, California - Linda University</p>
                    </div>

                    {/* <!-- Item 4 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgVirtual4} alt="Dr. Essence Page" />
                        </div>
                        <strong className="name">Dr. Essence Page</strong>
                        <p className="desc">DDS, California - Linda University</p>
                    </div>
                </div>

                <div className="action">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="17.5" transform="matrix(-1 0 0 1 36 0)" stroke="#575F66" />
                        <path
                            d="M20.5 13L15.5 18L20.5 23"
                            stroke="#575F66"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="17.5" transform="matrix(-1 0 0 1 36 0)" stroke="#575F66" />
                        <path
                            d="M15.5 13L20.5 18L15.5 23"
                            stroke="#575F66"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Virtual;
