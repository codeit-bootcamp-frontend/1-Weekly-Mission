import { ThemeProvider } from "styled-components";
import theme from "../../css/display.js";
import { Card } from "./Card.js";

export function CardContainer ({items}) {
  
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        {items.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </CardContainer>
    </ThemeProvider>
  )
}