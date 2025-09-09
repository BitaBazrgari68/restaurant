import RestaurantManagement from '@/components/template/RestaurantManagement';
import React from 'react';

export const metadata = {
  title: 'نرم افزار مدیریت رستوران و کافه،سیستم جامع سفارشگیری آنلاین|دیتا ترادا',
  description: ' راهکار هوشمند برای مدیریت رستوران شامل منوی دیجیتال، سفارشگیری آنلاین، مدیریت پیک، درگاه پرداخت و گزارشات پیشرفته',
  keywords: [
    'نرم افزار مدیریت رستوران',
    'نرم افزار کافه',
    'سیستم سفارشگیری آنلاین',
    'منوی دیجیتال',
    'QR کد منو',
    'سیستم پیک رستوران',
    'درگاه پرداخت رستوران',
    'مدیریت شعب رستوران',
    'باشگاه مشتریان رستوران',
    'رزرو میز آنلاین',
    'پنل مدیریت رستوران'
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
      <RestaurantManagement />
    </div>
  );
}

export default Page;
