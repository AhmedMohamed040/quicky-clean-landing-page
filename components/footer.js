import Container from "./container";
import Image from "next/image";
import Logo from "../css/svg/logo";
import Insta from "../css/svg/insta";
import Vector from "../css/svg/Vector";
import Mail from "../css/svg/mail";
import Call from "../css/svg/call";
import Whatsapp from "../css/svg/whatsapp";

import Snap from "../css/svg/snap";
import Tik from "../css/svg/tik";

const Footer = () => {
  return (
    <>
      <Container className=" px-20">
        <div className=" pt-14 gap-5  sm:gap-0 grid grid-cols-1 sm:grid-cols-3 text-center w-full">
          <div className="flex flex-col gap-5 justify-end items-center sm:items-end order-3 sm:order-1">
            <h2 className="text-lg	 font-bold  p-0 m-0 text-gray-800 lg:leading-tight md:text-xl ">
              الدعم والمساعدة
            </h2>
        
            <div className="flex items-center justify-center">
              <h2 className="text-sm px-2 text-gray-500 font-semibold  p-0 m-0 lg:leading-tight md:text-md ">
              أبدء محادثة
              </h2>
              <Whatsapp />
            </div>
            <div className="flex items-center justify-center">
              <h2 className="text-sm px-2 text-gray-500 font-semibold  p-0 m-0 lg:leading-tight md:text-md ">
              +966 55584652
              </h2>
              <Call />
            </div>
            <div className="flex items-center justify-center">
              <h2 className="text-sm px-2 text-gray-500 font-semibold  p-0 m-0 lg:leading-tight md:text-md ">
              admin@quickyclean.com.sa
              </h2>
              <Mail />
            </div>
          </div>
          <div className="grid gap-9 justify-items-end text-right  order-2"></div>
          <div className="grid gap-9 justify-items-center sm:justify-items-end text-right order-1 sm:order-3">
            <Logo className=" max-h-10" />
            <p className="text-sm  text-gray-500 font-semibold">
              لإننا نهتم براحتك وأمان سيارتك.، قُمنا بتطوير نظام آمن وموثوق
              للتحقق من خلفيات فريقنا، حتى تكون على ثقة تامة في اختيارنا للعناية
              بسيارتك
            </p>
            <div className="flex flex-row-reverse items-center   gap-3">
              <Insta />
              <Vector />
              <Tik />
              <Snap />
            </div>
          </div>
        </div>
          <div className=" pt-14 gap-5  sm:gap-0 grid grid-cols-1 text-center w-full">
          <h2 className="text-sm px-2 text-gray-500 font-semibold  p-0 m-0 lg:leading-tight md:text-md ">
          © جميع الحقوق محفوظة ، كويكى كلين 2023
              </h2>
          </div>
      </Container>
    </>
  );
};

export default Footer;
