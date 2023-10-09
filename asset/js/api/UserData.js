const testUser = {
    email: "test@codeit.com",
    password: "codeit101",
};

export function SignInTest(email, pw) {
    return email === testUser.email && pw === testUser.password;
}

export function AlreadyMemberTest(email) {
    return email === testUser.email;
}