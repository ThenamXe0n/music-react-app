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

export const updateMusicDataApi = async (updateInfo) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/songs/${updateInfo.id}`,
      updateInfo.data
    );
    Notiflix.Notify.success(`${response.data.songName} with id : ${response.data.id} has been updated successfully `)
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return { status: false, message: error.message };
  }
};
