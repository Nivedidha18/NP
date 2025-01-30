import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiCognizant, SiC } from 'react-icons/si';
import Button from '../../styles/GlobalComponents/Button';
import { CgWebsite } from 'react-icons/cg';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a Mechanical Engineer with extensive experience in battery technology,
      I specialise in the design, optimisation, and testing of advanced energy
      storage systems, including pouch and cylindrical cells. My expertise spans
      the full lifecycle of battery development—from conceptual design and
      prototyping to performance testing and system integration. I am skilled in
      Battery Management Systems (BMS), thermal management, and lithium-ion
      battery design, ensuring optimal performance, safety, and efficiency. I
      have worked extensively in the automotive industry, where I contributed to
      the development of electric vehicle (EV) battery packs. In these projects,
      I applied my knowledge of BMS and thermal management to ensure battery
      longevity, safety, and peak performance. Additionally, my proficiency with
      CFD (Computational Fluid Dynamics) and FEA (Finite Element Analysis) tools
      like ANSYS and ABAQUS allowed me to optimise cooling systems and
      structural integrity, ensuring the durability of battery systems under
      various operating conditions. In the energy sector, I have been involved
      in the design and implementation of solar battery storage systems and grid
      energy storage solutions. This includes developing energy-efficient
      systems that integrate seamlessly with renewable energy sources, as well
      as simulating battery charging cycles and evaluating system performance to
      improve cycle life, charging speed, and overall efficiency. I am highly
      proficient in CAD modelling and simulation tools such as SolidWorks, Cero,
      and Siemens NX. These tools have allowed me to design and model complex
      battery systems and mechanical components in high detail, facilitating
      collaboration and problem-solving across multidisciplinary teams.
      Additionally, my experience with Siemens NX extends to automated part
      design and Product Lifecycle Management (PLM) - Windchill and Teamcentre ,
      ensuring efficient management of the product development cycle from
      concept to manufacturing. With a strong background in manufacturing
      automation, I have worked on lean manufacturing projects that optimise
      battery assembly lines, reducing time and cost while maintaining high
      product quality. My knowledge of robotics and assembly systems has enabled
      me to streamline production processes, improving throughput and minimising
      waste.
    </SectionText>

    <List>
      <ListItem>
        <CgWebsite size='3rem' />
        <ListContainer>
          <ListTitle>Battery specialise </ListTitle>
          <ListParagraph>
            Experience with <br />
            Li-ion
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgWebsite size='3rem' />
        <ListContainer>
          <ListTitle>Design Engineer </ListTitle>
          <ListParagraph>
            Experience with <br />
            CAD tool / GD&T
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgWebsite size='3rem' />
        <ListContainer>
          <ListTitle>Tech Lead </ListTitle>
          <ListParagraph>
            Experience with <br />
            Product Definition & Process Improvements
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
