import "./profileCard.css";

function MovieCard({ moviename, genre, time, img }) {
  return (
    <div data-aos="zoom-in-left">
      {
        <>
          <div id="movieCard">
            <img height={400} src={img} alt="pushpaimg" />
          </div>
          <div id="text_box">
            <h3 id="movie_name"> {moviename}</h3>
            <h3 id="movie_genre">{genre}</h3>
            <h3 id="movie_length">{time}</h3>
          </div>
        </>
      }
    </div>
  );
}
export default MovieCard;
