import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ activeTab = 'ARTISTS', setActiveTab }) {
    const navigation = [
        { name: 'GALLERY', current: activeTab === 'GALLERY' },
        { name: 'ARTISTS', current: activeTab === 'ARTISTS' },
        { name: 'CUSTOM ORDERS', current: activeTab === 'CUSTOM ORDERS' },
        { name: 'EXHIBITIONS', current: activeTab === 'EXHIBITIONS' },
    ]
    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all duration-250 focus:outline-hidden">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden transition-transform duration-200" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block transition-transform duration-200" />
                        </DisclosureButton>
                    </div>

                    {/* Logo - Left */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex shrink-0 items-center">
                            <span className="font-serif text-2xl font-bold tracking-tight text-gray-900 hover:opacity-90 transition-opacity">
                                ArtisanHub
                            </span>
                        </a>

                        {/* Desktop Navigation Links - Centered */}
                        <div className="hidden sm:flex sm:flex-1 sm:justify-center items-center">
                            <div className="flex space-x-8 lg:space-x-10">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setActiveTab && setActiveTab(item.name)
                                        }}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-950 border-b-2 border-gray-900 font-bold'
                                                : 'text-gray-500 border-b-2 border-transparent hover:text-gray-950 hover:border-gray-200',
                                            'px-1 py-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer focus:outline-hidden'
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                        {/* Shopping Bag */}
                        <button
                            type="button"
                            className="relative rounded-full p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-50 transition-all duration-200 focus:outline-hidden"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View cart</span>
                            <ShoppingBagIcon aria-hidden="true" className="size-5 transition-transform duration-200 hover:scale-105" />
                        </button>

                        {/* User Profile */}
                        <button
                            type="button"
                            onClick={() => setActiveTab && setActiveTab('SIGNUP')}
                            className="relative rounded-full p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-50 transition-all duration-200 focus:outline-hidden cursor-pointer"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">User menu</span>
                            <UserIcon aria-hidden="true" className="size-5 transition-transform duration-200 hover:scale-105" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden border-t border-gray-100 bg-white">
                <div className="space-y-1 px-3 pt-2 pb-4 shadow-xs">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveTab && setActiveTab(item.name)
                            }}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-50 text-gray-950 font-bold w-full text-left'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950 w-full text-left',
                                'block rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wider transition-all duration-150 cursor-pointer focus:outline-hidden'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
