const inputForm = document.querySelectorAll('.inputForm')

export function existError() {
  let error = 0
  inputForm.forEach((item) => {
    if (item.lastElementChild.className !== '') {
      error = 1
    }
  })
  return error
}
