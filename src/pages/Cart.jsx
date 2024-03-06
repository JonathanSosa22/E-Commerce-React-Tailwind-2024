import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import usePurchase from "../hooks/usePurchase";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { makePurchase } = usePurchase();

  const totalPrice = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price;
    return acc + subTotal;
  }, 0);

  const handlePurchase = () => {
    makePurchase();
  };

  return (
    <>
      <div className="w-[80%] mx-auto pt-4">
        <div className="border-2">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col justify-between items-center p-4 m-2 md:flex-row">
          <div>
            <span className="font-bold text-2xl text-gray-400">Total:</span>
            <span className="font-bold text-2xl ml-3">${totalPrice}</span>
          </div>
          <button
            className="p-2 mt-4 bg-red-600 text-white font-bold md:text-2xl md:mt-0 rounded hover:bg-green-500"
            onClick={handlePurchase}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
