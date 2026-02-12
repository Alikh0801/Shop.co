import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/ProductSlice";
import ProductCard from "../components/ProductCard";


function Shop() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts(20));
    }, [dispatch]);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-black mb-10 uppercase">All Products</h1>
            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Shop;