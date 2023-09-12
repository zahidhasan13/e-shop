import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h1 className="text-4xl text-center font-bold">Buy Your Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                {
                    products.map(product => <div key={product.id}>
                        <img src={product.thumbnail} alt="" className="w-full h-80 rounded"/>
                        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
                        <p>Price: {product.price}</p>
                        <p>Brand: {product.brand}</p>
                        <button onClick={()=> dispatch(addToCart(product))} className="bg-primary-700 text-white px-4 py-2.5 rounded font-bold">Add to cart</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;