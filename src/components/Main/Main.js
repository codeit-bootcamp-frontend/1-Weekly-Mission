import CardList from "./CardList"
import SearchBar from "./SearchBar"
import './Main.css'

function Main({ links }) {
  return (
    <main className="main">
      <SearchBar />
      <CardList links={links} />
    </main>
  )
}

export default Main