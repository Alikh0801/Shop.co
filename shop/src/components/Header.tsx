import { Search, ShoppingCart, UserCircle, ChevronDown, X, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { searchProducts } from '../api/productApi';

function Header() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Array<{ id: number; title: string; price: number; image: string }>>([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const mobileSearchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            setShowSearchDropdown(false);
            return;
        }
        const timer = setTimeout(() => {
            setSearchLoading(true);
            searchProducts(searchQuery)
                .then((data) => {
                    setSearchResults(data);
                    setShowSearchDropdown(true);
                })
                .finally(() => setSearchLoading(false));
        }, 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setShowSearchDropdown(false);
            }
            if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target as Node)) {
                setIsMobileSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-white sticky top-0 z-50">
            <div className="bg-black text-white py-2 px-4 flex justify-center items-center relative text-sm">
                <p>
                    Sign up and get 20% off to your first order.{" "}
                    <Link to="/signup" className="underline font-bold cursor-pointer">Sign Up Now</Link>
                </p>
                <X className="absolute right-4 cursor-pointer w-4 h-4 hidden md:block" />
            </div>

            <nav className="container mx-auto py-6 flex items-center justify-between gap-4 md:gap-8 px-4">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <Link to="/">
                        <h1 className="text-2xl md:text-3xl font-black tracking-tighter">SHOP.CO</h1>
                    </Link>
                </div>

                <ul className="hidden lg:flex items-center gap-6 font-medium">
                    <li>
                        <Link to="/shop" className="flex items-center gap-1 cursor-pointer">Shop <ChevronDown size={16} /></Link>
                    </li>
                    <li className="cursor-pointer">On Sale</li>
                    <li className="cursor-pointer">New Arrivals</li>
                    <li className="cursor-pointer">Brands</li>
                </ul>

                <div className="flex-1 max-w-md hidden md:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-3 relative" ref={searchRef}>
                    <Search className="text-gray-400 shrink-0" size={20} />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none w-full text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery.trim() && setShowSearchDropdown(true)}
                    />
                    {showSearchDropdown && (
                        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
                            {searchLoading ? (
                                <div className="p-4 text-center text-gray-500">Searching...</div>
                            ) : searchResults.length === 0 ? (
                                <div className="p-4 text-center text-gray-500">No result found</div>
                            ) : (
                                <ul className="py-2">
                                    {searchResults.map((p) => (
                                        <li key={p.id}>
                                            <Link
                                                to={`/product/${p.id}`}
                                                onClick={() => {
                                                    setTimeout(() => {
                                                        setShowSearchDropdown(false);
                                                        setSearchQuery('');
                                                    }, 100);
                                                }}
                                                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                                            >
                                                <img src={p.image} alt="" className="w-10 h-10 object-cover rounded" />
                                                <div className="flex-1 min-w-0">
                                                    <span className="font-medium truncate block">{p.title}</span>
                                                    <span className="text-sm text-gray-500">${p.price}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            setIsMobileSearchOpen((prev) => !prev);
                            if (!isMobileSearchOpen) setIsMenuOpen(false);
                        }}
                        className="md:hidden p-1"
                        aria-label="Search"
                    >
                        <Search size={24} />
                    </button>

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

            {/* Mobil search */}
            {isMobileSearchOpen && (
                <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg z-50" ref={mobileSearchRef}>
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-3 relative">
                            <Search className="text-gray-400 shrink-0" size={20} />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="bg-transparent outline-none w-full text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => searchQuery.trim() && setShowSearchDropdown(true)}
                                autoFocus
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchQuery('');
                                        setShowSearchDropdown(false);
                                    }}
                                    className="shrink-0"
                                >
                                    <X size={18} className="text-gray-400" />
                                </button>
                            )}
                        </div>
                        {showSearchDropdown && (
                            <div className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                                {searchLoading ? (
                                    <div className="p-4 text-center text-gray-500">Axtarılır...</div>
                                ) : searchResults.length === 0 ? (
                                    <div className="p-4 text-center text-gray-500">Nəticə tapılmadı</div>
                                ) : (
                                    <ul className="py-2">
                                        {searchResults.map((p) => (
                                            <li key={p.id}>
                                                <Link
                                                    to={`/product/${p.id}`}
                                                    onClick={() => {
                                                        setTimeout(() => {
                                                            setShowSearchDropdown(false);
                                                            setSearchQuery('');
                                                        }, 100);
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                                                >
                                                    <img src={p.image} alt="" className="w-10 h-10 object-cover rounded" />
                                                    <div className="flex-1 min-w-0">
                                                        <span className="font-medium truncate block">{p.title}</span>
                                                        <span className="text-sm text-gray-500">${p.price}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* hamburger menyu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg z-40">
                    <ul className="container mx-auto py-4 px-4 flex flex-col gap-1 font-medium">
                        <li>
                            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50">
                                Shop <ChevronDown size={16} />
                            </Link>
                        </li>
                        <li>
                            <span className="block py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer">On Sale</span>
                        </li>
                        <li>
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 rounded-lg hover:bg-gray-50">New Arrivals</Link>
                        </li>
                        <li>
                            <span className="block py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer">Brands</span>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;