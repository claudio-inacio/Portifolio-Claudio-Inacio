import { AboutContainer } from "../../styleHeadLineComponent";
import ItemListInformation from "./ItemListInformation";
import { Informations } from "./styleHeaderInformations";


const AboutMe = ({ showMenu, showClickMenu }) => {
  return (
    <AboutContainer>
      <ul>
        {ArrayHeaderInfos.map((info) => {
          return (
            <ItemListInformation
              title={info.title}
              sectionDirection={info.sectionDirection}
            />
          );
        })}
      </ul>
    </AboutContainer>
  );
};

export default AboutMe;
