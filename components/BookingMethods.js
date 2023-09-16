import Container from "./container";
import step1 from "../public/img/img/step1.png";
import step2 from "../public/img/img/step2.png";
import step3 from "../public/img/img/step3.png";
import step4 from "../public/img/img/step4.png";

import Image from "next/image";
const BookingMethods = () => {
  return (
    <>
      <Container className="px-2">
        <div class=" gap-4 ">
          <div className="flex justify-center items-center flex-col gap-4 md:gap-7">
          
            <span className="max-w-[50px] max-h-2 bg-[#FFCC66] rounded py-[3px] px-6 md:py-1 md:px-8"></span>
          </div>
          <div className="flex justify-center flex-col-reverse flex-nowrap sm:flex-row items-center gap-0 md:gap-14 ">
            <div className="relative sm:min-h-[300px] mt-7 order-4 ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step1.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  width: "100%",
                  maxWidth: 600,
                  minHeight: 500,
                  height: "auto",
                  objectFit: "contain",
                  backgroundRepeat: "repeat",
                }}
                // Set the desired height
              />
            </div>
            <div className="relative sm:min-h-[300px] mt-7">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step2.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  width: "100%",
                  maxWidth: 600,
                  minHeight: 500,
                  height: "auto",
                  objectFit: "contain",
                  backgroundRepeat: "repeat",
                }}
                // Set the desired height
              />
            </div>
            <div className="relative sm:min-h-[300px] mt-7">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step3.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  width: "100%",
                  maxWidth: 600,
                  minHeight: 500,
                  height: "auto",
                  objectFit: "contain",
                  backgroundRepeat: "repeat",
                }}
                // Set the desired height
              />
            </div>
            <div className="relative sm:min-h-[300px] mt-7 ">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100%"
                src={step4.src}
                alt="phone group"
                style={{
                  zIndex: "1",
                  width: "100%",
                  maxWidth: 600,
                  minHeight: 500,
                  height: "auto",
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

export default BookingMethods;
