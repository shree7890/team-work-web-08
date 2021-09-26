import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Person.css';
const Person = (props) => {
    const { img, person, name, workExperience, member, job, salary } = props.person;
    return (
        <div className="person-container">
            <div>
                <div className="content-img">
                    <img src={img} alt="" />
                </div>
                <div className="profile">
                    <img src={person} alt="" />
                    <span>{name}</span>
                </div>
                <div className="deatil">
                    <h3>Job: {job}</h3>
                    <h4>Member since: <span>{member}</span></h4>
                    <h5>Work Experience: <span>{workExperience}</span></h5>
                    <h4>Salary: <span>${salary}</span></h4>
                    <button className="item" onClick={() => props.handleClick(props.person)}><FontAwesomeIcon icon={faShoppingCart} /> Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default Person;