// .prettierrc.js
module.exports = {
  importOrder: [
    "^@utils/(.*)$",
    "^@apis/(.*)$",
    "^@hooks/(.*)$",
    "^@recoils/(.*)$",
    "^@pages/(.*)$",
    "^@base/(.*)$",
    "^@common/(.*)$",
    "^@components/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
