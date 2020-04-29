import axios from "axios";
const url = "https://api.github.com/gists/public";

export const FetchAllGist = async () => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Fetch error in fetchData");
		console.log(error);
	}
};
