const Loadable = ({ isLoading, fallback, children }) => (isLoading ? fallback : children);

export default Loadable;
