import WebDesign from '@/components/template/WebDesign';
import React from 'react';

export const metadata= {
  title: '  نمونه کارهای طراحی سایت - پورتفولیو طراحی وب|دیتا ترادا  ',
  description: 'مشاهده نمونه کارهای طراحی سایت دیتا ترادا. پروژه‌های متنوع طراحی وب، فروشگاه آنلاین، سایت شرکتی و اپلیکیشن موبایل با کیفیت بالا',
  keywords: 'نمونه کار طراحی سایت، پورتفولیو طراحی وب، دیتا ترادا، طراحی UI/UX، طراحی فروشگاه آنلاین',
  
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
        <div>
            
            <WebDesign/>
        </div>
    );
}

export default Page;
