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
    slidesToShow: 4,
    swipeToSlide: true,
    infinite: false,
    easing: true,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,

        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,

        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

        },
      },
      {
        breakpoint: 768,
        settings: {
         
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
            slidesToShow: 1.3,
            centerPadding: '20px',
            slidesToScroll: 1,
            initialSlide: 4,
          }
        },
      {
        breakpoint: 400,
        settings: {
          
          slidesToShow: 1.08,
          slidesToScroll: 1,
            initialSlide: 4,
          

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
      <div style={{position:"relative", maxWidth: '100%', }}>
        <Slider ref={sliderRef} {...settings} >
          {props.children}
        </Slider>
      </div>
    );
  }
