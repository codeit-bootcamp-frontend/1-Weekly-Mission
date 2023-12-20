import LocaleContext from "./../LocaleContext";

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocaleContext.Provider value={{ ObjectValue: {}, LinkSDataArr: [] }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
