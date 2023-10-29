const breakpoints = {
  tablet: "1123px",
  mobile: "767px",
};

const DeviceSizes = {
  tablet: `@media only screen and (max-width: ${breakpoints.tablet})`,
  mobile: `@media only screen and (max-width: ${breakpoints.mobile})`,
};
export default DeviceSizes;
