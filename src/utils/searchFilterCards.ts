interface Card {
  url?: string;
  title?: string;
  description?: string;
}

export function filterCardsSearch(cards: Card[], searchResult: string): any {
  const filteredCards = cards.filter((card) =>
    [
      card.url?.toLowerCase(),
      card.title?.toLowerCase(),
      card.description?.toLowerCase(),
    ].some((val) => val?.includes(searchResult.toLowerCase()))
  );

  return filteredCards;
}
