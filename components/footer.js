import Container from "./container";
import Image from "next/image";
import Logo from "../css/svg/logo";
import Insta from "../css/svg/insta";
import Vector from "../css/svg/Vector";

import Snap from "../css/svg/snap";
import Tik from "../css/svg/tik";

const Footer = () => {
  return (
    <>
    <Container className=" px-20">
    <div className=" pt-14  gap-4 grid grid-cols-2 text-center w-full">
   
          <div className="flex flex-row gap- justify-start">
          بسيارتك
          </div>
          <div className="grid gap-9 justify-items-end text-right  ">
            <Logo className=" max-h-10"/>
            <p className="text-sm  text-gray-500 font-semibold">
             لإننا نهتم براحتك وأمان سيارتك.، قُمنا بتطوير نظام آمن وموثوق للتحقق من خلفيات فريقنا، حتى تكون على ثقة تامة في اختيارنا للعناية بسيارتك
              </p>
              <div className="flex flex-row-reverse items-center gap-3">
              <Insta/>
              <Vector/>
              <Tik/>
              <Snap/>

              </div>
          </div>
     </div>
    </Container>
    </>
  );
};

export default Footer;
