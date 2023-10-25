import '../styles/SharedContent.css';
import SearchBar from './SearchBar.js';
import CardList from './CardList.js';

function SharedContent({ links = null }) {
  return (
    <main>
      <div className="content_container">
        <SearchBar />
        {links && <CardList links={links} />}
      </div>
    </main>
  );
}

export default SharedContent;
