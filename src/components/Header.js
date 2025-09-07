'use client'
import React, { useState } from 'react';
import {
    ChevronDown,
    Home,
    FolderCode,
    Utensils,
    ShoppingCart,
    Puzzle,
    ScanText,
    Workflow,
    Users,
    Globe,
    Clock,
    Phone,
    Mail,
    MapPin,
    Coffee,
    UtensilsCrossed,
    Calculator,
    Store,
    Warehouse,
    MessageSquare,
    FileText,
    Menu,
    X,
    ChevronLeft
} from 'lucide-react';

import Image from 'next/image'
import Link from 'next/link';
import logo from '../../public/images/logoHeader.png'
const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    const menuItems = [
        {
            title: 'خانه',
            icon: <Home className="w-4 h-4" />,
            href: '/'
        },
        {
            title: 'نرم افزار ها',
            icon: <FolderCode className="w-4 h-4" />,
            hasDropdown: true,
            submenu: {
                columns: [
                    {
                        title: 'نرم افزار رستوران و فست فود',
                        icon: <Utensils className="w-5 h-5 text-blue-600" />,
                    },
                    {
                        title: '   نرم افزار تشخیص هوشمند پلاک خودرو  ',
                        icon: <ScanText className="w-5 h-5 text-green-600" />,
                    },
                    {
                        title: ' نرم افزار کافی شاپ ',
                        icon: <Coffee className="w-5 h-5 text-purple-600" />,
                    },
                    {
                        title: ' نرم افزار جامع فروش و حسابداری ',
                        icon: <Calculator className="w-5 h-5 text-orange-600" />,
                    },
                    {
                        title: ' اتوماسیون جامع کانبان ',
                        icon: <Workflow className="w-5 h-5 text-orange-600" />,
                    },
                    {
                        title: ' نرم افزار انبار شناور ',
                        icon: <Warehouse className="w-5 h-5 text-orange-600" />,
                    },
                    {
                        title: ' سامانه مدیریت سفارش گیری و توزین بتن و آسفالت ',
                        icon: <Warehouse className="w-5 h-5 text-orange-600" />,
                    }
                ]
            }
        },
        {
            title: ' افزونه ها ',
            icon: <Puzzle className="w-4 h-4" />,
            hasDropdown: true,
            submenu: {
                columns: [
                    {
                        title: 'رستوران‌ها',
                        icon: <UtensilsCrossed className="w-5 h-5 text-red-600" />,
                        items: [
                            { title: 'رستوران فاین داینینگ', icon: <UtensilsCrossed className="w-4 h-4" />, href: '/fine-dining' },
                            { title: 'رستوران خانوادگی', icon: <Users className="w-4 h-4" />, href: '/family-restaurant' },
                            { title: 'رستوران سنتی', icon: <Home className="w-4 h-4" />, href: '/traditional' }
                        ]
                    },
                    {
                        title: 'کافی شاپ‌ها',
                        icon: <Coffee className="w-5 h-5 text-amber-600" />,
                        items: [
                            { title: 'کافی شاپ', icon: <Coffee className="w-4 h-4" />, href: '/coffee-shop' },
                            { title: 'کافه رستوران', icon: <Store className="w-4 h-4" />, href: '/cafe-restaurant' },
                            { title: 'کافه بوک', icon: <FileText className="w-4 h-4" />, href: '/book-cafe' }
                        ]
                    },
                    {
                        title: 'فست فود',
                        icon: <ShoppingCart className="w-5 h-5 text-yellow-600" />,
                        items: [
                            { title: 'فست فود', icon: <ShoppingCart className="w-4 h-4" />, href: '/fast-food' },
                            { title: 'پیتزا', icon: <UtensilsCrossed className="w-4 h-4" />, href: '/pizza' },
                            { title: 'ساندویچی', icon: <Store className="w-4 h-4" />, href: '/sandwich' }
                        ]
                    },
                    {
                        title: 'سایر',
                        icon: <Store className="w-5 h-5 text-indigo-600" />,
                        items: [
                            { title: 'فودکورت', icon: <Store className="w-4 h-4" />, href: '/food-court' },
                            { title: 'کترینگ', icon: <UtensilsCrossed className="w-4 h-4" />, href: '/catering' },
                            { title: 'تک شعبه', icon: <MapPin className="w-4 h-4" />, href: '/single-branch' },
                            { title: 'زنجیره‌ای', icon: <Globe className="w-4 h-4" />, href: '/chain' }
                        ]
                    }
                ]
            }
        },


        {
            title: 'تماس با ما',
            icon: <Phone className="w-4 h-4" />,
            hasDropdown: true,
            submenu: {
                columns: [
                    {
                        title: 'تلفن تماس',
                        icon: <Phone className="w-4 h-4 text-amber-500" />,
                        href: '/contact',
                       
                    },
                    {
                        title: 'ایمیل',
                        icon: <Mail className="w-4 h-4 text-amber-700" />,
                        href: '/email',
                        
                    },
                    {
                        title: 'آدرس',
                        icon: <MapPin className="w-4 h-4 text-fuchsia-600" />,
                        href: '/address',
                       
                    },
                    {
                        title: 'پشتیبانی 7/24',
                        icon: <Clock className="w-4 h-4 text-rose-800" />,
                        href: '/support'
                    },
                    {
                        title: 'مشاوره رایگان',
                        icon: <MessageSquare className="w-4 h-4 text-cyan-700" />,
                        href: '/consultation'
                    },
                    {
                        title: 'آموزش',
                        icon: <FileText className="w-4 h-4 text-blue-600" />,
                        href: '/training'
                    }
                ]
            }
        },
        {
            title: 'بلاگ',
            icon: <FileText className="w-4 h-4" />,
            href: '/blog'
        }
    ];

    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveMobileSubmenu(null);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    return (
        <nav className="relative bg-[#FFAC30] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] mb-1 overflow-visible" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <Image
                                src={logo}
                                width={170}
                                height={130}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-baseline space-x-6 xl:space-x-8 space-x-reverse">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                                    onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                                >
                                    <a
                                        href={item.href || '#'}
                                        className={`flex items-center px-2 lg:px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${activeMenu === index
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.icon}
                                        <span className="mr-2">{item.title}</span>
                                        {item.hasDropdown && (
                                            <ChevronDown className={`mr-1 h-4 w-4 transition-transform duration-200 ${activeMenu === index ? 'rotate-180' : ''
                                                }`} />
                                        )}
                                    </a>

                                    {item.hasDropdown && activeMenu === index && (
                                        <div className="absolute top-full right-0 bg-white shadow-xl border border-gray-200 rounded-lg  z-50 min-w-lg">
                                            <div className="p-4 lg:p-6">
                                                <div className="grid grid-cols-2  gap-4 lg:gap-6 min-w-0">
                                                    {item.submenu.columns.map((column, colIndex) => (
                                                        <div key={colIndex} className="space-y-3">
                                                            <div className="flex items-center space-x-2 space-x-reverse pb-2 border-b border-gray-100">
                                                                <div className="flex-shrink-0">{column.icon}</div>
                                                                <h3 className="text-sm  font-semibold text-gray-900 whitespace-nowrap">
                                                                    {column.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="block">
                        <button className=" px-6 py-2 border-1 border-[#243954] text-[#243954] rounded-lg ml-2 text-sm font-medium">
                            <Link href="/signin">
                                ورود
                            </Link>
                        </button>
                        <button className="bg-primary text-secondary px-6 py-2 rounded-lg text-sm font-medium shadow-md relative before:absolute before:inset-1 before:rounded-lg before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none">
                            <Link href="/">
                                دموی رایگان
                            </Link>
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="bg-gray-100 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

               

                <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        {menuItems.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex items-center justify-between">
                                    {item.hasDropdown ? (
                                        // اگه زیرمنو داره، فقط دکمه باشه نه لینک
                                        <button
                                            onClick={() => toggleMobileSubmenu(index)}
                                            className="flex items-center flex-1 px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-right"
                                        >
                                            {item.icon}
                                            <span className="mr-3">{item.title}</span>
                                            <ChevronLeft className={`h-5 w-5 transition-transform duration-200 mr-auto ${activeMobileSubmenu === index ? 'rotate-90' : ''
                                                }`} />
                                        </button>
                                    ) : (
                                        // اگه زیرمنو نداره، لینک معمولی
                                        <a
                                            href={item.href}
                                            className="flex items-center flex-1 px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.icon}
                                            <span className="mr-3">{item.title}</span>
                                        </a>
                                    )}
                                </div>

                                {item.hasDropdown && activeMobileSubmenu === index && (
                                    <div className="bg-gray-50 rounded-lg p-3 space-y-4">
                                        {item.submenu.columns && item.submenu.columns.map((column, colIndex) => (
                                            <div key={colIndex} className="space-y-3">
                                                <div className="flex items-center space-x-2 space-x-reverse border-b border-gray-200 pb-2">
                                                    {column.icon}
                                                    <h4 className="text-sm font-semibold text-gray-900">
                                                        {column.title}
                                                    </h4>
                                                </div>

                                                {/* اگه column.items وجود داره نمایش بده */}
                                                {column.items && column.items.map && (
                                                    <div className="space-y-2 pr-4">
                                                        {column.items.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                onClick={toggleMobileMenu}
                                                                className="flex items-center space-x-3 space-x-reverse p-2 rounded-md hover:bg-white transition-colors duration-200"
                                                            >
                                                                <div className="flex-shrink-0">
                                                                    {subItem.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <p className="text-sm text-gray-700 hover:text-blue-600">
                                                                        {subItem.title}
                                                                    </p>
                                                                    
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* اگه column مستقیم href داره */}
                                                {column.href && (
                                                    <a
                                                        href={column.href}
                                                        onClick={toggleMobileMenu}
                                                        className="block p-2 rounded-md hover:bg-white transition-colors duration-200"
                                                    >
                                                        <p className="text-sm text-gray-700 hover:text-blue-600">
                                                            {column.extra && (
                                                                <span className="text-xs text-gray-500 block">
                                                                    {column.extra}
                                                                </span>
                                                            )}
                                                        </p>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;