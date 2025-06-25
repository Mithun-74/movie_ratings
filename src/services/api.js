const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "308750cf";

// OMDb doesn't have "popular" movies — we'll simulate with a default search
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=Avengers`);
  const data = await response.json();
  return data.Search || []; 
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.Search || [];
};
