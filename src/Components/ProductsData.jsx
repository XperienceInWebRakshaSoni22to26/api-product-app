import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import Pagination from "./Pagination";

const ProductsData = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const API_URL = "https://dummyjson.com/products";

    const fetchapidata = async() => {
        const response = await fetch(`${API_URL}`);
        const apidata = await response.json();
        setData(apidata.products);

    }
    useEffect(() => {
        fetchapidata();
    }, []);
    // Calculate products for current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    return ( <
        div >
        <
        Cards data = { currentProducts }
        /> <
        Pagination productsPerPage = { productsPerPage }
        totalProducts = { data.length }
        currentPage = { currentPage }
        setCurrentPage = { setCurrentPage }
        />

        <
        /div>
    )
}

export default ProductsData