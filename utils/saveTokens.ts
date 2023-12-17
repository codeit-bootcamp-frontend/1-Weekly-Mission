interface SaveTokens {
  accessToken: string;
  refreshToken: string;
}

const saveTokens = ({ accessToken, refreshToken }: SaveTokens): void => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export default saveTokens;
