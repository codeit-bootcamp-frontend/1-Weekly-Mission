const locator = (tag) => {
  const res = {};
  res.id = tag.id;
  res.tag = tag;
  res.classAdd = function (errType) {
    this.p.textContent = variable[errType][this.name];
    this.label.classList.add(variable.errClass);
    this.tag.classList.add(variable.errClass);
  }
  res.classRemove = function () {
    this.p.textContent = "";
    this.label.classList.remove(variable.errClass);
    this.tag.classList.remove(variable.errClass);
  }
  switch (tag.name) {
    case $dom.inputEm.name:
      res.label = $dom.labelEm
      res.p = $dom.pEm
      break;
    case $dom.inputPw.name:
      res.label = $dom.labelPw
      res.p = $dom.pPw
      break;
    case $dom.inputCh?.name:
      res.label = $dom.labelCh
      res.p = $dom.pCh
      break;
    case $dom.buttonPw.name:
      res.input = $dom.inputPw
      res.img = $dom.imgPw
      break;
    case $dom.buttonCh?.name:
      res.input = $dom.inputCh
      res.img = $dom.imgCh
      break;
    case $dom.buttonSub.name:
      res.inputs = $dom.inputs
      break;
  }
  return res
}