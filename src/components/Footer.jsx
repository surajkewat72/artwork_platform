import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    return (
        <footer className="bg-[#e5e5e5] text-gray-900 border-t border-gray-300/40">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-serif text-3xl font-semibold tracking-tight text-gray-900">
                            ArtisanHub
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-600/90 max-w-xs">
                            Connecting connoisseurs with the world's most talented independent artisans since 2024.
                        </p>
                    </div>

                    {/* Categories Column */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
                            Categories
                        </h3>
                        <ul className="space-y-3.5">
                            {['Ceramics', 'Oil Paintings', 'Sculptures', 'Photography'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-950 transition-colors duration-150"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
                            Support
                        </h3>
                        <ul className="space-y-3.5">
                            {['Shipping Info', 'Return Policy', 'Contact Us', 'Artist FAQ'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-950 transition-colors duration-150"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                            Newsletter
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600/90">
                            Join our inner circle for exclusive drops and artist stories.
                        </p>
                        <form className="flex w-full max-w-sm items-stretch mt-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-[#f4f4f4]/90 text-gray-800 placeholder-gray-500/80 border border-transparent focus:border-gray-300 focus:bg-white focus:outline-hidden px-4 py-3 text-sm transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="bg-[#121212] text-white hover:bg-black px-4.5 transition-colors duration-150 flex items-center justify-center shrink-0"
                            >
                                <ArrowRightIcon className="size-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                {/* <div className="mt-16 pt-8 border-t border-gray-300/60 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600/80">
                        &copy; 2024 ArtisanHub. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-950 transition-colors duration-150"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-950 transition-colors duration-150"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}
 