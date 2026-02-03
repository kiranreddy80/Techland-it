import React, { useMemo } from "react";

const seasonalConfig = [
  {
    name: "New Year",
    startMonth: 11, // December
    startDay: 30,
    endMonth: 0, // January
    endDay: 10,
    images: {
      circle1: "/assets/img/normal/NewYearImg_03.png",
      circle2: "/assets/img/normal/NewYearImg_02.png",
      // circle3: "/assets/img/normal/NewYearImg_01.png",
      main: "/assets/img/normal/NewYearImg_04.png",
    },
  },
  {
    name: "Sankranthi",
    startMonth: 0,
    startDay: 11,
    endMonth: 0,
    endDay: 20,
    images: {
      circle1: "/assets/img/normal/sankranthiImg03.png",
      circle2: "/assets/img/normal/sankranthiImg02.png",
      circle3: "/assets/img/normal/sankranthiImg01.png",
      main: "/assets/img/normal/sankranthiImg04.png",
    },
  },
  {
    name: "Holi",
    startMonth: 1, // Feb (Mar 4 - 5 days = Feb 27)
    startDay: 27,
    endMonth: 2, // Mar (Mar 4 + 2 days = Mar 6)
    endDay: 6,
    images: {
      circle1: "/assets/img/normal/holiImg03.png",
      circle2: "/assets/img/normal/holiImg02.png",
      circle3: "/assets/img/normal/holiImg01.png",
      main: "/assets/img/normal/holiImg04.png",
    },
  },
  {
    name: "Ugadi",
    startMonth: 2, // Mar (Mar 19 - 5 days = Mar 14)
    startDay: 14,
    endMonth: 2, // Mar (Mar 19 + 2 days = Mar 21)
    endDay: 21,
    images: {
      circle1: "/assets/img/normal/ugadiImg02.png",
      circle2: "/assets/img/normal/ugadiImg01.png",
      circle3: "/assets/img/normal/ugadiImg03.png",
      main: "/assets/img/normal/ugadilogo.png",
    },
  },
  {
    name: "Ramzan",
    startMonth: 2, // Mar (Based on Eid approx Mar 20 - 5 days = Mar 15)
    startDay: 15,
    endMonth: 2, // Mar (Mar 20 + 2 days = Mar 22)
    endDay: 22,
    images: {
      circle1: "/assets/img/normal/ramzan-right-image.png",
      circle2: "/assets/img/normal/centerImage.png",
      circle3: "/assets/img/normal/ramzanLeftImage.png",
      main: "/assets/img/normal/ramzan-bottom-image.png",
    },
  },
  {
    name: "Independence Day",
    startMonth: 7, // Aug
    startDay: 10,
    endMonth: 7,
    endDay: 17,
    images: {
      circle1: "/assets/img/normal/Independence-day-right-Img.png",
      circle2: "/assets/img/normal/Independence-day-center-Img.png",
      circle3: "/assets/img/normal/Independence-day-leftImg.png",
      main: "/assets/img/normal/Independence-day-bottom-Img.png",
    },
  },
  {
    name: "Onam",
    startMonth: 7, // Aug (Aug 25 - 5 days = Aug 20)
    startDay: 20,
    endMonth: 7, // Aug (Aug 25 + 2 days = Aug 27)
    endDay: 27,
    images: {
      circle1: "/assets/img/normal/sankranthiImg01.png", // Reusing festive images
      circle2: "/assets/img/normal/greetLogo.png",
      circle3: "/assets/img/normal/sankranthiImg03.png",
      main: "/assets/img/normal/sankranthiImg04.png",
    },
  },
  {
    name: "Ganesh Chaturthi",
    startMonth: 8, // Sep (Sep 14 - 5 days = Sep 9)
    startDay: 9,
    endMonth: 8, // Sep (Sep 14 + 15 days = Sep 29)
    endDay: 29,
    images: {
      circle1: "/assets/img/normal/diya.png",
      circle2: "/assets/img/normal/lordGanesh.png",
      circle3: "/assets/img/normal/Laddu.png",
      main: "/assets/img/normal/lord_ganesh.png",
    },
  },
  {
    name: "Dussehra",
    startMonth: 9, // Oct (Oct 20 - 5 days = Oct 15)
    startDay: 15,
    endMonth: 9, // Oct (Oct 20 + 2 days = Oct 22)
    endDay: 22,
    images: {
      circle1: "/assets/img/normal/ravan.png",
      circle2: "/assets/img/normal/greetLogo.png",
      circle3: "/assets/img/normal/ravan2.png",
      main: "/assets/img/normal/GodessIdol.png",
    },
  },
  {
    name: "Diwali",
    startMonth: 10, // Nov (Nov 8 - 5 days = Nov 3)
    startDay: 3,
    endMonth: 10, // Nov (Nov 8 + 2 days = Nov 10)
    endDay: 10,
    images: {
      circle1: "/assets/img/normal/diwali-diya-2.png",
      circle2: "/assets/img/normal/goddess-laxmi.png",
      circle3: "/assets/img/normal/diwali-diya-2.png",
      main: "/assets/img/normal/diwali-bottom-image.png",
    },
  },
  {
    name: "Christmas",
    startMonth: 11, // Dec (Dec 25 - 15 days = Dec 10)
    startDay: 10,
    endMonth: 11, // Dec (Dec 25 + 4 days = Dec 29)
    endDay: 29,
    images: {
      circle1: "/assets/cdn-images/Group 9.png",
      circle2: "/assets/cdn-images/Group 8.png",
      circle3: "/assets/cdn-images/Group 7.png",
      main: "/assets/cdn-images/santaClaus.png",
    },
  },
];

const SeasonalDecor = () => {
  const currentSeason = useMemo(() => {
    const today = new Date();
    const month = today.getMonth(); // 0-11
    const day = today.getDate(); // 1-31

    // Find the first matching season
    return seasonalConfig.find((season) => {
      const { startMonth, startDay, endMonth, endDay } = season;

      if (startMonth <= endMonth) {
        // Handling range within the same year
        if (month === startMonth && day >= startDay) {
          if (startMonth === endMonth) return day <= endDay;
          return true;
        }
        if (month === endMonth && day <= endDay) return true;
        if (month > startMonth && month < endMonth) return true;
      } else {
        // Handling range that spans across year end (e.g. Dec to Jan)
        if (month === startMonth && day >= startDay) return true;
        if (month === endMonth && day <= endDay) return true;
        if (month > startMonth || month < endMonth) return true;
      }
      return false;
    });
  }, []);

  if (!currentSeason) return null;

  const { images } = currentSeason;

  return (
    <div className="d-none d-lg-block">
      <div className="try_circle_first try_circle_first_top hidden-xs hidden-sm">
        <img src={images.circle1} alt="circle" />
      </div>
      <div className="try_circle_second try_circle_second_top hidden-xs hidden-sm">
        <img src={images.circle2} alt="circle" />
      </div>
      <div className="try_circle_third try_circle_third_top hidden-xs hidden-sm">
        <img src={images.circle3} alt="circle" />
      </div>
      <div
        className="try_slider_img_Wrapper try_slider_img_header_Wrapper"
        data-animation="animated bounceInUp"
      >
        <img src={images.main} alt="mobile" />
      </div>
    </div>
  );
};

export default SeasonalDecor;
