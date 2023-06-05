import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { IoLogoIonic } from 'react-icons/io';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20;',
          }}
        >
          <IoLogoIonic size='3rem' /> <Span>ePortfolio</Span>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Nivedidha18'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nivedidha-kumaravelu/'>
        <AiFillLinkedin size='3rem'></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/nivedidha_kumar'>
        <AiFillInstagram size='3rem'></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
