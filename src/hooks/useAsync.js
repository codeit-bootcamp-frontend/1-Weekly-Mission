import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const wrappedFunction = useCallback(
		async (...args) => {
			setIsLoading(true);
			setError(null);
			try {
				return await asyncFunction(...args);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		},
		[asyncFunction]
	);

	return [isLoading, error, wrappedFunction];
};

export default useAsync;
