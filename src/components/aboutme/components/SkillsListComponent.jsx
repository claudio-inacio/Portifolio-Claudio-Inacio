import React from "react";
import { Item, List } from "./styleSkillsListComponent";


export default function SkillsList() {
  const skills = [
    "HTML", "CSS", "SASS", "Styled Components",
    "Tailwind CSS", "JavaScript", "TypeScript",
    "React", "React Router", "Context API",
    "Redux", "Axios", "Postman",
    "Next.js", "Ngrok", "Git", "REST APIs"
  ];

  return (
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  );
}
