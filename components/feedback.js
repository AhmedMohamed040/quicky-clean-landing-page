import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/benefit-one.png";

const Feedback = () => {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div>
            <Image
              src={benefitOneImg}
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>

        <div className={`flex flex-wrap items-center w-full lg:w-1/2`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl text-[#270066] mt-3 text-3xl font-medium  tracking-tight  lg:leading-tight lg:text-4xl ">
                What do our customers say about us ─ Feedback
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-slate-500  lg:text-xl xl:text-xl ">
                This is a testimonial-rich glimpse into the exceptional
                experiences that our valued customers have had with our products
                and services .in this collection of feedback. you'll find
                authentic and heartwarming stories shared by individuals who
                have interacted with our agency.{" "}
              </p>
            </div>

            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-8 " dir="auto">
                
                <div className="border-l-4 border-l-yellow-500 px-8">
                  <h4 className="text-2xl font-medium text-[#101840] leading-tight tracking-tight mb-8">
                    " I'm absolutely delighted to share my incredible experience
                    working with this ."
                  </h4>
                  <p className="mt-1 text-gray-600">
                    Vincent smith InnovAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Feedback;
