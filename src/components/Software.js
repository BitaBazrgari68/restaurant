import React, { useState, useEffect } from 'react';
import { ShoppingCart, Utensils, Camera, Coffee, Calculator, BarChart3, Package, Truck, ChevronRight, Star, Zap } from 'lucide-react';

const Software = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const softwareList = [
        {
            id: 1,
            title: 'نرم افزار رستوران و فست فود',
            icon: Utensils,
            description: 'مدیریت کامل رستوران، سفارش گیری و فروش',
            color: 'from-red-500 to-orange-500',
            bgColor: 'bg-primary',
        },
        {
            id: 2,
            title: 'تشخیص هوشمند پلاک خودرو',
            icon: Camera,
            description: 'شناسایی و تشخیص خودکار پلاک خودروها',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-primary',
        },
        {
            id: 3,
            title: 'نرم افزار کافی شاپ',
            icon: Coffee,
            description: 'سیستم مدیریت کامل برای کافی شاپ ها',
            color: 'from-amber-500 to-yellow-500',
            bgColor: 'bg-primary',
        },
        {
            id: 4,
            title: 'نرم افزار جامع فروش و حسابداری',
            icon: Calculator,
            description: 'سیستم کامل فروش، خرید و مدیریت مالی',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-primary',
        },
        {
            id: 5,
            title: 'اتوماسیون جامع کانبان',
            icon: BarChart3,
            description: 'سیستم مدیریت پروژه و کارآیی تیم',
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-primary',
        },
        {
            id: 6,
            title: 'نرم افزار انبار شناور',
            icon: Package,
            description: 'مدیریت انبار و موجودی در محیط های متحرک',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-primary',
        },
        {
            id: 7,
            title: 'مدیریت سفارش گیری و توزیع بتن و آسفالت',
            icon: Truck,
            description: 'سامانه جامع مدیریت و توزیع مصالح ساختمانی',
            color: 'from-gray-600 to-slate-600',
            bgColor: 'bg-primary',
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 mt-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl font-semibold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-secondary mb-4">
                        نرم افزارهای ما
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        مجموعه کاملی از نرم افزارهای تخصصی برای تمام نیازهای کسب و کار شما
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-secondary" />
                        ))}
                        <span className="text-gray-600 mr-2">بیش از 1000+ مشتری راضی</span>
                    </div>
                </div>

                {/* Software Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {softwareList.map((software, index) => {
                        const IconComponent = software.icon;
                        return (
                            <div
                                key={software.id}
                                className={`group relative transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onMouseEnter={() => setHoveredCard(software.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`
                  relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl 
                  transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
                  border border-gray-100 hover:border-transparent
                  ${hoveredCard === software.id ? 'scale-105' : 'scale-100'}
                `}>
                                    {/* Content */}
                                    <div className="relative p-6">
                                        {/* Icon */}
                                        <div className={`
                      w-16 h-16 rounded-full mx-auto ${software.bgColor} 
  flex items-center justify-center mb-4
  transition-all duration-300 group-hover:scale-110
  relative
                    `}>
                        <div className="absolute inset-1 rounded-full border-1 border-dashed border-white/30"></div>
                                            <IconComponent className={`w-8 h-8 bg-gradient-to-r ${software.color} bg-clip-text text-secondary`} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-[#243954] mb-3 leading-tight group-hover:text-[#FFAC30] transition-colors duration-300">
                                            {software.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {software.description}
                                        </p>



                                        {/* CTA Button */}
                                        <button className={`
                      w-full py-3 px-4 rounded-xl font-medium text-sm
                      bg-primary text-secondary 
                      hover:shadow-lg hover:shadow-blue-200 
                      transition-all duration-300 transform hover:scale-105
                      flex items-center justify-center gap-2 group
                    `}>
                                            مشاهده جزئیات
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>

                                    {/* Floating badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFAC30]  rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Software;