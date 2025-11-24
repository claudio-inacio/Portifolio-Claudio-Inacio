import React from "react";


import { AboutContainer, Title, Description,SectionTitle } from "./styleAboutMeComponent";

import ExperienceBlock from "./components/ExperienceBlock";
import SkillsList from "./components/SkillsListComponent";

export default function AboutMe() {
  return (
    <AboutContainer id='sobre'>
      <Title>Sobre Mim</Title>

      <Description>
        Desenvolvedor Front-End com quase <b>3 anos de experiência</b>, atuando
        principalmente React. 
        Atualmente desenvolvo interfaces e ferramentas que automatizam rotinas 
        e aumentam a produtividade de empresas do segmento de empréstimo 
        consignado.  
        <br /><br />
        Sou apaixonado por criar soluções funcionais, escaláveis e
        centradas na experiencia do usuário, priorizando sempre a praticidade das ferramentas desenvolvidas.
      </Description>

      {/* <SectionTitle>Habilidades</SectionTitle>
      <SkillsList /> */}

      <SectionTitle>Experiência Profissional</SectionTitle>

      <ExperienceBlock
        company="Nosso Consignado"
        role="Desenvolvedor Front-End"
        period="Atual"
        description={[
          "Desenvolvimento e manutenção de ferramentas utilizando React, Tailwind, Redux e Context.",
          "Participação em reuniões de planejamento e definição de prazos.",
          "Criação de interfaces e funcionalidades que aumentam a produtividade e reduzem processos manuais."
        ]}
      />

      <ExperienceBlock
        company="DB1 Global Software"
        role="Analista de Implantação — Anymarket"
        description={[
          "Contato inicial com clientes para alinhamento de expectativas e explicação do produto.",
          "Gerenciamento das atividades da equipe de implantação.",
          "Comunicação direta com diferentes setores para garantir evolução do projeto."
        ]}
      />

      <SectionTitle>Formação</SectionTitle>
      <ExperienceBlock
        company="KENZIE ACADEMY — Escola de Programação"
        role="Desenvolvimento Front-End"
      />
      <ExperienceBlock
        company="UNIPAR — Universidade Paranaense"
        role="Sistemas de Informação"
      />
    </AboutContainer>
  );
}
