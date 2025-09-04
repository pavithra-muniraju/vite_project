import React from 'react';

const House = ({ house }) => {
    if (!house) return <div>No house data provided.</div>;

    return (
        <div>
            <h2>{house.country}</h2>
            <p><strong>Address:</strong> {house.address}</p>
            <p><strong>Price:</strong> {house.price}</p>
            <p><strong>Description:</strong> {house.description}</p>
        </div>
    );
};

export default House;