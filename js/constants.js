export {
  REG_EXP, 
}

const REG_EXP = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
}