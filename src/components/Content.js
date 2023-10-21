import SearchBar from "./SearchBar";
import CardList from "./CardList";
import '../styles/content.css'

function Content({ links = [] }){
    return (
        <div className = "content_container">
            <SearchBar />
            <CardList links = {links} />
        </div>
    );
}

export default Content;