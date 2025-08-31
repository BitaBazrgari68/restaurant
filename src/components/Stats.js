import React from 'react';

const Stats = () => {
    return (
        <div>
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: "۵۰۰+", label: "رستوران فعال" },
                            { number: "۳۰۰%", label: "افزایش کارایی" },
                            { number: "۲۴/۷", label: "پشتیبانی" },
                            { number: "۹۹.۹%", label: "آپتایم سرور" }
                        ].map((stat, index) => (
                            <div key={index} className="group">
                                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-blue-200 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Stats;
