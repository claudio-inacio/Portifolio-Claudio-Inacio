

import MeImageDontBackgorund from "./../../image/eu-portifolio-removebg-preview.png"
import {  HeadLine } from "./styleHeadLineComponent";
import HeadlineImageComponent from "./components/apresentation/HeadlineImageComponent";
import HeadlineInfoComponent from "./components/apresentation/HeadlineInfoComponent";


const HeadLineComponent = ({ showMenu, showClickMenu }) => {
  return (
    <HeadLine id='Apresentacao'>
      <HeadlineInfoComponent /> 
      <HeadlineImageComponent image={MeImageDontBackgorund} />
    </HeadLine>
  );
};

export default HeadLineComponent;
