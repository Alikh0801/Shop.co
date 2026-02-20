function ProductCardSkeleton() {
    return (
        <div className="flex flex-col gap-2 animate-pulse">
            <div className="rounded-[20px] aspect-square overflow-hidden bg-gray-200" />
            <div className="h-5 bg-gray-200 rounded w-3/4 mt-2" />
            <div className="flex gap-1 mt-1">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-8 bg-gray-200 rounded" />
            </div>
            <div className="h-6 w-16 bg-gray-200 rounded mt-1" />
        </div>
    );
}

export default ProductCardSkeleton;
