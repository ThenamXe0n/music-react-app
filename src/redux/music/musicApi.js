import axios from "axios";
import Notiflix from "notiflix";

export const getSongsApi = async () => {
  try {
    const response = await axios.get("http://localhost:8080/songs");
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const deleteMusicApi = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/songs/${id}`);
    const { data } = response;
    Notiflix.Notify.success(`song deleted successfully : ${data.songName}`);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
