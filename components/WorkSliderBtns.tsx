"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React from "react";

type Props = {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
};

const WorkSliderBtns = (props: Props) => {
  const { containerStyles, btnStyles, iconStyles } = props;
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
