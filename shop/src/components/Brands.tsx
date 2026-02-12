
function Brands() {
    const brandLogos = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

    return (
        <div className="bg-black py-10">
            <div className="container mx-auto flex flex-wrap justify-around items-center gap-8 px-4">
                {brandLogos.map((brand) => (
                    <span
                        key={brand}
                        className="text-white text-2xl md:text-3xl font-serif tracking-widest opacity-90 hover:opacity-100 transition-opacity"
                    >
                        {brand}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Brands;