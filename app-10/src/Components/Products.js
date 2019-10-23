import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(res => setProducts(res.data.results))
    }, [])
    console.log(products)

    const mappedProducts = products.map((e,i) => {
        return (
            <Link to={`/details/${i + 1}`} key={i}>
                <div>
                    {e.name}
                </div>
             </Link>
        )
        
    })
    return(
        <div>
            Products
            {mappedProducts}
        </div>
    )
}

export default Products