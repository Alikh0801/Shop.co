import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../features/ProductSlice";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 12;

function Shop() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, total } = useSelector((state: RootState) => state.products);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(total / PAGE_SIZE) || 1;

    useEffect(() => {
        dispatch(fetchProducts({ limit: PAGE_SIZE, skip: (currentPage - 1) * PAGE_SIZE }));
    }, [dispatch, currentPage]);

    const goToPage = (page: number) => {
        const p = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(p);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-black mb-10 uppercase">All Products</h1>
            {loading ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 pb-10">
                            <button
                                type="button"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage <= 1}
                                className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter((p) => {
                                        if (totalPages <= 7) return true;
                                        if (p === 1 || p === totalPages) return true;
                                        if (Math.abs(p - currentPage) <= 1) return true;
                                        return false;
                                    })
                                    .reduce<number[]>((acc, p, i, arr) => {
                                        const prev = arr[i - 1];
                                        if (prev !== undefined && p - prev > 1) acc.push(-1);
                                        acc.push(p);
                                        return acc;
                                    }, [])
                                    .map((p, idx) =>
                                        p === -1 ? (
                                            <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => goToPage(p)}
                                                className={`w-10 h-10 rounded-full font-medium ${p === currentPage
                                                    ? "bg-black text-white"
                                                    : "border border-gray-300 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        )
                                    )}
                            </div>
                            <button
                                type="button"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage >= totalPages}
                                className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}

                    <p className="text-center text-gray-500 text-sm pb-4">
                        Page {currentPage} / {totalPages} · Total {total} product
                    </p>
                </>
            )}
        </div>
    );
}

export default Shop;
