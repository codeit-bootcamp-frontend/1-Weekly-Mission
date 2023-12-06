import { API } from "../config";

export const isEmailUnique = async (email: string) => {
  try {
    const response = await fetch(`${API["check-email"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (response.status == 409) {
      return false;
    } else if (response.status == 200) return true;
    else throw new Error(`${response.status}`);
  } catch (err) {
    console.log(err);
  }
};
