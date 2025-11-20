import { SocialPages } from "./styleSocialPage";
import IconInstagram from "../../modern-icons/instagran/IconInstagram";
import IconLinkedin from "../../modern-icons/linkedin/IconLinkedin";
import IconGithub from "../../modern-icons/github/IconGithub";
import IconMenuMobile from "../../modern-icons/menu-mobile/IconMenuMobile";

const SocialPagesComponent = ({}) => {
  return (
    <SocialPages>
      <a
        href="https://www.linkedin.com/in/claudio-in%C3%A1cio-felipe-junior/"
        target="_blank"
      >
        <IconLinkedin />
      </a>
      <a href="https://github.com/claudio-inacio" target="_blank">
        <IconGithub />
      </a>
      <a href="https://www.instagram.com/c.inaciio/" target="_blank">
        <IconInstagram />
      </a>
    
    </SocialPages>
  );
};

export default SocialPagesComponent;
