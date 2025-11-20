
import { AboutMeImage } from "./styleAboutMeImageComponent";

const AboutMeImageComponent = ({image}) => {
  return (
    <AboutMeImage>
      <img
        src={image}
        alt="MInha Imagem Pixelada"
      />
    </AboutMeImage>
  );
};

export default AboutMeImageComponent;
