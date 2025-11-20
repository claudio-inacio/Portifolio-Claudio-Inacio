import AboutMeImageComponent from "./components/about-me/AboutMeImageComponent";
import AboutMeInfoComponent from "./components/about-me/AboutMeInfo";

import MeImageDontBackgorund from "./../../image/eu-portifolio-removebg-preview.png"
import MeImage from "./../../image/eu-portifolio.png"
import {  HeadLine } from "./styleHeadLineComponent";


const HeadLineComponent = ({ showMenu, showClickMenu }) => {
  return (
    <HeadLine>
      <AboutMeInfoComponent /> 
      <AboutMeImageComponent image={MeImageDontBackgorund} />
    </HeadLine>
  );
};

export default HeadLineComponent;
