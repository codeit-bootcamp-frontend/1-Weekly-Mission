import { useState } from "react";

export default function useAsync(asyncFunction) {
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	const wrappedFunction = async (...args) => {
		try {
			setError(null);
			setIsPending(true);
			return await asyncFunction(...args);
		} catch (error) {
			setError(error);
			return;
		} finally {
			setIsPending(false);
		}
	};
	return [isPending, error, wrappedFunction];
}
