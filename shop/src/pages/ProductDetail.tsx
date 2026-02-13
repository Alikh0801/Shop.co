import { Star, Minus, Plus, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            getProductsById(id).then(data => {
                setProduct(data);
                setLoading(false);
            });
        }
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart({
            ...product,
            quantity: quantity
        }));
    }

    if (loading) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-10">
            <nav className="flex text-sm text-gray-500 mb-8">
                Home &gt; Shop &gt; {product.category}
            </nav>

            <div className="grid md:grid-cols-2 gap-10">
                {/* left side */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    <div className="flex md:flex-col gap-4 overflow-x-auto">
                        {product.images?.slice(0, 3).map((img: string, index: number) => (
                            <img key={index} src={img} className="w-24 h-24 object-cover rounded-[20px] bg-[#F0EEED] cursor-pointer" />
                        ))}
                    </div>
                    <div className="flex-1 bg-[#F0EEED] rounded-[20px] flex items-center justify-center p-10">
                        <img src={product.image} alt={product.title} className="max-h-100 object-contain" />
                    </div>
                </div>

                {/* right side */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-black uppercase">{product.title}</h1>

                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className="text-sm">{product.rating.rate}/5</span>
                    </div>

                    <div className="flex items-center gap-3 text-2xl font-bold">
                        <span>${product.price}</span>
                        {product.discountPercentage && (
                            <>
                                <span className="text-gray-400 line-through">${Math.round(product.price * 1.2)}</span>
                                <span className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">-{Math.round(product.discountPercentage)}%</span>
                            </>
                        )}
                    </div>

                    <p className="text-gray-500 border-b border-gray-100 pb-6">{product.description}</p>

                    {/* color */}
                    <div className="py-4 border-b border-gray-100">
                        <p className="text-gray-500 mb-3">Select Colors</p>
                        <div className="flex gap-3">
                            {['#4F4631', '#314F4A', '#31344F'].map(color => (
                                <div key={color} style={{ backgroundColor: color }} className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center">
                                    {color === '#4F4631' && <Check className="text-white" size={16} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* size */}
                    <div className="py-4 border-b border-gray-100">
                        <p className="text-gray-500 mb-3">Choose Size</p>
                        <div className="flex gap-3">
                            {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                                <button key={size} className={`px-6 py-3 rounded-full text-sm ${size === 'Large' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-gray-600'}`}>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* count/add to card */}
                    <div className="flex gap-4 pt-6">
                        <div className="flex items-center bg-[#F0F0F0] px-6 py-4 rounded-full gap-6">
                            <Minus className="cursor-pointer" onClick={() => quantity > 1 && setQuantity(quantity - 1)} />
                            <span className="font-bold">{quantity}</span>
                            <Plus className="cursor-pointer" onClick={() => setQuantity(quantity + 1)} />
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-black text-white rounded-full font-medium py-4 hover:bg-gray-800 transition-all"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;