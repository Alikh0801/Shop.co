import { Search, ShoppingCart, UserCircle, ChevronDown, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Link } from 'react-router-dom';

function Header() {
    // Səbətdəki məhsulların ümumi sayını hesablayırıq
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="w-full bg-white sticky top-0 z-50">
            {/* Üst Qara Lent */}
            <div className="bg-black text-white py-2 px-4 flex justify-center items-center relative text-sm">
                <p>
                    Sign up and get 20% off to your first order.{" "}
                    <Link to="/signup" className="underline font-bold cursor-pointer">Sign Up Now</Link>
                </p>
                <X className="absolute right-4 cursor-pointer w-4 h-4 hidden md:block" />
            </div>

            {/* Naviqasiya */}
            <nav className="container mx-auto py-6 flex items-center justify-between gap-4 md:gap-8 px-4">
                {/* Logo */}
                <Link to="/">
                    <h1 className="text-2xl md:text-3xl font-black tracking-tighter">SHOP.CO</h1>
                </Link>

                {/* Menyu Linkləri */}
                <ul className="hidden lg:flex items-center gap-6 font-medium">
                    <li className="flex items-center gap-1 cursor-pointer">Shop <ChevronDown size={16} /></li>
                    <li className="cursor-pointer">On Sale</li>
                    <li className="cursor-pointer">New Arrivals</li>
                    <li className="cursor-pointer">Brands</li>
                </ul>

                {/* Axtarış Çubuğu */}
                <div className="flex-1 max-w-md hidden md:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-3">
                    <Search className="text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none w-full text-sm"
                    />
                </div>

                {/* İkonlar */}
                <div className="flex items-center gap-4">
                    <Search className="md:hidden cursor-pointer" size={24} />

                    {/* Səbət İkonu və Sayğac */}
                    <Link to="/cart" className="relative cursor-pointer">
                        <ShoppingCart size={24} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <UserCircle size={24} className="cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}

export default Header;