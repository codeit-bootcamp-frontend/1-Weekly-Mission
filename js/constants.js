export {
  REG_EXP, 
  DB_USERS,
}

const REG_EXP = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
}

const DB_USERS = [
  {
    email: "test1@codeit.com",
    password: "codeit101"
  },

  {

  }
]