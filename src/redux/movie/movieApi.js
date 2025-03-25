import axios from "axios";
import Notiflix from "notiflix";

export const getMovieApi = async () => {
  try {
    const response = await axios.get("http://localhost:8080/movies");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addMovieApi = async (data) => {
  Notiflix.Loading.circle();
  try {
    const response = await axios.post("http://localhost:8080/movies", data);
    Notiflix.Loading.remove();
    Notiflix.Notify.success(`${data.moviename} has been added to movie list`);
    return response.data;
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure(error.message);
    console.log(error.message);
  }
};
