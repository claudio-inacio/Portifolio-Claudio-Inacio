
import { HeadlineImage } from "./styleHeadlineImageComponent";

const HeadlineImageComponent = ({image}) => {
  return (
    <HeadlineImage>
      <img
        src={image}
        alt="MInha Imagem Pixelada"
      />
    </HeadlineImage>
  );
};

export default HeadlineImageComponent;
