import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";


interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

    const currentRating = product.rating?.rate || 0;

    return (
        <Link to={`/product/${product.id}`} className="flex flex-col gap-2 group cursor-pointer">
            <div className="bg-[#F0EEED] rounded-[20px] aspect-square overflow-hidden flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150')}
                />
            </div>

            <h3 className="font-bold text-base md:text-lg mt-2 truncate">
                {product.title}
            </h3>

            <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            fill={i < Math.round(currentRating) ? "currentColor" : "none"}
                            className={i < Math.round(currentRating) ? "" : "text-gray-300"}
                        />
                    ))}
                </div>
                <span className="text-sm text-black ml-1">
                    {currentRating}/<span className="text-gray-400">5</span>
                </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <span className="font-bold text-xl md:text-2xl">${product.price}</span>
            </div>
        </Link>
    );
};
export default ProductCard;