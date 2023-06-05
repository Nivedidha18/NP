import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { BlogCard, GridContainer } from '../Projects/ProjectsStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.timeline.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth *
          0.7 *
          (i / TimeLineData.timeline.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.timeline.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        As a Master's student in Software Engineering with 2+ years of
        experience in various programming languages and technologies, my
        objective is to secure a Software Engineer/Java developer/Python
        Developer role where I can utilize my skills and experience to
        contribute to the development of innovative software solutions. I am
        eager to work in a dynamic and challenging environment that encourages
        continuous learning and professional growth. With my ability to write
        quality code under pressure and collaborate effectively with team
        members, I am confident in my ability to add value to any organization.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.timeline.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fillOpacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='white' />
                        <stop
                          offset='0.79478'
                          stopColor='white'
                          stopOpacity='0'
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.role}</CarouselItemText>
                <CarouselItemText>{item.company}</CarouselItemText>
                <CarouselItemText>{item.place}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.timeline.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />

      <SectionTitle>Education</SectionTitle>
      <GridContainer>
        {TimeLineData.education.map((educationItem, index) => (
          <BlogCard key={index}>
            <h2>{educationItem.subject}</h2>
            <h3>{educationItem.degree}</h3>
            <br />
            <h4>{educationItem.institution}</h4>
            <p>{educationItem.place}</p>
            <p>{educationItem.year}</p>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Timeline;
