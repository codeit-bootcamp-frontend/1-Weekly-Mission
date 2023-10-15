export const REG_EXP ={
    EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  }
  
export const DB_USERS = [
    // 첫 번째 유저
    {
      email: 'test@codeit.com',
      password: 'codeit101',
    }
  ]

// 상수 데이터
export const API = 'https://bootcamp-api.codeit.kr/api';