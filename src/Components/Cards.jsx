import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
    if (!Array.isArray(data)) return null;
    return ( <
        div className = "cards" > {
            data.map((val, index) => ( <
                Card key = { index }
                val = { val }
                className = "singlecard" / >
            ))
        } <
        /div>
    )
}

export default Cards