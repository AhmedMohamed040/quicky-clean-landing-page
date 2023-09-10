import Container from "./container";
import Icon1 from "../css/svg/Icon";
import Icon2 from "../css/svg/Icon2";
import Image from "next/image";

import Package from "../public/img/img/Package.png";
import Icon3 from "../css/svg/Icon3";
const Services = () => {
  return (
    <>
      <Container className="px-2">
        <div class="grid  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 ">
       
          <div className="flex flex-wrap justify-end text-right px-0 sm:px-4 md:px-14 order-1 md:order-1 lg:order-2">
            <h5 className="bg-[#FFCC66] px-3 py-1 text-white">. الخدمة و الجودة و الوقت </h5>
            <h3 className="font-semibold	text-xl mt-3"> تعتزم كويكي كلين بتقديم أفضل المنتجات العالمية والأدوات ذات الجودة العالية لتكون الخيار الاول دائما للعملاء </h3>
            <div className="flex flex-row justify-between mt-14 pt-2 gap-10 items-center">
              <p className="text-sm  text-gray-500 font-semibold">
              فرق من الخبراء المهتمين بتقديم أعلى مستويات الجودة والعناية لسيارتك، نحن هنا لضمان أفضل نتائج
              </p>
              <span className="mx-0 px-0">
                <Icon1 />
              </span>
            </div>
            <div className="flex flex-row justify-between mt-3 pt-2 gap-10 items-center">
              <p className="text-sm  text-gray-500 font-semibold">
              اختر من بين باقات الغسيل المصممة بعناية لتلبية متطلبات ميزانيتك وتفضيلاتك
              </p>
              <span className="mx-0 px-0">
                <Icon2 />
              </span>
            </div>
            <div className="flex flex-row justify-between mt-3 pt-2 gap-10 items-center">
              <p className="text-sm  text-gray-500 font-semibold">
              نقدم خدمة غسيل سيارتك بالمكان والوقت الذي تحدده. لن تضطر بعد الآن للانتظار في طوابير طويلة
              </p>
              <span className="mx-0 px-0">
                <Icon3 />
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center order-2 md:order-2 lg:order-1">
          <div className="relative sm:min-h-[300px] mt-14">
          <Image
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100%"
                  src={Package.src}
                  alt="phone group"
                  style={{
                    zIndex: '1',
                    width: '100%',
                    maxWidth: 600,
                    minHeight: 250,
                    height: 'auto',
                    objectFit: "contain",
                    backgroundRepeat: "repeat",
                  }}
                  // Set the desired height
                />
              </div> 
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;
