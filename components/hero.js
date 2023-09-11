import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Logo from "../css/svg/logo";
import Link from "next/link";
import AppleIcon from "../css/svg/appleIcon";
import {GetItOn, GooglePlayText, GooglePlayIcon} from "../css/svg/googlePlayIcon";
import PhoneGroup from "../css/images/phoneGroup.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap  pb-0">
        <div className="flex flex-col gap-10 pt-14 items-center text-black	 justify-center w-full lg:w-2/2">
          <div class="grid grid-cols-1 mb-14  px-8 relative">
            <Logo />
          </div>
          <div class="grid grid-cols-1  px-8 relative text-center	">
            <h1 class=" text-5xl font-semibold pb-8">
              !إحجز الأن، واجعل سيارتك تتألق
            </h1>
            <h6 class=" text-lg font-bold pb-2">
              إستمتع بتجربة غسيل سيارات فريدة, عناية سيارتك سهلة ومريحة{" "}
            </h6>
            <h6 class=" text-lg font-bold pb-2">مع باقات تلبي احتياجاتك.</h6>
          </div>
          <div class=" gap-4 relative text-center	 flex flex-row items-center">
         
             
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
          <div class="grid grid-cols-1  text-center  relative">


          <div class="  sm:min-h-[300px] xs:min-h-[200px]   text-center	  flex flex-row items-center ">
            
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
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100%"
                  src={PhoneGroup.src}
                  alt="phone group"
                  style={{
                    zIndex: '1',
                    width: 'fit-content',
                    maxWidth: 600,
                    minHeight: 150,
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

export default Hero;
