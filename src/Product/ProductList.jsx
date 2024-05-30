import ShouldRender from '../util/ShouldRender';
import Error from '../util/Error';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../util/Loader';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';


function Products() {

    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [direction, setDirection] = useState("asc");
    const fetchData = async () => {
        const url = `https://fakestoreapi.com/products?sort=${direction}`;
        try {
            const res = await axios.get(url);
            setProducts(res.data);
            setError(false);
            setLoading(false);
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, [direction]);

    const onSortChange = (evt) => {
        setDirection(evt.target.value)
    };

    return (
        <div className="mt-20 p-4 md:px-14">
            <div>
                <div className='flex flex-col md:flex-row items-center justify-center mb-3'>
                    <h1 className="text-3xl font-bold px-3 text-primary mt-3 mb-3">Products</h1>

                    {/* Sort by option */}
                    <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                        <select onClick={onSortChange} className="h-12 w-full md:w-auto md:flex-grow text-center font-medium text-xl rounded-lg bg-secondary hover:bg-cyan-300 transition-all duration-300 text-white mt-2 md:mt-0">
                            <option>Sort</option>
                            <option value="desc">Women's Clothing</option>
                            <option value="asc">Men's Clothing</option>
                        </select>

                        {/* Add a new Product */}
                        <Link to="/products/new" className="btnSecondary text-center rounded-lg font-medium text-xl h-12 w-full md:w-auto text-white mt-2 md:mt-0 md:ml-3">Add Product</Link>
                    </div>
                </div>


                {/* When hasError is true execute this Component */}
                <ShouldRender when={hasError}>
                    <Error />
                </ShouldRender>

                <ShouldRender when={loading}>
                    <Loader />
                </ShouldRender>

                {/*This keeps the products in cols and adjust size for small devices*/}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pr-4">
                    {
                        products.map(prod => <ProductItem product={prod} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;