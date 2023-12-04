import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/benefit-one.png";
import Link from "next/link";

import  GooglePlayIcon  from "../css/svg/googlePlay";
import AppleIcon from "../css/svg/appleIcon";
const AppDownload = () => {
  return (
    <>
      <Container className="flex flex-col justify-center text items-center px-10 md:px-20">
      <div className=" bg-gradient-to-tl from-[#FFD777] p-6 md:p-24  to-75% via-[#FFD777]  border border-[#FFD777] to-[#FFF4DC] gap-9 grid md:justify-items-center items-center grid-cols-1 text-center w-full  rounded-3xl ">
       <h2 className="text-xl font-bold  p-0 m-0 text-gray-800 lg:leading-tight lg:text-3xl ">
       حمّل التطبيق الآن واستمتع بخدماتنا المتميزة
        </h2>
        <p className="text-center line-clamp-3 max-w-md leading-1 text-xs lg:leading-1 xl:leading-1  text-gray-600 lg:text-base xl:text-base ">
          
        نحن نقدم في كويكي كلين مجموعة من الباقات المميزة ذات الجودة العالية بأسعار منافسة تليق بعملائنا.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="https://play.google.com/store/apps/details?id=com.quickyclean.quickycleanapp" passHref={true} target="_blank" className="font-bold cursor-pointer">
              <span style={{}}>
                <GooglePlayIcon style={{ backgroundColor: "red" }} />
              </span>
            </Link>
            <Link href="https://apps.apple.com/us/app/quicky-clean/id6470739682?platform=iphone" passHref={true} target="_blank" className=" font-bold cursor-pointer">
              <span>
                <AppleIcon />
              </span>
            </Link>
            </div>
       </div>
      </Container>
    </>
  );
};

export default AppDownload;
