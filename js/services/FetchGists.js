import axios from "axios";
import * as constants from "../Constants";

export const FetchAllGist = async () => {
	try {
		const url = `${constants.appLocalBaseUrl}public`;
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Fetch error in FetchAllGist");
		console.log(error);
	}
};

export const FetchGistById = async gistId => {
  try {
    const url = `${constants.appLocalBaseUrl}${gistId}`;
    const response = await axios.get(url);
    return response.data;

  } catch (error) {
    console.log(error);
    alert("Fetch error in FetchGistById");
  }
};
