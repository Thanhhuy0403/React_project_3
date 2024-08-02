import imgEvent1 from "../img/image-event-1.svg";
import imgEvent2 from "../img/Image-event-2.svg";
import "./Events.css";

function Events() {
    return (
        // <!-- Events -->
        <section className="event">
            <div className="container">
                <div className="info">
                    <h2 className="title">Read Latest News & Events.</h2>
                    <a href="#!">Read All Blog</a>

                    {/* <!-- Action --> */}
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

                {/* <!-- List item --> */}
                <div className="list-item">
                    {/* <!-- Item 1 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgEvent1} alt="Event 1" />
                        </div>
                        <div className="element">
                            <p>
                                <strong className="desc">Key Considerations for Regulatory Compliant.</strong>
                            </p>
                            <p className="sub-desc">
                                It’s easy to think about medical care from a narrow perspective. You go to the hospital.
                            </p>
                            <a href="#!">Learn More</a>
                        </div>
                    </div>

                    {/* <!-- Item 2 --> */}
                    <div className="item">
                        <div className="image">
                            <img src={imgEvent2} alt="" />
                        </div>
                        <div className="element">
                            <p>
                                <strong className="desc">Key Considerations for Regulatory Compliant.</strong>
                            </p>
                            <p className="sub-desc">
                                It’s easy to think about medical care from a narrow perspective. You go to the hospital.
                            </p>
                            <a href="#!">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;
