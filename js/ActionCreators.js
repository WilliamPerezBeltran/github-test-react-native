const storeGistDetail = token => {
	return {
		type: "GIST_DETAILS",
		gistsId: token
	};
};

export {
	storeGistDetail,
};