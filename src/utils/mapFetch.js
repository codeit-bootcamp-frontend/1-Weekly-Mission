const mapCardData = (items) => {
  const image_source = items.createdAt ? items.imageSource : items.image_source;
  const created_at = items.createdAt ? items.createdAt : items.created_at;
  const description = items.description;
  const url = items.url;

  return { image_source, created_at, description, url };
};

const mapNavbarData = (items) => {
  const email = items.email;
  const image_source = items.profileImageSource
    ? items.profileImageSource
    : items.image_source;

  return { email, image_source };
};

export { mapCardData, mapNavbarData };
