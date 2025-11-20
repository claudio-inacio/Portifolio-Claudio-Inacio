import {
  TechIcon,
  TechName,
  TechnologieItem,
  Tooltip,
} from "./styleTechnologieComponent";

const TechnologieComponent = ({
  onMouseLeave,
  onMouseEnter,
  icon,
  name,
  exibeName = false,
  description,
}) => {
  return (
    <TechnologieItem
      id={`technologi-item-liste${name}`}
      title={name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TechIcon>{icon}</TechIcon>
      <Tooltip className="tooltip">{description}</Tooltip>
      {exibeName && <TechName>{name}</TechName>}
    </TechnologieItem>
  );
};

export default TechnologieComponent;
