import ButtonCurrinculoDownlaod from "../../../modern-icons/buttons/ButtonCurrinculoDownlaod";
import { HeadlineInfo } from "./styleHeadlineInfoComponent";


const HeadlineInfoComponent = ({ }) => {
  const handleDownload = () => {
  window.open("https://drive.google.com/file/d/1AIi2e7pMWo-0Yd7SYMixwIJQXAQ7G2yc/view?usp=sharing", "_blank");
};

  return (
    <HeadlineInfo>
      <h1>{`<Hello World! />`}
        <br/>
          Me chamo Claudio Inácio!
      </h1>
      <span>
        Construo interfaces rápidas, modernas e fáceis de usar — transformando processos burocráticos em experiências simples e inteligentes 🚀
      </span>
      {/* <button>Curriculo</button> */}
      <ButtonCurrinculoDownlaod handleDownload={handleDownload} />
    </HeadlineInfo>
  );
};

export default HeadlineInfoComponent;
