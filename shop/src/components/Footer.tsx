import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#F0F0F0] pt-10 pb-10 relative mt-40 md:mt-32">
            <div className="container mx-auto px-4 absolute -top-36 md:-top-24 left-1/2 -translate-x-1/2 w-full">
                <div className="bg-black rounded-[20px] py-8 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                    <h2 className="text-white text-3xl md:text-4xl font-black leading-tight max-w-137.5 text-left">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="flex flex-col gap-3 w-full max-w-full md:max-w-87.5">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full py-3 px-12 rounded-full outline-none text-sm bg-white"
                            />
                        </div>
                        <button className="bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition-all text-sm w-full">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-48 md:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 border-b border-gray-200 pb-12">

                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-black mb-4 md:mb-6">SHOP.CO</h3>
                        <p className="text-gray-600 text-sm mb-6 md:mb-8 leading-relaxed max-w-62.5">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
                                <Twitter size={16} />
                            </div>
                            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                                <Facebook size={16} />
                            </div>
                            <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
                                <Instagram size={16} />
                            </div>
                            <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
                                <Github size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:contents gap-8 col-span-1 md:col-span-4">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 md:mb-6 text-sm">Company</h4>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-600 text-sm">
                                <li className="cursor-pointer hover:text-black">About</li>
                                <li className="cursor-pointer hover:text-black">Features</li>
                                <li className="cursor-pointer hover:text-black">Works</li>
                                <li className="cursor-pointer hover:text-black">Career</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 md:mb-6 text-sm">Help</h4>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-600 text-sm">
                                <li className="cursor-pointer hover:text-black">Customer Support</li>
                                <li className="cursor-pointer hover:text-black">Delivery Details</li>
                                <li className="cursor-pointer hover:text-black">Terms & Conditions</li>
                                <li className="cursor-pointer hover:text-black">Privacy Policy</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 md:mb-6 text-sm">FAQ</h4>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-600 text-sm">
                                <li className="cursor-pointer hover:text-black">Account</li>
                                <li className="cursor-pointer hover:text-black">Manage Deliveries</li>
                                <li className="cursor-pointer hover:text-black">Orders</li>
                                <li className="cursor-pointer hover:text-black">Payments</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 md:mb-6 text-sm">Resources</h4>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-600 text-sm">
                                <li className="cursor-pointer hover:text-black">Free eBooks</li>
                                <li className="cursor-pointer hover:text-black">Development Tutorial</li>
                                <li className="cursor-pointer hover:text-black">How to - Blog</li>
                                <li className="cursor-pointer hover:text-black">Youtube Playlist</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4 border-t md:border-t-0 mt-4 md:mt-0">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Shop.co © 2000-2023, All Rights Reserved
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <img src="../images/cards/visa.png" alt="Visa" className="h-7 bg-white px-2 py-1 rounded shadow-sm border border-gray-100" />
                        <img src="../images/cards/mc.webp" alt="Mastercard" className="h-7 bg-white px-2 py-1 rounded shadow-sm border border-gray-100" />
                        <img src="../images/cards/paypal.png" alt="Paypal" className="h-7 bg-white px-2 py-1 rounded shadow-sm border border-gray-100" />
                        <img src="../images/cards/applepay.png" alt="Apple Pay" className="h-7 bg-white px-2 py-1 rounded shadow-sm border border-gray-100" />
                        <img src="../images/cards/googlepay.png" alt="Google Pay" className="h-7 bg-white px-2 py-1 rounded shadow-sm border border-gray-100" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;