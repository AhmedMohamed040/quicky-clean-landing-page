import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Logo from "../css/svg/logo";
import Link from "next/link";
import AppleIcon from "../css/svg/appleIcon";
import PhoneGroup from "../css/images/hero-img.png";
import GooglePlayIcon from "../css/svg/googlePlay";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap  pb-0">
        <div className="flex flex-col gap-10 pt-14 items-center text-black	 justify-center w-full lg:w-2/2">
          <div class="grid grid-cols-1 mb-5 md:mb-14  px-8 relative">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div class="grid grid-cols-1  px-8 relative text-center	">
            <h1 className="max-w-3xl mt-3 text-2xl  sm:text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight md:text-4xl ">
              إحجز الأن، واجعل سيارتك تتألق!
            </h1>
            <h5 className="max-w-2xl leading-7 py-2 md:py-4  text-sm lg:leading-7 xl:leading-7  text-black  md:text-sm xl:text-md ">
              إستمتع بتجربة غسيل سيارات فريدة, عناية سيارتك سهلة
              <br className="sm:none"></br>ومريحة مع باقات تلبي احتياجاتك.
            </h5>
          </div>
          <div class=" gap-4 relative text-center	 flex sm:flex-row flex-col  items-center">
            <Link href="https://play.google.com/store/apps/details?id=com.quickyclean.quickycleanapp"  target="_blank" className="font-bold ">
              <span style={{}}>
                <GooglePlayIcon style={{ backgroundColor: "red" }} />
              </span>
            </Link>
            <Link href="https://apps.apple.com/us/app/quicky-clean/id6470739682?platform=iphone"  target="_blank" className=" font-bold ">
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
                  src={PhoneGroup.src}
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
                  zIndex: "1",
                  width: "100%",

                  maxWidth: 1020,
                  minHeight: 150,
                  objectFit: "cover",
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
