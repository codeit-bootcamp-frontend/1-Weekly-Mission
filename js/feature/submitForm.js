export default function submitForm({ $root, inputs, signService, errorMessage, isSignUpPage }) {
  
  function getFormData() {
    const formData = {
      email: inputs[0].getData().value,
      password: inputs[1].getData().value
    }
    // console.log()
    // inputs.forEach((ele)=>{
    //   const data = ele.getData()
    //   formData[data.id] = data.value
    // })
    console.log(formData)
    return formData
  }

  function init(){
    $root.addEventListener('submit',async (e) => {
      e.preventDefault();
      const isValid = inputs.every((el) => el.isValid())
      if(isValid){
        const url = isSignUpPage ? 'sign-up': 'sign-in'
        const res = await signService.login(getFormData(),url)
        if(res.ok){
          location.href = '/pages/folder.html'
        }else {
          submitErrorMessage(inputs)
        }
      }else {
        submitErrorMessage(inputs)
      }
    });
  };

  function submitErrorMessage(inputs) {
    if(isSignUpPage) {
      const focusoutEvent = new Event('focusout')
      inputs.forEach((el) => {
        el.getInputElement().dispatchEvent(focusoutEvent)
      })
    }else {
      inputs.forEach( (el) => {
        const message = errorMessage[el.getErrorMessage().name]
        const errorBox = el.getErrorMessage().$errorMessage
        errorBox.textContent = message
      })
    }
  };

  return {
    init
  };
}