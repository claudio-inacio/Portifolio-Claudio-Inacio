import React from "react";
import { Block, Company, Role, Text } from "./styleExperienceBlock";

export default function ExperienceBlock({ company, role, period, description }) {
  return (
    <Block>
      <Company>{company}</Company>
      {role && <Role>{role}</Role>}
      {period && <Text>📅 {period}</Text>}

      {description?.map((desc, index) => (
        <Text key={index}>• {desc}</Text>
      ))}
    </Block>
  );
}
