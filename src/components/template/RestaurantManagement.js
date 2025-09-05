
import React from 'react';
import Path from '@/components/Path';
import Tab from '@/components/Tab';
import DetailHeader from '../DetailHeader';
import Footer from '../Footer';
import Link from 'next/link';
import {
   
    ScanText ,
   Workflow ,
    
    Phone,
    
    Coffee,
   
    Calculator,
  
    Warehouse,
    
    ChevronLeft} from 'lucide-react';
const RestaurantManagement = () => {
    const relatedSoftware = [
        { 
            id: 1,
            name: " نرم افزار تشخیص هوشمند پلاک خودرو  ",
            slug: "Intelligent-license-plate-recognition-software",
            icon: <ScanText  className="w-5 h-5 text-green-600" />
        },
        { 
            id: 2, 
            name: " نرم افزار کافی شاپ ",
            slug: "Coffee-shop-software",
            icon: <Coffee  className="w-5 h-5 text-purple-600" />,
        },
        {
            id: 3,
            name: " نرم افزار جامع فروش و حسابداری ",
            slug: "Comprehensive-sales-and-accounting-software",
            icon: <Calculator  className="w-5 h-5 text-orange-600" />
        },
        {
            id: 4,
            name: "اتوماسیون جامع کانبان ",
            slug: "Comprehensive-Kanban-Automation",
            icon: <Workflow  className="w-5 h-5 text-orange-600" />
        },
        { 
            id: 5,
            name: "نرم افزار انبار شناور ",
            slug: "Floating-warehouse-software",
            icon: <Warehouse  className="w-5 h-5 text-orange-600" />
        },
        {
            id: 6,
            name: " سامانه مدیریت سفارش گیری و توزین بتن و آسفالت ",
            slug: "Concrete-and-asphalt-ordering-and-weighing-management-system",
            icon: <Warehouse  className="w-5 h-5 text-orange-600" />
        },

    ];
    return (
        <div>
            <DetailHeader />
            <div className='pt-16 pr-24 flex gap-3'>
                <h1 className='text-2xl font-semibold text-[#243954] bg-[#FFAC30] p-5 rounded-lg relative before:absolute before:inset-1 before:rounded-lg before:border-dashed before:border-1 before:border-[#243954]/50 before:pointer-events-none '>
                    نرم افزار مدیریت رستوران و کافه
                </h1>
                <h2 className='text-lg font-semibold text-[#243954] bg-[#FFAC30] p-5 rounded-lg relative before:absolute before:inset-1 before:rounded-lg before:border-dashed before:border-1 before:border-[#243954]/50 before:pointer-events-none '>
                    <Link href="/">
                        دموی نرم افزار
                    </Link>

                </h2>
                <h2 className=' flex gap-2 items-center text-lg font-semibold text-[#243954] bg-[#FFAC30] p-5 rounded-lg relative before:absolute before:inset-1 before:rounded-lg before:border-dashed before:border-1 before:border-[#243954]/50 before:pointer-events-none '>
                    سفارش نرم افزار / 09154064900 <Phone className="w-4 h-4  text-[#243954]" />
                </h2>
            </div>
            <Path />
            <Tab />
            <div className='pb-5'>
                <div className="container mx-auto px-6 pb-20">
                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#243954] mb-2">
                            سایر نرم‌افزارها
                        </h3>
                        <div className="w-12 h-1 bg-[#FFAC30] rounded-full"></div>
                    </div>

                    {/* Software List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {relatedSoftware.map((software) => (
                            
                            <Link
                                key={software.id}
                                href={`/software/${software.slug}`}
                                className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                {software.icon}
                                <span className="text-gray-700 group-hover:text-[#FFAC30] font-medium">
                                    {software.name}
                                </span>
                                <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-[#243954] group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RestaurantManagement;
