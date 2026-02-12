
function Hero() {
    return (
        <section className="bg-[#F2F0F1] w-full overflow-hidden">
            <div className="container mx-auto max-h-220 grid md:grid-cols-2 items-center relative pt-10 md:pt-0">

                <div className="z-10 px-4 md:px-0">
                    <h2 className="max-w-130 text-4xl md:text-6xl font-black leading-tight mb-4 lg:mb-8">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mb-6 lg:mb-10 max-w-md">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button className="bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-gray-800 transition-all mb-12">
                        Shop Now
                    </button>

                    <div className="flex flex-wrap gap-8 md:gap-12 mb-10">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold">200+</h3>
                            <p className="text-gray-500 text-xs md:text-sm">International Brands</p>
                        </div>
                        <div className="border-x border-gray-300 px-8 md:px-12">
                            <h3 className="text-2xl md:text-4xl font-bold">2,000+</h3>
                            <p className="text-gray-500 text-xs md:text-sm">High-Quality Products</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold">30,000+</h3>
                            <p className="text-gray-500 text-xs md:text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="../images/hero/hero.jpg"
                        alt="Fashion Models"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;