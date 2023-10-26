import CardList from '../CardList';

function FolderMain({ cards, cardsLoadingError }) {
  return (
    <main>
      <form className='search-form'>
        <img className='search-icon' src='/assets/images/search.svg' alt='검색 아이콘' />
        <input
          className='search-bar'
          type='search'
          placeholder='링크를 검색해 보세요.'
        />
      </form>
      <CardList items={cards} />
      {cardsLoadingError?.message && <span>{cardsLoadingError.message}</span>}
    </main>
  );
}

export default FolderMain;
