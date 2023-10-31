function normalizeCardData(cardData) {
  if (cardData.created_at) {
    return {
      createdAt: cardData.created_at,
      imageSource: cardData.image_source,
    };
  }

  return cardData;
}

export default normalizeCardData;
