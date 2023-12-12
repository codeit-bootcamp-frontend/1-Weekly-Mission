import { CSSProp, css } from 'styled-components';

interface DeviceProps {
  [key: string]: number;
}

const deviceSizes: DeviceProps = {
  mobile: 768,
  tablet: 1198,
};

export const DeviceQuery = Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media only screen and (max-width: ${deviceSizes[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
  return acc;
}, {} as Record<keyof typeof deviceSizes, (l: TemplateStringsArray, ...p: any[]) => CSSProp>);
