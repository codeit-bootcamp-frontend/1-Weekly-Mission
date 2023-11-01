import { ThemeProvider } from "styled-components";
import display from "../../css/display.js";
import { Card } from "./Card.js";

export function CardContainer ({values}) {
  const { links } = values ;

  return (
    <ThemeProvider theme={display}>
      <CardContainer>
        {links.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </CardContainer>
    </ThemeProvider>
  )
}