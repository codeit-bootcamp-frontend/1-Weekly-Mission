const breakpoints = {
  tablet: "1123px", // 1199px
  mobile: "767px", // 767px
};

const DeviceSizes = {
  tablet: `@media only screen and (max-width: ${breakpoints.tablet})`,
  mobile: `@media only screen and (max-width: ${breakpoints.mobile})`,
};
export default DeviceSizes;
