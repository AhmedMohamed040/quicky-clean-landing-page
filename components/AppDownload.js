import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/benefit-one.png";

import  GooglePlayIcon  from "../css/svg/googlePlay";
import AppleIcon from "../css/svg/appleIcon";
const AppDownload = () => {
  return (
    <>
      <Container className="flex flex-col justify-center items-center px-20">
      <div className="bg-gradient-to-tl from-[#FFD777] p-14 md:p-24  to-75% via-[#FFD777]  border border-[#FFD777] to-[#FFF4DC] gap-9 grid grid-cols-1 text-center w-full  rounded-3xl ">
       <h2 className="text-xl font-bold  p-0 m-0 text-gray-800 lg:leading-tight lg:text-3xl ">
       حمّل التطبيق الآن واستمتع بخدماتنا المتميزة
        </h2>
        <h6 class="text-sm text-gray-800 md:text-lg font-normal ">
        نحن نقدم في كويكي كلين مجموعة من الباقات المميزة ذات الجودة العالية بأسعار منافسة تليق بعملائنا.
            </h6>
            <div className="flex flex-row gap-3 justify-center">
              <GooglePlayIcon />
              <AppleIcon />
            </div>
       </div>
      </Container>
    </>
  );
};

export default AppDownload;
