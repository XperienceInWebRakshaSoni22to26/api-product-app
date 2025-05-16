import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( <
        div style = {
            { display: 'flex', justifyContent: 'center', marginTop: '20px' }
        } > {
            pageNumbers.map(number => ( <
                button key = { number }
                onClick = {
                    () => setCurrentPage(number)
                }
                style = {
                    {
                        margin: '0 5px',
                        padding: '5px 10px',
                        backgroundColor: number === currentPage ? '#007bff' : '#eee',
                        color: number === currentPage ? 'white' : 'black',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }
                } > { number } <
                /button>
            ))
        } <
        /div>
    );
};

export default Pagination;