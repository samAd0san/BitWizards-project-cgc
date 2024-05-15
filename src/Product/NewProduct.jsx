import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function NewProduct() {
    const [product, setProduct] = useState({
        category: "",
        title: "",
        price: "",
        description: "",
    });
    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (evt) => {
        const newState = { ...product, [evt.target.name]: evt.target.value };
        setProduct(newState);
    };

    const navigate = useNavigate();

    const onSaveBtn = async () => {
        try {
            const url = "https://fakestoreapi.com/products";
            await axios.post(url, product);
            setSuccess(true);
            setProduct({
                category: "",
                title: "",
                price: "",
                description: "",
            });
            //   navigate("/products"); // Redirects to products page
        } catch {
            setError(true);
        }
    };

    return (
        <div className="mt-20 p-4 md:px-14 ml-8">
            {/* Success */}
            <ShouldRender when={success}>
                <div className="py-2 my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
                    Successfully saved data
                </div>
            </ShouldRender>

            {/* Failure (Error) */}
            <ShouldRender when={hasError}>
                <Error />
            </ShouldRender>

            {/* Heading */}
            <h1 className="flex text-4xl mt-3 p-1 font-bold text-primary">New Product</h1>

                {/* 1. Category */}
            <div className="mt-4 mb-4">
                <label className="block py-1 font-medium text-2xl text-secondary">Category</label>
                <select
                    name="category"
                    value={product.category}
                    onChange={onInputChange}
                    className="border border-primary p-1 w-1/2 rounded"
                >
                    <option value="">category</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="womens's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                </select>
                <ShouldRender when={!product.category}>
                    <div className="text-sm text-red-500 m-1">category is required</div>
                </ShouldRender>
            </div>

                {/* 2. Title */}
            <div className="mb-4">
                <label className="block py-1 font-medium text-2xl text-secondary">Title</label>
                <input
                    name="title"
                    value={product.title}
                    onChange={onInputChange}
                    className="border border-primary p-1 w-1/2 rounded"
                    placeholder="title"
                    type="text"
                />
                {/* Adding Validations */}
                <ShouldRender when={!product.title}>
                    <div className="text-sm text-red-500 m-1">Title is required</div>
                </ShouldRender>
                <ShouldRender when={product.title && product.title.length < 3}>
                    <div className="text-sm text-red-500 m-1">Min 3 chars</div>
                </ShouldRender>
                <ShouldRender when={product.title && product.title.length > 20}>
                    <div className="text-sm text-red-500 m-1">Max 20 chars</div>
                </ShouldRender>
            </div>

                {/* 3. Price */}
            <div className="mb-4">
                <label className="block py-1 font-medium text-2xl text-secondary">Price</label>
                <input
                    name="price"
                    value={product.price}
                    onChange={onInputChange}
                    className="border border-primary p-1 w-1/2 rounded"
                    placeholder="price"
                    type="text"
                />
                {/* Validations */}
                <ShouldRender when={!product.price}>
                    <div className="text-sm text-red-500 m-1">Price is required</div>
                </ShouldRender>
            </div>

                {/* 4. Description */}
            <div className="mb-4">
                <label className="block py-1 font-medium text-2xl text-secondary">Description</label>
                <input
                    name="description"
                    value={product.description}
                    onChange={onInputChange}
                    className="border border-primary p-1  w-1/2 rounded"
                    placeholder="description"
                    type="text"
                />
                {/* Validations */}
                <ShouldRender when={!product.description}>
                    <div className="text-sm text-red-500 m-1">
                        Description is required
                    </div>
                </ShouldRender>
            </div>

            <div className="mb-4">
                <button
                    // Disabling the button on not entering any of he fields (Validation)
                    disabled={!product.category || !product.title || !product.price}
                    onClick={onSaveBtn}
                    className="bg-secondary font-semibold text-xl text-white hover:bg-cyan-300 rounded-lg py-2 px-4 transition-all duration-300"
                >
                    Save
                </button>
            </div>
        </div>
    );
}
export default NewProduct;