import ButtonCurrinculoDownlaod from "../../../modern-icons/buttons/ButtonCurrinculoDownlaod";
import { HeadlineInfo } from "./styleHeadlineInfoComponent";


const HeadlineInfoComponent = ({ }) => {
  const handleDownload = () => {
  window.open("https://drive.google.com/file/d/1hYJtFPNoLIZYHoQcfPhByHO_fbNTepsR/view?usp=sharing", "_blank");
};

  return (
    <HeadlineInfo>
      <h1>{`<Hello World! />`}
        <br/>
          Me chamo Claudio Inácio!
      </h1>
      <span>
        Desenvolvedor FRONT-END! <br/>Construo interfaces rápidas, modernas e fáceis de usar — transformando processos burocráticos em experiências simples e inteligentes 🚀
      </span>
      <ButtonCurrinculoDownlaod handleDownload={handleDownload} />
    </HeadlineInfo>
  );
};

export default HeadlineInfoComponent;
