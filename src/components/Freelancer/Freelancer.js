import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Freelancer.css';
const Freelancer = () => {
    const [persons, setPersons] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch(`./team.JSON`)
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);
    const handleClick = person => {
        const newCount = [...count, person];
        setCount(newCount);
    }
    return (
        <div className="freelance-container">
            <div className="titlebar">
                <h1>Most Hired Freelancers</h1>
                <p>Work with talented people at the most affordable price to get your job done</p>
            </div>
            <div className="freelancer-area">
                <div className="single-detail">
                    {
                        persons.map(person => <Person
                            key={person.name}
                            person={person}
                            handleClick={handleClick}
                        ></Person>)
                    }
                </div>
                <div className="add-person">
                    <Cart count={count}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Freelancer;