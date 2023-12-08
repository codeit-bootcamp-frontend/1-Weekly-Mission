export function filterCardsSearch(cards: Card[], searchResult: string) {
  const filteredCards = cards.filter((card) =>
    [
      card.url?.toLowerCase(),
      card.title?.toLowerCase(),
      card.description?.toLowerCase(),
    ].some((val) => val?.includes(searchResult.toLowerCase()))
  );

  return filteredCards;
}
