import { useContext } from 'react';
import { ShopContext } from '../App';
// import "./styles/custom-number-input.css"
import { X } from 'react-feather';

function Cart({ setIsViewCartOpen, cartCount }) {
    const { cartItems, setCartItems } = useContext(ShopContext);

    const handleDecrement = (item) => {
        const index = cartItems.findIndex(obj => (
            obj.name === item.name &&
            obj.price === item.price &&
            obj.selectedSize === item.selectedSize
        ));

        const updatedArray = [...cartItems];
        updatedArray[index].value -= 1;
        if (updatedArray[index].value === 0) {
            updatedArray.splice(index, 1);
        }
        setCartItems(updatedArray);
    }

    const handleIncrement = (item) => {
        const index = cartItems.findIndex(obj => (
            obj.name === item.name &&
            obj.price === item.price &&
            obj.selectedSize === item.selectedSize
        ));

        const updatedArray = [...cartItems];
        updatedArray[index].value += 1;
        if (updatedArray[index].value < 6) {
            setCartItems(updatedArray);
        }
    }

    const handleRemove = (item) => {
        const index = cartItems.findIndex(obj => (
            obj.name === item.name &&
            obj.price === item.price &&
            obj.selectedSize === item.selectedSize
        ));

        const updatedArray = [...cartItems];
        updatedArray.splice(index, 1);
        setCartItems(updatedArray);
    }

    const handleCheckout = () => {
        alert(`Checkout: ${cartCount} products for subtotal $${subtotal.toFixed(2)} `)
        setIsViewCartOpen(false);
        setCartItems([]);
    }

    const subtotal = cartItems.reduce((acc, currentProduct) => acc + currentProduct.value * currentProduct.price, 0);

    return (
        <>
            <div
                onClick={() => setIsViewCartOpen(false)}
                className="fixed inset-0 z-50 bg-black opacity-30">

            </div>
            <div className="animate-slideinRegular fixed top-0 right-0 w-[400px] h-screen flex flex-col z-50 bg-white drop-shadow-lg">
                <div className="bg-black h-[100px]">
                    <button className="" onClick={() => { setIsViewCartOpen(false) }}><X color="white" /></button>
                    <h3 className="text-5xl text-center text-white pb-2">Cart ({cartCount})</h3>
                </div>
                {
                    cartItems.length === 0 &&
                    <>
                    <div className="flex justify-center pt-10">
                        <h6 className="font-semibold">No items in cart</h6>
                    </div>
                    </>
                }
                {
                    cartItems.length > 0 &&
                    <>
                        <div className="flex-1 h-auto mt-5 gap-2 overflow-auto">
                            {
                                cartItems.map((item) => (
                                    <>
                                        <div className="grid grid-cols-[1fr,2fr,0.25fr] px-1 gap-1 my-3" key={item.name}>
                                            <div><img src={item.imgSrc[0]} alt="" /></div>
                                            <div>
                                                <h5 className="font-bold text-md">{item.name}</h5>
                                                <div className="text-xs">
                                                    size: <span className="text-lg">{item.selectedSize}</span>
                                                </div>
                                                <div className="flex items-center h-15 py-3">
                                                    <button
                                                        onClick={() => handleDecrement({
                                                            name: item.name,
                                                            selectedSize: item.selectedSize,
                                                            price: item.price,
                                                            value: item.value
                                                        })}
                                                        className="w-4 text-gray-500 hover:text-gray-700 border"
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="text-center w-10 border-t border-b text-gray-700"
                                                        value={item.value}
                                                        inputMode="none"
                                                        onChange={() => { }}
                                                    />
                                                    <button
                                                        onClick={() => handleIncrement({
                                                            name: item.name,
                                                            selectedSize: item.selectedSize,
                                                            price: item.price,
                                                            value: item.value
                                                        })}
                                                        className="w-4 text-gray-500 hover:text-gray-700 border"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <div>${(item.price * item.value).toFixed(2)}</div>
                                                <button onClick={() => handleRemove({
                                                    name: item.name,
                                                    selectedSize: item.selectedSize,
                                                    price: item.price,
                                                    value: item.value
                                                })}>
                                                    <div className="flex justify-center text-sm underline hover:text-[#cdaf8c]">Remove</div>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className="h-[150px]">
                            <h6 className="text-3xl font-bold flex justify-between"><span>Subtotal: </span><span>${subtotal.toFixed(2)}</span></h6>
                            <button className="bg-[#cdaf8c] w-full h-20 font-bold text-2xl ease-in-out delay-150 duration-150 hover:text-[#cdaf8c] hover:bg-black" onClick={() => handleCheckout()}>Checkout</button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart