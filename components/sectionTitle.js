import React from "react";
import Container from "./container";
import Map from '../css/svg/map'
const SectionTitle = (props) => {
  return (
    <Container
      className={` flex w-full flex-col   ${props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
    

      {props.title && (
        <h2 className="max-w-3xl mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl ">
      <strong className="text-[#FC6]">بخدماتنا</strong>  {props.title}! 
        </h2>
      )}
  {props.pretitle && (
        <div className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.children && (
        <p className="max-w-2xl leading-10 py-4 text-xs lg:leading-10 xl:leading-10  text-gray-500 lg:text-sm xl:text-sm ">
          {props.children}
        </p>
      )}
      
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
                    
                 <Map className="" />
                  
               </div>
               </div>
               
    </Container>
  );
}

export default SectionTitle;
