import React, { useEffect } from 'react';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { AiOutlineAudio } from 'react-icons/ai';

const Hero = ({ handleTextToSpeech }) => {
  const speak = () => {
    if ('speechSynthesis' in window) {
      const message = new SpeechSynthesisUtterance();
      message.text =
        'Unlock the door to my captivating portfolio, where each mechanical engineering project tells a unique story, showcasing my passion for innovative design, cutting-edge technology, and meticulous development.';

      const getVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const womanVoice = voices.find(
          (voice) => voice.name === 'Google UK English Female'
        );
        if (womanVoice) {
          message.voice = womanVoice;
          message.lang = 'en-US';
          if (typeof window.speechSynthesis.speak !== 'undefined') {
            window.speechSynthesis.speak(message);
          }
        } else {
          setTimeout(getVoices, 100);
        }
      };

      getVoices();
    }
  };

  useEffect(() => {
    speak();
  }, []);

  const handleLearnMoreClick = () => {
    window.location.href = '#';
  };

  return (
    <Section grid>
      <div>
        <SectionTitle main center>
          Welcome To
          <br />
          Nitish Journey!
        </SectionTitle>
        <SectionText>
          Excited about the future of energy? So am I! As a Mechanical Engineer
          specialising in battery technology, I’m driven to push the boundaries
          of energy storage solutions. From electric vehicle (EV) battery packs
          to solar storage systems and grid energy solutions, I’m constantly
          working on innovative designs that optimise performance, safety, and
          efficiency. With expertise in thermal management, battery design, and
          advanced simulations (CFD, FEA), I tackle complex challenges using PLM
          software to manage the full product lifecycle—from concept to
          production. I’ve worked across industries like automotive, energy, and
          manufacturing, and I’m passionate about developing cutting-edge
          solutions for a sustainable future.
        </SectionText>
        <Button onClick={handleLearnMoreClick}>Learn more</Button>
        <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <AiOutlineAudio onClick={speak} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
