
import axios from "axios";

const url = "https://api.github.com/gists/public";

export const FetchAllGist = async () => {
	try {

		const response = await axios.get(url);

		return response.data;
		// const {
		// 	data: { confirmed, recovered, deaths, lastUpdate },
		// } = await axios.get(url);

		// const modifiedData = {
		// 	confirmed,
		// 	recovered,
		// 	deaths,
		// 	lastUpdate,
		// };
		// return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log("Fetch error in fetchData");
		console.log(error);
	}
};
