import LocaleContext from "./../LocaleContext";

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocaleContext.Provider
      value={{ ObjectValue: {}, LinkSDataArr: [], folderIdKey: "" }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
