import ItemListInformation from "./ItemListInformation";
import { Informations } from "./styleHeaderInformations";
export const ArrayHeaderInfos = [
  {
    sectionDirection: "Apresentacao",
    title: "Início",
  },
  {
    sectionDirection: "projetos",
    title: "Projetos",
  },
  {
    sectionDirection: "sobre",
    title: "Sobre",
  },
  {
    sectionDirection: "contato",
    title: "Contato",
  },
];

const HeaderInformations = ({ showMenu, showClickMenu }) => {
  return (
    <Informations show={showMenu}>
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
    </Informations>
  );
};

export default HeaderInformations;
