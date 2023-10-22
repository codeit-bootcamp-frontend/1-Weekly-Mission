import { BASE_URL } from "./constants.js";

export const fetchClient = async ({ url, method, body }) => {
	try {
		const response = await fetch(`${BASE_URL}/${url}`, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (response.status !== 200) {
			throw new Error(response.status);
		}
	} catch (error) {
		throw error;
	}
};
