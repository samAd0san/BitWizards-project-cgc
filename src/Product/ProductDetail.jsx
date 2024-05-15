import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import ProductItem from "./ProductItem";

function ProductDetail() {

    const [product, setProduct] = useState([]);
    const [hasError, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
        const id = params.id;
        const url = `https://fakestoreapi.com/products/${id}`;
        axios.get(url)
            .then(res => setProduct(res.data),setError(false))
            .catch(() => setError(true));
    },[]);

    return ( 
        <div className="mt-20 p-4 md:px-14 w-h-screen flex items-center justify-center">

            <ShouldRender when={hasError}>
                <Error />
            </ShouldRender>

            <ShouldRender when={product}>
                <ProductItem product={product} />
            </ShouldRender>
        </div>
     );
}

export default ProductDetail;