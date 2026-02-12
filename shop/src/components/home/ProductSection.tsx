import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import ProductCard from "../ProductCard";


interface ProductSectionProps {
    title: string;
    products: Product[];
    loading: boolean;
}

const ProductSection = ({ title, products, loading }: ProductSectionProps) => {
    if (loading) return <div className="text-center py-20 animate-pulse">Loading products...</div>;

    return (
        <section className="py-12 md:py-16 container mx-auto px-4 border-b border-gray-100">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-14 uppercase tracking-tighter">
                {title}
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-8 md:mt-12">
                <Link
                    to="/shop"
                    className="w-full md:w-auto px-16 py-4 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 text-base text-center"
                >
                    View All
                </Link>
            </div>
        </section>
    );
};

export default ProductSection;