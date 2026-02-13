import { Trash2, Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { removeFromCart, updateQuantity } from "../features/CartSlice";

const Cart = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-black mb-8">YOUR CART</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* left side */}
                <div className="lg:col-span-2 border rounded-[20px] p-4 md:p-6 flex flex-col gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 border-b pb-6 last:border-b-0">
                            <img src={item.image} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg bg-[#F0F0F0]" />
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg md:text-xl uppercase">{item.title}</h3>
                                        <p className="text-sm text-gray-500">Size: Large</p>
                                    </div>
                                    <Trash2
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    />
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-xl md:text-2xl">${item.price}</span>
                                    <div className="flex items-center bg-[#F0F0F0] px-4 py-2 rounded-full gap-4">
                                        <Minus size={18} className="cursor-pointer" onClick={() => dispatch(updateQuantity({ id: item.id, type: 'minus' }))} />
                                        <span className="font-bold">{item.quantity}</span>
                                        <Plus size={18} className="cursor-pointer" onClick={() => dispatch(updateQuantity({ id: item.id, type: 'plus' }))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* right side */}
                <div className="border rounded-[20px] p-6 h-fit flex flex-col gap-6">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="flex flex-col gap-4 text-gray-600">
                        <div className="flex justify-between"><span>Subtotal</span><span className="text-black font-bold">${subtotal}</span></div>
                        <div className="flex justify-between"><span>Discount (-20%)</span><span className="text-red-500 font-bold">-${Math.round(subtotal * 0.2)}</span></div>
                        <div className="flex justify-between border-t pt-4 text-black text-xl font-bold">
                            <span>Total</span><span>${Math.round(subtotal * 0.8)}</span>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white py-4 rounded-full font-medium mt-4">
                        Go to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;