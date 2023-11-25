interface cardData {
  created_at?: string;
  createdAt?: string;
  image_source?: string;
  imageSource?: string;
}

function normalizeCardData(cardData: cardData) {
  if (cardData.created_at) {
    return {
      createdAt: cardData.created_at,
      imageSource: cardData.image_source,
    };
  }

  return cardData;
}

export default normalizeCardData;
