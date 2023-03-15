import GridContainer from "./containers/GridContent/GridContent";
import { useState, useEffect } from "react";
import "./App.css";
import CardCharacter from "./components/CardCharacter/CardCharacter";
import getRandomNumber from "./assets/utils/getRandomNumber";
import Banner from "./components/Banner/Banner";

function App() {
  const [locations, setLocations] = useState([]);
  const [locationSelected, setLocationSelected] = useState(null);
  const getApi = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location?page=${getRandomNumber(1, 7)}`
      );
      const data = await res.json();
      // console.log(data.results);
      setLocations(data.results);
      // console.log(`Locations: ${locations}`);
      const location =
        data.results[
          getRandomNumber(0, getRandomNumber(0, data.results.length - 1))
        ];
      setLocationSelected(location);
    } catch (error) {
      console.error(`Error al obtener la información :${error}`);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  // console.log(locations);
  console.log(locationSelected);
  return (
    <div className="h-screen">
      <Banner
        locationSelected={locationSelected}
        setLocationSelected={setLocationSelected}
        locations={locations}
      ></Banner>
      <img
        className="fixed w-full top-0 bg-black"
        // src="https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg"
        src="https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-morty-and-man-sky-mashup-wallpaper-taken-from-4.png"
        // src="https://wallpapercave.com/wp/wp1822726.jpg"
        // src="https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Rick-and-Morty-Wallpaper-Free-Download.jpg"
        // src="https://rare-gallery.com/mocahbig/391711-rick-and-morty-4k-pc-wallpaper.jpg"
        // src="https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg"
        // src="https://free4kwallpapers.com/uploads/originals/2021/10/10/-breaking-bad-rick-and-morty-wallpaper.jpg"
        // src="https://www.pixelstalk.net/wp-content/uploads/images6/Rick-And-Morty-Desktop-Wallpaper-4K-768x432.jpg"
        // src="https://rare-gallery.com/uploads/posts/557872-rick-morty.jpg"
        // src="https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-morty-and-man-sky-mashup-wallpaper-taken-from-4.png"
        alt=""
      />
      <GridContainer location={locationSelected}></GridContainer>;
    </div>
  );
}

export default App;
