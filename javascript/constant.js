/* 정규표현식 */
const REG_EXP = {
    CHECK_EMAIL : /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    CHECK_PASSWORD : /^[\Sa-zA-Z0-9]{8,}$/, /* 공백제거포함 */
}

export {REG_EXP};