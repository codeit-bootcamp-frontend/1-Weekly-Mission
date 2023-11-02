const deviceSizes = {
  mobile: "768px",
  tablet: "1198px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  device
};

export default theme;
