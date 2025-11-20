import { Link } from "react-scroll";
import { InformationListItem } from "./styleItemListInformation";

const ItemListInformation = ({
  sectionDirection = "Apresentacao",
  title = "Home",
}) => {
  return (
    <InformationListItem>
      <Link
        activeClass="active"
        className="link"
        to={sectionDirection}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {title}
      </Link>
    </InformationListItem>
  );
};


export default ItemListInformation;
