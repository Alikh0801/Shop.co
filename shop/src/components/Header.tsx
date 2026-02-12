import { Search, ShoppingCart, UserCircle, ChevronDown, X } from 'lucide-react';

function Header() {
    return (
        <header className="w-full">
            <div className="bg-black text-white py-2 px-4 flex justify-center items-center relative text-sm">
                <p>
                    Sign up and get 20% off to your first order.{" "}
                    <a href="#"><button className="underline font-bold cursor-pointer">Sign Up Now</button></a>
                </p>
                <X className="absolute right-4 cursor-pointer w-4 h-4 hidden md:block" />
            </div>

            <nav className="container mx-auto py-6 flex items-center justify-between gap-4 md:gap-8">
                <a href="/"><h1 className="text-2xl md:text-3xl font-black tracking-tighter">SHOP.CO</h1></a>

                <ul className="hidden lg:flex items-center gap-6 font-medium">
                    <li className="flex items-center gap-1 cursor-pointer">Shop <ChevronDown size={16} /></li>
                    <li className="cursor-pointer">On Sale</li>
                    <li className="cursor-pointer">New Arrivals</li>
                    <li className="cursor-pointer">Brands</li>
                </ul>

                <div className="flex-1 max-w-md hidden md:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-3">
                    <Search className="text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none w-full text-sm"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Search className="md:hidden cursor-pointer" size={24} />
                    <div className="relative cursor-pointer">
                        <ShoppingCart size={24} />
                    </div>
                    <UserCircle size={24} className="cursor-pointer" />
                </div>
            </nav>
        </header>
    )
}

export default Header;