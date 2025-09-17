import React from 'react';
import Seo from '@/components/template/Seo';

export const metadata = {
    title: 'نمونه کارهای سئو و بهینه‌سازی وب‌سایت - موفق‌ترین پروژه‌های سئو | دیتا ترادا',
    description: 'مشاهده نمونه کارهای موفق سئو دیتا ترادا. افزایش 500% ترافیک ارگانیک، بهبود رتبه در گوگل، بهینه‌سازی فروشگاه‌های آنلاین و وب‌سایت‌های شرکتی با نتایج قابل اندازه‌گیری',
    keywords: 'نمونه کار سئو، پروژه بهینه سازی وب سایت، افزایش رتبه گوگل، ترافیک ارگانیک، سئو فروشگاهی، بهینه سازی محتوا، دیتا ترادا، پورتفولیو سئو',

    

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

const Page = () => {
    return (
        <div>
            <Seo />
        </div>
    );
}

export default Page;
