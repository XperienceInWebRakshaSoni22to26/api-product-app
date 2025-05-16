import React from 'react'

const Card = ({ val, index }) => {
    return ( <
        div key = { index } >

        <
        img src = { val.thumbnail }
        alt = { val.title }
        style = {
            { width: '100%', borderRadius: '8px', marginBottom: '10px' }
        }
        /> <
        h2 style = {
            { fontSize: '20px' }
        } > { val.title } < /h2> <
        p style = {
            { fontSize: '14px', color: '#666' }
        } > { val.description.slice(0, 100) }... < /p> <
        p > < strong > Price: < /strong> ${val.price}</p >
        <
        p > < strong > Rating: < /strong> ⭐ {val.rating}</p >
        <
        p > < strong > Stock: < /strong> {val.stock}</p >

        <
        div style = {
            { marginTop: '10px' }
        } >
        <
        h4 style = {
            { marginBottom: '5px' }
        } > Recent Reviews: < /h4> <
        ul style = {
            { paddingLeft: '18px', fontSize: '14px' }
        } > {
            val.reviews.map((review, idx) => ( <
                li key = { idx } > < strong > { review.reviewerName }: < /strong> {review.comment}</li >
            ))
        } <
        /ul> < /
        div >

        <
        /div>
    )
}

export default Card