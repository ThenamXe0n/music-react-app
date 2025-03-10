import axios from "axios";
import Notiflix from "notiflix";

async function getRecipies() {
  let apiUrl = "https://dummyjson.com/recipes";
  let recipes = await fetch(apiUrl);
  let data = await recipes.json();
  return data;
}
console.log(getRecipies());

export const deleteSong = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/songs/${id}`)
    const {data} = response
    Notiflix.Notify.success(`song deleted successfully : ${data.songName}`)
  } catch (error) {
    Notiflix.Notify.failure(error.message)
  }
};


export const updateData =async(id,dataToUpdate)=>{
  try {
    const response = await axios.patch(`http://localhost:8080/songs/${id}`,dataToUpdate)
    const {data} = response
    Notiflix.Notify.success(`song update successfully : ${data.songName} with data ${dataToUpdate}`)
  } catch (error) {
    Notiflix.Notify.failure(error.message)
  }
}