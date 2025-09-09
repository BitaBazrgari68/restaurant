import ConcretAsphalt from '@/components/template/ConcretAsphalt';
import React from 'react';
export const metadata = {
  title: ' مدیریت سفارشگیری و توزین بتن و آسفالت ، نرم افزار جامع بتن سازی |دیتا ترادا',
  description: 'نرم افزار حرفه‌ای مدیریت بتن شامل ثبت بارنامه، کارت اطلاعات پیمانه، مدیریت میکسر و پمپ، آزمایشگاه بتن و سیستم پلاک خوان هوشمند',
  keywords: [
    'مدیریت سفارشگیری بتن',
    'توزین بتن',
    'نرم افزار بتن سازی',
    'بارنامه بتن',
    'کارت اطلاعات پیمانه',
    'مدیریت میکسر',
    'آزمایشگاه بتن',
    'پلاک خوان میکسر',
    'حسابداری بتن سازی',
    'فاکتور فروش بتن'
  ].join(', '),
      
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  
}
  
const Page = () => {
    return (
        <div className="min-h-screen bg-services" dir="rtl">
            <ConcretAsphalt/>
        </div>
    );
}

export default Page;
