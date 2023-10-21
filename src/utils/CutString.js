function CutString(description) {
  if (description.length >= 74) {
    return description.substring(0, 74) + '....';
  } else {
    return description;
  }
}

export default CutString;
