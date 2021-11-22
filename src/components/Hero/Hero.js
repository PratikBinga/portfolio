import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "../Header/HeaderStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am Pratik Adagale, passionate web developer with good technical
          knowledge and communication skills. Customer Driven, always eager to
          learn new Tech and apply those skills in Real to build quality Product
          & enhance customer business.
        </SectionText>

        <Link href="#ContactFooter">
          <NavLink>
            <Button onClick={props.handleClick}>Contact Me</Button>
          </NavLink>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
