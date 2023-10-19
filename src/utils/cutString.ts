function cutString(description: string) {
  return description.length >= 74
    ? description.substring(0, 74) + "...."
    : description;
}

export default cutString;
