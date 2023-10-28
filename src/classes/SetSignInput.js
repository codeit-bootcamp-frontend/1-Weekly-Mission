class SetSignInput {
  constructor(
    idfor,
    name, // key 값도 name으로 퉁친다
    type,
    value,
    children,

    errorState,
    errorText,

    onChange,
    onBlur,
    onFocus,
    eyes
  ) {
    this.idfor = idfor;
    this.key = name;
    this.name = name;
    this.type = type;
    this.value = value;
    this.children = children;

    this.errorState = errorState;
    this.errorText = errorText;

    this.onChange = onChange;
    this.onBlur = onBlur;
    this.onFocus = onFocus;
    this.eyes = eyes;
  }
}

export default SetSignInput;
