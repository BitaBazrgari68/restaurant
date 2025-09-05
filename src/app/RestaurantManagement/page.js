import RestaurantManagement from '@/components/template/RestaurantManagement';
import React from 'react';
  export const metadata = {
  title: ' نرم افزار مدیریت رستوران-نرم افزار مدیریت رستوران و کافه |دیتا ترادا',
  description: ' نرم افزار مدیریت رستوران و کافه راهکاری هوشمند برای رستوران و کافه شما '
}
const Page = () => {
  
    return (
       <div className="min-h-screen bg-services" dir="rtl">
            <RestaurantManagement/>
        </div>
    );
}

export default Page;
