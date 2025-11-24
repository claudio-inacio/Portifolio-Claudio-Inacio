import { SocialPages } from "./styleSocialPage";
import IconInstagram from "../../modern-icons/instagran/IconInstagram";
import IconLinkedin from "../../modern-icons/linkedin/IconLinkedin";
import IconGithub from "../../modern-icons/github/IconGithub";
import IconMenuMobile from "../../modern-icons/menu-mobile/IconMenuMobile";
import IconWhatsApp from "../../modern-icons/whats-app/IconWhatsApp";

export function redirectToWhatsApp(
  phoneNumber = "+5544998790120",
  message = "Olá Cláudio"
) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
}

export function sendEmail(to='inacio.servi@gmail.com', subject = "Contato via Portfólio", body = "Olá Claudio, gostaria de conversar sobre...") {
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

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
      <div>

      <IconWhatsApp handleFunction={redirectToWhatsApp} />
      </div>
      {/* <div>

      <IconWhatsApp handleFunction={sendEmail} />
      </div> */}
    

      <a href="https://www.instagram.com/c.inaciio/" target="_blank">
        <IconInstagram />
      </a>
    </SocialPages>
  );
};

export default SocialPagesComponent;
