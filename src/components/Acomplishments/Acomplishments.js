import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { degree: "SSC", text: "Maharashtra State Board", marks: 75.23 },
  { degree: "Diploma", text: "Electronics & Video", marks: 84.61 },
  { degree: "B.E", text: "Electronics & Telecomm.", marks: 64.24 },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Academic Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.degree}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.marks + `%`}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
