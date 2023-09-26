import React, { Component, useRef } from "react";
import Slider from "react-slick";
// const StyledStack = styled(Stack)({
//   minWidth: "fit-content",
// });
// const StyledButton = styled(Button)({
//   color: "#515356 !important",
//   margin: 0,
//   padding: 0,
//   width: "10px",
//   "& .ArrowRightIcon": {
//     position: "relative",
    
//   },
//   '& .ArrowLeftIcon':{
//     position: "relative",
    


//   }
// })
export default function ResCarousel(props) {
  const { costomSettings = {}, withArrows = false,_slidesToShow=4 } = props;
  const settings = {
    dots: false,
    speed: 100,
    slidesToShow: _slidesToShow,
    swipeToSlide: true,
    centerMode: true,

    dotsClass: "slick-dots slick-thumb",
    arrows: withArrows,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      
    
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: (+_slidesToShow - 2),
          slidesToScroll: 1,
          initialSlide: 0,
            className: "center",
          centerPadding: "60px",
          centerMode: true,

        },
      },
      {
        breakpoint: 768,
        settings: {
         
          slidesToShow: 1,
          rtl: true,

          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          rtl: true,

            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          }
        },
      {
        breakpoint: 0,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          

          }
        }
      ]
      ,...costomSettings
    };
    const sliderRef = useRef(null);
    const handleNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const handlePrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
   console.log(sliderRef?.current?.props);
    return (
      <div style={{position:"relative", maxWidth: '100%'}}>
        <Slider ref={sliderRef} {...settings} >
          {props.children}
        </Slider>
      </div>
    );
  }
