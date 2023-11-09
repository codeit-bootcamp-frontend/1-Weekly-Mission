import { Empty } from "./Empty.style";
import { ThemeProvider } from "styled-components";
import theme from '../../css/display.js'

export function EmptyData(){

  return(
    <ThemeProvider theme={theme}>
      <Empty>저장된 링크가 없습니다.</Empty>
    </ThemeProvider>
  )
}