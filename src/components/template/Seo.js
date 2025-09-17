import React from 'react';
import PortfolioCard from '../PortfolioCard';
import DetailHeader from '../DetailHeader';
import Footer from '../Footer';
import { Phone } from 'lucide-react';

const Seo = () => {
    const portfolioItems = [
        {
            id: 1,
            title: " آتلیه عروس و داماد اکسیژن ",
            href: "https://wedding.oxygenstudio.ir/",
            image: "/images/webDesign/wedding-xygenstudio.png",
            alt: "  1 نمونه طراحی سایت  "
        },
        {
            id: 2,
            title: " استودیو دیجیتال مارکتینگ اکسیژن ",
            href: "https://ad.oxygenstudio.ir/",
            image: "/images/webDesign/digitalMarketing.png",
            alt: " 2 نمونه طراحی سایت  "
        },
        {
            id: 3,
            title: "  موسسه ی فرهنگی هنری آرتا   ",
            href: "https://oxygenstudio.ir/arta//",
            image: "/images/webDesign/arta.png",
            alt: " 3 نمونه طراحی سایت  "
        },
        {
            id: 4,
            title: "  تشریفات سالی فود ",
            href: "https://salifingerfood.ir/",
            image: "/images/webDesign/salifingerfood.png",
            alt: " 4 نمونه طراحی سایت  "
        },
        {
            id: 5,
            title: " هلدینگ رسانه ای اکسیژن ",
            href: "https://oxygenstudio.ir/",
            image: "/images/webDesign/oxygenstudio.png",
            alt: " نمونه طراحی سایت 5 "
        },
        {
            id: 6,
            title: " ایران مکمل ",
            href: "https://iransupplement.com/?v=b1cb2365a1b7",
            image: "/images/webDesign/iransupplement.png",
            alt: " نمونه طراحی سایت 6  "
        },
        {
            id: 7,
            title: "  کاراکیت ",
            href: "https://karakitpart.ir/",
            image: "/images/webDesign/karakit.png",
            alt: " نمونه طراحی سایت 7  "
        },
        {
            id: 8,
            title: "  لیزر افزار پرتو ",
            href: "https://www.laserafzar.ir/",
            image: "/images/webDesign/laserafzar.png",
            alt: " نمونه طراحی سایت 8  "
        },
        {
            id: 9,
            title: "    ویکی حرفه ",
            href: "wikiherfeh.vercel.app",
            image: "/images/webDesign/wikiherfeh.png",
            alt: " نمونه طراحی سایت 9  "
        },
        {
            id: 10,
            title: "    ونگارد ",
            href: "https://vanguardbelt.com/vanguardbelt-home/",
            image: "/images/webDesign/vanguardbelt.png",
            alt: " نمونه طراحی سایت 10  "
        },


        {
            id: 11,
            title: " شرکت جک گازی گردون ",
            href: "https://s-gardoon.com/",
            image: "/images/webDesign/gardoon.png",
            alt: " 13 نمونه طراحی سایت  "
        },

        {
            id: 12,
            title: " قهرمان چرخ  ",
            href: "https://ghch.ir/",
            image: "/images/webDesign/ghch.png",
            alt: " 1نمونه طراحی سایت 5 "
        },
    ];


    return (
        <div>
            <DetailHeader />

            <div className='pt-16 px-24 mb-8  gap-3 bg-white'>
                <div className=' flex justify-between flex-row-reverse items-center w-full rounded-br-[15vw] overflow-hidden z-10 shadow-[0px_25px_50px_-25px_rgba(0,52,119,0.27)]'>
                    <h1 className=' flex items-center pr-8 text-4xl font-semibold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-secondary   '>
                        <span> / </span>
                        نمونه کارهای سئو دیتا ترادا
                        <span>/ </span>
                    </h1>

                    <h2 className=' flex gap-2 items-center justify-center  text-lg font-semibold text-[#124435]  p-5  '>
                        تماس با کارشناس و مشاوره / 09154064900 <Phone className="w-4 h-4  text-[#124435]" />
                    </h2>
                </div>
            </div>
            <div>
                <p className='text-right py-8 px-12 leading-8 '>
                    ما در زمینه بهینه‌سازی وب‌سایت‌های فروشگاهی، شرکتی، خبری و خدماتی فعالیت می‌کنیم که منجر به افزایش چشمگیر ترافیک ارگانیک و بهبود رتبه در کلمات کلیدی هدف شده است. تیم متخصص ما با استفاده از جدیدترین تکنیک‌های سئو تکنیکال، تولید محتوای بهینه، لینک‌سازی طبیعی و تحلیل رقبا، نتایج قابل اندازه‌گیری و پایداری را برای مشتریان ارائه می‌دهد
                </p>
            </div>
            <div className="container mx-auto my-5 pb-8">
                <div className="flex flex-wrap  -mx-4 justify-center">
                    {portfolioItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Seo;
