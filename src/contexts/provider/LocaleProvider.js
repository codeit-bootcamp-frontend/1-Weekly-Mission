import LocaleContext from "./../LocaleContext";

const LocaleProvider = ({ children }) => {
  return (
    <LocaleContext.Provider
      value={{ ObjectValue: {}, LinkSDataArr: [], folderIdKey: "" }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
