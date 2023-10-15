import { BASE_URL } from "./constants.js";
import { goToFolderPage } from "./auth.js";

async function signIn(userData) {
	try {
		const response = await fetch(`${BASE_URL}/sign-in`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			// Q1. 필요한가
			throw new Error(response.status);
		} else {
			const result = await response.json();
			const accessToken = result.data.accessToken || "token";
			window.localStorage.setItem("accessToken", accessToken);
			goToFolderPage();
		}
	} catch (error) {
		console.error("로그인 실패:", error);
	}
}

async function getIsNewEmail(email) {
	try {
		const response = await fetch(`${BASE_URL}/check-email`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		if (!response.ok) {
			// Q1. 필요한가
			throw new Error(response.status);
		} else {
			return true;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
}

export { signIn, getIsNewEmail };
