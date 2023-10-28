import Nav from "../components/Nav";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SortingFolder from "../components/SortingFolder";
import Option from "../components/Option";
const Folder = () => {
  return (
    <div>
      <Nav />
      <AddLink />
      <SearchBar />
      <SortingFolder />
      <Option />
      <Footer />
    </div>
  );
};

export default Folder;
