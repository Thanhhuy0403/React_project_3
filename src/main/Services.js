import "./Services.css";
import imgServices from "../img/img-services.svg";

function Services() {
    return (
        // <!-- Services -->
        <section className="services" id="services">
            <div className="container">
                <h2 className="title">Our services</h2>
                <p className="sub-title">
                    Exceptional dental care for all ages. Your great smile begins with a great dentist.
                </p>

                <div className="row">
                    <img src={imgServices} alt="" className="img" />

                    <div className="list-item">
                        {/* <!-- Item 1 --> */}
                        <div className="item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="92"
                                viewBox="0 0 92 92"
                                fill="none"
                            >
                                <g filter="url(#filter0_d_2_192)">
                                    <rect
                                        className="teeth"
                                        x="16"
                                        y="8"
                                        width="60"
                                        height="60"
                                        rx="30"
                                        fill="#EFF6FD"
                                    />
                                </g>
                                <path
                                    className="tooth"
                                    d="M55.3598 28.6396C52.9506 25.4439 49.2772 25.4319 46.2481 27.1068C46.001 27.2466 45.7219 27.3141 45.4406 27.3022C45.1592 27.2903 44.8863 27.1995 44.6511 27.0393C43.4955 26.2457 42.2904 25.6835 40.139 26.2075C35.6234 27.3071 35 30.9038 35 34.9982C35.0797 38.1602 35.5009 41.3032 36.2555 44.3683C37.1184 48.0168 38.9038 50 40.4335 50C41.9633 50 42.0096 48.2204 42.0096 46.8016C42.0096 45.2009 42.395 40.8009 45.8642 40.8009C48.5317 40.8009 49.3333 44.4013 49.3333 46.8016C49.3329 49.095 50.1722 50 51.6628 50C54.5267 50 55.9796 41.3938 56.3719 39.1237C56.7642 36.8535 57.9882 32.1257 55.3598 28.6396Z"
                                    fill="#10375C"
                                />
                                <defs>
                                    <filter
                                        id="filter0_d_2_192"
                                        x="0"
                                        y="0"
                                        width="92"
                                        height="92"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2_192"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_2_192"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>

                            <a href="https://www.globalfirepower.com/" className="info">
                                <p className="desc">Oral Surgery</p>
                                <p className="sub-desc">
                                    Everything you expect and then some. Cleanings, fillings, and x-rays.
                                </p>
                            </a>
                        </div>

                        {/* <!-- Item 2 --> */}
                        <div className="item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="92"
                                viewBox="0 0 92 92"
                                fill="none"
                            >
                                <g filter="url(#filter0_d_2_192)">
                                    <rect
                                        className="teeth"
                                        x="16"
                                        y="8"
                                        width="60"
                                        height="60"
                                        rx="30"
                                        fill="#EFF6FD"
                                    />
                                </g>
                                <path
                                    className="tooth"
                                    d="M55.3598 28.6396C52.9506 25.4439 49.2772 25.4319 46.2481 27.1068C46.001 27.2466 45.7219 27.3141 45.4406 27.3022C45.1592 27.2903 44.8863 27.1995 44.6511 27.0393C43.4955 26.2457 42.2904 25.6835 40.139 26.2075C35.6234 27.3071 35 30.9038 35 34.9982C35.0797 38.1602 35.5009 41.3032 36.2555 44.3683C37.1184 48.0168 38.9038 50 40.4335 50C41.9633 50 42.0096 48.2204 42.0096 46.8016C42.0096 45.2009 42.395 40.8009 45.8642 40.8009C48.5317 40.8009 49.3333 44.4013 49.3333 46.8016C49.3329 49.095 50.1722 50 51.6628 50C54.5267 50 55.9796 41.3938 56.3719 39.1237C56.7642 36.8535 57.9882 32.1257 55.3598 28.6396Z"
                                    fill="#10375C"
                                />
                                <defs>
                                    <filter
                                        id="filter0_d_2_192"
                                        x="0"
                                        y="0"
                                        width="92"
                                        height="92"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2_192"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_2_192"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>

                            <a href="https://www.globalfirepower.com/" className="info">
                                <p className="desc">Wisdom Teeth Removal</p>
                                <p className="sub-desc">
                                    Everything you expect and then some. Cleanings, fillings, and x-rays.
                                </p>
                            </a>
                        </div>

                        {/* <!-- Item 3 --> */}
                        <div className="item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="92"
                                viewBox="0 0 92 92"
                                fill="none"
                            >
                                <g filter="url(#filter0_d_2_192)">
                                    <rect
                                        className="teeth"
                                        x="16"
                                        y="8"
                                        width="60"
                                        height="60"
                                        rx="30"
                                        fill="#EFF6FD"
                                    />
                                </g>
                                <path
                                    className="tooth"
                                    d="M55.3598 28.6396C52.9506 25.4439 49.2772 25.4319 46.2481 27.1068C46.001 27.2466 45.7219 27.3141 45.4406 27.3022C45.1592 27.2903 44.8863 27.1995 44.6511 27.0393C43.4955 26.2457 42.2904 25.6835 40.139 26.2075C35.6234 27.3071 35 30.9038 35 34.9982C35.0797 38.1602 35.5009 41.3032 36.2555 44.3683C37.1184 48.0168 38.9038 50 40.4335 50C41.9633 50 42.0096 48.2204 42.0096 46.8016C42.0096 45.2009 42.395 40.8009 45.8642 40.8009C48.5317 40.8009 49.3333 44.4013 49.3333 46.8016C49.3329 49.095 50.1722 50 51.6628 50C54.5267 50 55.9796 41.3938 56.3719 39.1237C56.7642 36.8535 57.9882 32.1257 55.3598 28.6396Z"
                                    fill="#10375C"
                                />
                                <defs>
                                    <filter
                                        id="filter0_d_2_192"
                                        x="0"
                                        y="0"
                                        width="92"
                                        height="92"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2_192"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_2_192"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>

                            <a href="https://www.globalfirepower.com/" className="info">
                                <p className="desc">Preventative Dentistry</p>
                                <p className="sub-desc">
                                    Everything you expect and then some. Cleanings, fillings, and x-rays.
                                </p>
                            </a>
                        </div>

                        <a href="#!" className="btn btn-services">
                            All Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
