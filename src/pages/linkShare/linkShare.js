import { fetchClientJson } from "../../utils/apiClient";

const getSampleUserFolder = async () => {
	const result = await fetchClientJson({
		url: "sample/folder",
		method: "GET",
	});
	const folder = result.folder;
	return folder;
};

export { getSampleUserFolder };
