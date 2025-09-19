import DataTradaPage from '@/components/template/DataTradaPage ';
import React from 'react';


export const metadata = {
    title: 'هلدینگ دیتا ترادا - طراحی سایت، سئو، امنیت و تولید نرم افزار در مشهد',
    description: 'هلدینگ دیتا ترادا ارائه دهنده خدمات طراحی و تولید سایت، بهینه سازی سئو، امنیت سایبری و تولید نرم افزار در مشهد. تماس: 05136043703 - 09154064900',
    keywords: [
        'طراحی سایت مشهد',
        'سئو مشهد',
        'امنیت سایبری',
        'تولید نرم افزار',
        'دیتا ترادا',
        'وب سایت',
        'بهینه سازی',
        'IT مشهد',
        'طراحی وب',
        'نرم افزار سفارشی',
        'خدمات فنی',
        'هلدینگ فناوری'
    ].join(', '),
    authors: [{ name: 'هلدینگ دیتا ترادا' }],
    creator: 'هلدینگ دیتا ترادا',
    publisher: 'هلدینگ دیتا ترادا',
    category: 'Technology',
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
    },
    alternates: {
        canonical: 'https://datatrada.com',
        languages: {
            'fa-IR': 'https://datatrada.com',
        },
    },
    openGraph: {
        title: 'هلدینگ دیتا ترادا - خدمات IT حرفه‌ای در مشهد',
        description: 'طراحی سایت، سئو، امنیت سایبری و تولید نرم افزار با بیش از 5 سال تجربه در مشهد',
        url: 'https://datatrada.com',
        siteName: 'هلدینگ دیتا ترادا',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'هلدینگ دیتا ترادا - خدمات فناوری اطلاعات',
            }
        ],
        locale: 'fa_IR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'هلدینگ دیتا ترادا - خدمات IT حرفه‌ای',
        description: 'طراحی سایت، سئو، امنیت و نرم افزار در مشهد',
        images: ['/twitter-image.jpg'],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    other: {
        'theme-color': '#6366f1',
        'color-scheme': 'dark light',
    },
};

const Page = () => {
    return (
        <div>
            <DataTradaPage />
        </div>
    );
}

export default Page;
