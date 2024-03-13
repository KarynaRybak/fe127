import MainSlider from "../MainSlider/MainSlider";
import TopMovies from './TopMovies'; 
function Home () {
  return (
    <div>
      <MainSlider/>
      <div className="top-movies-container"> 
       <TopMovies />
      </div>
    </div>
  )
}
export default Home;
