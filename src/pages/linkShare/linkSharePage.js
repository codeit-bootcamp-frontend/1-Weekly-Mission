import { fetchClientJson } from "../../utils/apiClient";

const getSampleUserFolder = async () => {
	try {
		const result = await fetchClientJson({
			url: "sample/folder",
			method: "GET",
		});
		const folder = result.folder;
		return folder;
	} catch (error) {
		return;
	}
};

const getSampleUserProfile = async () => {
	try {
		const profile = await fetchClientJson({
			url: "sample/userFail",
			method: "GET",
		});
		return profile;
	} catch (error) {
		return;
	}
};

export { getSampleUserFolder, getSampleUserProfile };
