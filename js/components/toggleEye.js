export default function toggleEye( { $inputBoxes } ) {
  
  function init() {
    $inputBoxes.forEach(($input, i) => {
      if(i !== 0){
        const $eyeButton = $input.querySelector('.eye-button')
        const $eyeImg = $input.querySelector('.eye')
        $eyeButton.addEventListener('click', () => {
          toggleOn($eyeImg)
          updateInputBox($eyeImg, $input)
        })
      }
    })
  }

  function toggleOn($eyeImg) {
    $eyeImg.classList.toggle('on')
  }

  function updateInputBox($eyeImg, $input) {
    const $inputText = $input.querySelector('.text-input')
    if($eyeImg.classList.contains('on')) {
      $eyeImg.src = '/assets/imgs/eye-on.svg'
      $inputText.setAttribute('type', 'text')
    }else {
      $eyeImg.src = '/assets/imgs/eye-off.svg'
      $inputText.setAttribute('type', 'password')
    }
  }

  return {
    init
  }

}