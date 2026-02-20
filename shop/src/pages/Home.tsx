import { useDispatch, useSelector } from "react-redux"
import Brands from "../components/Brands"
import Hero from "../components/Hero"
import type { AppDispatch, RootState } from "../app/store"
import { useEffect } from "react";
import { fetchProducts } from "../features/ProductSlice";
import ProductSection from "../components/home/ProductSection";

function Home() {
    const dispatch = useDispatch<AppDispatch>();

    const { items, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts({ limit: 8 }));
    }, [dispatch]);

    const newArrivals = items.slice(0, 4);
    const topSelling = items.slice(4, 8);

    return (
        <div className="w-full">
            <Hero />
            <Brands />

            {error && (
                <div className="text-center py-10 text-red-500">
                    Xəta baş verdi: {error}
                </div>
            )}

            {/* New Arrivals */}
            <ProductSection
                title="NEW ARRIVALS"
                products={newArrivals}
                loading={loading}
            />

            {/* Top Selling */}
            <ProductSection
                title="TOP SELLING"
                products={topSelling}
                loading={loading}
            />
        </div>
    );
}

export default Home;