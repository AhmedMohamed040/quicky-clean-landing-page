import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Logo from "../css/svg/logo";
import Link from "next/link";
import AppleIcon from "../css/svg/appleIcon";
import {GetItOn, GooglePlayText, GooglePlayIcon} from "../css/svg/googlePlayIcon";
import Iphone from "../public/img/img/iphone.png";
import IphoneL from "../public/img/img/iphoneL.png";


const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap overflow-hidden ">
        <div className="flex flex-col gap-10 pt-14 items-center justify-center w-full lg:w-2/2">
          <div class="grid grid-cols-1 mb-14  px-8 relative">
            <Logo />
          </div>
          <div class="grid grid-cols-1  px-8 relative text-center	">
            <h1 class=" text-7xl font-semibold pb-8">
              !إحجز الأن، واجعل سيارتك تتألق
            </h1>
            <h6 class=" text-lg font-bold pb-2">
              إستمتع بتجربة غسيل سيارات فريدة, عناية سيارتك سهلة ومريحة{" "}
            </h6>
            <h6 class=" text-lg font-bold pb-2">مع باقات تلبي احتياجاتك.</h6>
          </div>
          <div class=" gap-4 relative text-center	 flex flex-row items-center mb-[-170px]">
         
             
          <Link href="/" className=" p-2.5 font-bold text-black bg-[#0d0c0d] rounded-md  gap-3 flex flex-row"> 
            <span>
            <GooglePlayIcon />
            </span>
            <span className=" flex flex-col">
            <span className="">
            <GetItOn />
            </span>
            <span className="">
            <GooglePlayText />
            </span>
          
            </span>
           
             </Link>
             <Link href="/" className="p-2.5 font-bold "> 
            <span>
            <AppleIcon />
            
            </span>
             </Link>
          </div>
          <div class="grid grid-cols-2 mb-14  text-center  relative">


          <div class="  relative text-center	top-[200px] overflow-hidden flex flex-row items-center ">
            
       {/*    <Box sx={{
                mt: {
                  sm: 3,
                  xs: 1,
                },
                position: 'relative',
                minHeight: {
                  sm: 300,
                  xs: 200
                }
              }}>

                <Image
                  quality={100}
                  fill
                  sizes="100%"
                  src={chassis_img.src}
                  alt="Description of the SVG"
                  style={{
                    zIndex: '1',
                    objectFit: "contain",
                    backgroundRepeat: "repeat",
                  }}
                // Set the desired height
                />
              </Box> */}
          <Image
          className="object-none"
              src={Iphone.src}
              width="301"
              height="582"
              sizes="100%"
              quality={100}
           
              alt="Benefits"
            />
            

          </div>
          
          <div class="  relative  text-center	top-[200px] overflow-hidden flex flex-row items-center ">
            
     
       
          <Image
          className="object-none"
              src={Iphone.src}
              width="301"
              height="582"
              sizes="100%"
              quality={100}
           
              alt="Benefits"
            />
            

          </div>
          
          
          <div class="   absolute text-center	top-[180px] justify-center mx-[150px] overflow-hidden flex flex-row items-center ">
            
      
          <Image
          className="object-none"
              src={Iphone.src}
              width="301"
              height="582"
              sizes="100%"
              quality={100}
           
              alt="Benefits"
            />
            

          </div>
          
            </div>

        </div>
      </Container>
    </>
  );
};

export default Hero;
