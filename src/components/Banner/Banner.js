import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="project-banner">
                <h3>SINCE THE START</h3>
                <h1>We Provide Stable Service With Experts</h1>
                <p className="description">Freelancers around the globe, are looking for work and provide the best they have. Start now</p>
                <p className="total">TOTAL PROJECTS: 400</p>
                <span className="earning">TOTAL EARNINGS: $79685</span>
                <br />
                <button className="view-project">View Projects</button>
            </div>
        </div>
    );
};

export default Banner;