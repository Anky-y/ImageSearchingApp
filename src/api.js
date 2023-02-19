import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: `Client-ID szNiI_W2qFzM3NbxZjRMtXnv_0sGC90ZLnBL9wJzf8M`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
