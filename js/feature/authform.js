export default function submitForm({ $root, inputs, signInForm, errorMessage }) {
  
  function getFormData() {
    const formData = {}
    inputs.forEach((ele)=>{
      const data = ele.getData()
      formData[data.id] = data.value
    })
    return formData
  }

  function init(){
    $root.addEventListener('submit', e => {
      e.preventDefault();
      const isValid = inputs.every(el => el.isValid())
      if(isValid && signInForm.login(getFormData())){
        location.href = "/pages/folder.html"
      }else {
        submitErrorMessage(inputs)
      }
    });
  };


  function submitErrorMessage(inputs) {
    inputs.forEach( el => {
      const message = errorMessage[el.getErrorMessage().name]
      const errorBox = el.getErrorMessage().$errorMessage
      errorBox.textContent = message
    })
  };

  return {
    init
  };
}