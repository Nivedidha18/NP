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
        'Unlock the door to my captivating portfolio, where each software and Java project weaves a unique narrative, unveiling my passion for exceptional design and development.';

      // Speech synthesis voices
      const getVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const womanVoice = voices.find(
          (voice) => voice.name === 'Google UK English Female'
        );
        if (womanVoice) {
          message.voice = womanVoice; // Choose the woman's voice
          message.lang = 'en-US'; // Set the language

          // Speak the message
          window.speechSynthesis.speak(message);
        } else {
          setTimeout(getVoices, 100);
        }
      };

      getVoices();
    }
  };

  useEffect(() => {
    // Automatically speak when the component mounts
    speak();
  }, []);

  return (
    <Section grid>
      <div>
        <SectionTitle main center>
          Welcome To
          <br />
          Nithya Journey!
        </SectionTitle>
        <SectionText>
          Step into a world of continuous learning and innovation. I showcase my
          commitment to staying at the forefront of the ever-evolving software
          development landscape. With my strong foundation in Software
          Engineering and a hunger for knowledge, I bring fresh perspectives and
          cutting-edge solutions to the table. Join me on this journey of
          continuous improvement and let's push the boundaries of what's
          possible.
        </SectionText>
        <Button
          onClick={() =>
            (window.location = 'https://nivedidha18.github.io/Profile/')
          }
        >
          Learn more
        </Button>
        <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <AiOutlineAudio onClick={speak} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
