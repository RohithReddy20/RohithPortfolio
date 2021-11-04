import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I want to build useful, interactive and beautiful applications
      </SectionText>
      <Button onClick={() => window.location="mailto:rohith18151821@gmail.com"}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;