export const locator = ({ currentTarget: tag }) => {
  const res = {};
  res.tag = tag;
  res.name = tag.name;
  res.value = tag.value;
  switch (tag.name) {
    case 'email':
      res.label = $dom.labelEm
      res.p = $dom.pEm
      break;
    case 'password':
      res.label = $dom.labelPw
      res.p = $dom.pPw
      res.input = $dom.inputPw
      res.img = $dom.imgPw
      break;
    case 'passwordCheck':
      res.label = $dom.labelCh
      res.p = $dom.pCh
      res.input = $dom.inputCh
      res.img = $dom.imgCh
      break;
    case 'submit':
      res.inputs = $dom.inputs
      break;
    case 'passwordBtn':
      res.img = $dom.imgPw
      res.input = $dom.inputPw
      break;
    case 'passwordCheckBtn':
      res.img = $dom.imgCh
      res.input = $dom.inputCh
      break;
  }
  return res
}

export const isValue = (obj) => {
  if (!obj.value) obj.errorType = 'EmptyError';
  return obj
}

export const printError = (obj) => {
  if (obj.errorType) {
    obj.p.textContent = (obj.name)[errorType];
    obj.label.classList.add(errClass);
    obj.tag.classList.add(errClass);
    return null;
  }
  return obj;
}

export const resetError = (obj) => {
  obj.p.textContent = "";
  obj.label.classList.remove(errClass);
  obj.tag.classList.remove(errClass);
}

export const isError = (obj) => {
  if (Array.from(obj.inputs)
    .some($input => $input.classList.contains(errClass)))
    return null;
  return obj;
}

const goToFolder = (obj) => {
}