import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart } from "../../store/cartSlice";

const MyProducts = () => {
    const cartProduct = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-center">My Products</h2>

            <div className="my-8">
                {
                    cartProduct.map(cpd => <div key={cpd.id} className="flex items-center justify-between mb-4 border-2 border-gray-400 rounded p-4">
                        <img src={cpd.thumbnail} alt="" className="w-40"/>
                        <h2 className="text-xl font-bold">{cpd.title}</h2>
                        <p>Price: ${cpd.price}</p>
                        <button onClick={() => dispatch(deleteToCart(cpd))} className="text-xl font-bold text-red-600"><FaTrashAlt></FaTrashAlt></button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyProducts;