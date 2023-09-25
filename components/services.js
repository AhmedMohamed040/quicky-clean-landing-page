import Container from "./container";
import Icon1 from "../css/svg/Icon";
import Icon2 from "../css/svg/Icon2";
import Image from "next/image";

import Package from "../public/img/img/Package.png";
import Icon3 from "../css/svg/Icon3";
const Services = () => {
  return (
    <>
    
        <div  class="grid px-5 lg:px-20 md:grid-cols-2  sm:grid-cols-1 gap-0  ">
       
          <div className="flex flex-wrap justify-center md:justify-start md:text-right text-center px-0 ">
            <h5 className="bg-[#FFCC66] px-3 py-1 text-white">
            الخدمة و الجودة و الوقت.
            </h5>
            <h3 className="max-w-3xl mt-3 text-lg font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl ">

            تعتزم كويكي كلين بتقديم أفضل المنتجات العالمية والأدوات ذات الجودة العالية لتكون الخيار الاول دائما للعملاء.            
            </h3>
            <div className="max-w-sm flex flex-col md:flex-row justify-between mt-14 pt-2 gap-3 items-center">
            <span className="mx-0 px-0">
                <Icon1 width={'65'} />
              </span>
              <p className="max-w-2xl py-4 text-sm   text-gray-500 lg:text-base xl:text-base ">
              فرق من الخبراء المهتمين بتقديم أعلى مستويات الجودة والعناية لسيارتك، نحن هنا لضمان أفضل نتائج.
              </p>
              
            </div>
            <div className="max-w-sm flex flex-col md:flex-row justify-between mt-3 pt-2 gap-3 items-center">
            <span className="mx-0 px-0">
                <Icon2 width="65" />
              </span>
              <p className="max-w-2xl py-4 text-sm   text-gray-500 lg:text-base xl:text-base ">
              اختر من بين باقات الغسيل المصممة بعناية لتلبية متطلبات ميزانيتك وتفضيلاتك.
              </p>
         
            </div>
            <div className="max-w-sm flex flex-col md:flex-row justify-between mt-3 pt-2 gap-3 items-center">
            <span className="mx-0 px-0">
                <Icon3 width="65" />
              </span>
              <p className="max-w-2xl py-4 text-sm  text-gray-500 lg:text-base xl:text-base ">
              نقدم خدمة غسيل سيارتك بالمكان والوقت الذي تحدده. لن تضطر بعد الآن للانتظار في طوابير طويلة.
              </p>
           
            </div>
          </div>
          <div className="flex flex-wrap justify-center ">
            <div className="relative sm:min-h-[300px] md:block hidden mt-14">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={Package.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  width: "100%",
                  maxWidth: 400,
                  minHeight: 150,
                  height: "auto",
                  objectFit: "contain",
                  backgroundRepeat: "repeat",
                }}
                // Set the desired height
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default Services;
