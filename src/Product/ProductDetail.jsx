import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import { Actions } from '../Product/ProductItem';

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [hasError, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        const url = `https://fakestoreapi.com/products/${id}`;
        axios.get(url)
            .then(res => setProduct(res.data))
            .catch(() => setError(true));
    }, [params.id]);

    return (
        <div className="mt-20 p-4 md:px-14">
            <ShouldRender when={hasError}>
                <Error />
            </ShouldRender>

            <ShouldRender when={product}>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2">
                        {/* Product Title */}
                        <h2 className="text-3xl font-semibold mb-4 text-primary">{product.title}</h2>

                        {/* Image */}
                        <div className="mb-4">
                            <img src={product.image} alt={product.title} className="w-full h-auto md:max-w-xs md:max-h-xs" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        {/* Price */}
                        <p className="text-tartiary text-2xl mb-2 font-semibold">Price ${product.price}</p>
                        {/* Description */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">{product.description}</p>

                        {/* Add to cart and buy now button */}
                        <Actions product={product} />
                    </div>
                </div>
            </ShouldRender>
        </div>
    );
}

export default ProductDetail;
