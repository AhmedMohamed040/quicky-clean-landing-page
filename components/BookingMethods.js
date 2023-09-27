import Container from "./container";
import step1 from "../public/img/img/step1.png";
import step2 from "../public/img/img/step2.png";
import step3 from "../public/img/img/step3.png";
import step4 from "../public/img/img/step4.png";
import ResCarousel from "./responsive-carousel";
import Image from "next/image";
const BookingMethods = () => {
  return (
    <>
      <Container className="px-2">
        <div class=" gap-4 ">
          <div className="pb-4 flex justify-center items-center flex-col gap-4 md:gap-7">
            <h2 className="max-w-3xl mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl ">
              طريقة الحجز و الاستخدام
            </h2>
            <span className="max-w-[50px] max-h-2 bg-[#FFCC66] rounded py-[3px] px-6 md:py-1 md:px-8"></span>
          </div>
          <div   className="relative flex  justify-center flex-row-reverse flex-nowrap sm:flex-row items-center first-letter  gap-0 lg:gap-9 ">
            <ResCarousel>
        
          
       

        
            <div className=" flex flex-col  mx-6  w-full max-w-[300px] min-w-[100px] md:max-w-[250px]  relative  ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step1.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  margin: "auto",
                  width: "100%",
                  maxWidth: 500,

                  height: "auto",
                  padding: 0,
                  minHeight: 100,

                  objectFit: "cover",
                }}
                // Set the desired height
              />
              <p className="mt-4 text-center text-gray-800 text-sm font-semibold">
                تم الحجز بنجاح
              </p>
            </div>
            <div className=" flex flex-col  mx-6  w-full max-w-[300px] min-w-[100px] md:max-w-[250px]  relative  ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step2.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  margin: "auto",
                  width: "100%",
                  maxWidth: 500,

                  height: "auto",
                  padding: 0,
                  minHeight: 100,

                  objectFit: "cover",
                }}
                // Set the desired height
              />
              <p className="mt-4 text-center text-gray-800 text-sm font-semibold">
                إختيار الخدمات الإضافية والدفع
              </p>
            </div>
            <div className=" flex flex-col  mx-6  w-full max-w-[300px] min-w-[100px] md:max-w-[250px]  relative  ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step3.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  margin: "auto",
                  width: "100%",
                  maxWidth: 500,

                  height: "auto",
                  padding: 0,
                  minHeight: 100,

                  objectFit: "cover",
                }}
                // Set the desired height
              />
              <p className="mt-4 text-center text-gray-800 text-sm  font-semibold">
                إختر الوقت والمكان المناسب
              </p>
            </div>
            
            <div className=" flex flex-col mx-6  w-full max-w-[300px] min-w-[100px] md:max-w-[250px]  relative ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step4.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  margin: "auto",
                  width: "100%",
                  maxWidth: 500,

                  height: "auto",
                  padding: 0,
                  minHeight: 100,

                  objectFit: "cover",
                }}
                // Set the desired height
              />
              <p className="mt-4 text-center text-gray-800 text-sm font-semibold">
                اختيار الباقة المناسبة والخدمات الإضافية
              </p>
            </div>
            </ResCarousel>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BookingMethods;
