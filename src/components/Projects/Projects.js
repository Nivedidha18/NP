import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p) => {
        return (
          <BlogCard key={p.id}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TitleContent></TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks>
                <strong>Technical Specifications:</strong>
                <ul>
                  <li>
                    <strong>Cell Chemistry:</strong>{' '}
                    {p.techSpecification.cellChemistry}
                  </li>
                  <li>
                    <strong>Discharge Capacity:</strong>{' '}
                    {p.techSpecification.dischargeCapacity}
                  </li>
                  <li>
                    <strong>Nominal Voltage:</strong>{' '}
                    {p.techSpecification.nominalVoltage}
                  </li>
                  <li>
                    <strong>Cycle Life:</strong> {p.techSpecification.cycleLife}
                  </li>
                  <li>
                    <strong>Operating Temperature:</strong>{' '}
                    {p.techSpecification.operatingTemperature}
                  </li>
                  <li>
                    <strong>Weight:</strong> {p.techSpecification.weight}
                  </li>
                </ul>
              </ExternalLinks>

              <div>
                <strong>Challenges:</strong>
                <p>{p.challenges}</p>
              </div>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
