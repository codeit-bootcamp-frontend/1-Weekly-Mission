const RESPONSIBLE_DEVICE_SIZES = {
  tablet: "1123px",
  mobile: "767px",
};

export const RESPONSIBLE_MEDIA_QUERIES = {
  tablet: `@media only screen and (max-width: ${RESPONSIBLE_DEVICE_SIZES.tablet})`,
  mobile: `@media only screen and (max-width: ${RESPONSIBLE_DEVICE_SIZES.mobile})`,
};
