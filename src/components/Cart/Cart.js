import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { count } = props;
    //for loop use total salary
    let total = 0;
    for (const person of count) {
        total += parseInt(person.salary);
    }
    // reduce count array couunt of name
    const frelancer = (previous, person) => previous + person.name;
    const name = count.reduce(frelancer, []);

    return (
        <div className="cart">
            <h4><i class="fas fa-user-alt man"></i> Freelancers: {count.length}</h4>
            <h5>Total Salary: {total}</h5>
            <p className="person-name">Name: <li style={{ color: "#fe696a", fontStyle: "italic" }}>
                {name}
            </li>
            </p>
            <button className="buy-btn">Buy Now</button>
        </div >
    );
};

export default Cart;