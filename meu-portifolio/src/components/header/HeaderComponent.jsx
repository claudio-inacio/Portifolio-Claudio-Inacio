
import { Header } from "./styleHeaderComponent";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderInformations from "./header-informations/HeaderInformations";
import SocialPagesComponent from "./social-page/SocialPages";
import IconMenuMobile from "../modern-icons/menu-mobile/IconMenuMobile";


const HeaderComponent = ({showMenu, showClickMenu}) => {
  return (
      <Header>
        <HeaderInformations showMenu={showMenu} showClickMenu={showClickMenu} />
        <div className="divHamburguer">
          <IconMenuMobile handleClick={showClickMenu} />
        </div>
       <SocialPagesComponent />
      </Header>
  );
};

export default HeaderComponent;
