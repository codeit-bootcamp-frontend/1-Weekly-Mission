export function deleteMsg (e) {
  const sibling = e.target.nextElementSibling;

  if ((sibling.tagName === 'span')) {
    sibling.classList.remove('inputSpan');
    sibling.remove();
  } else {
    sibling.nextElementSiblingclassList.remove('inputSpan');
    sibling.remove();
  }
}

