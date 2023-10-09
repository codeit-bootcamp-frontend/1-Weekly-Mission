/* 공통 태그와 이벤트 */
import { _onValidateInputValue, _onRemoveValidationError, _onHidePassword } from './functions.js';
import { form, hidePasswordButton } from "./tags.js";

form.addEventListener('focusout', _onValidateInputValue);
form.addEventListener('keydown', _onRemoveValidationError);

hidePasswordButton.addEventListener('click', _onHidePassword);
