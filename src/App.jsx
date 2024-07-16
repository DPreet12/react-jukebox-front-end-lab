// src/App.jsx

import { useState, useEffect } from "react";
import * as trackService from "./services/trackService"
import TrackList from "./components/TrackList";
import MusicDetails from "./components/MusicDetails";
import MusicForm from "./components/MusicForm";

const App = () => {
  const [ musicListNew, setMusicListNew ] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [ isFormOpen, setIsFormOpen ] = useState(false);

  useEffect( () => {

    const newFunc = async() => {
    try {
      
        const fetchTracks = await trackService.index();

        // if(fetchTracks.error) {
        //   throw new Error(fetchTracks.error)
        // }
        setMusicListNew(fetchTracks)
      }

     catch (error) {
      console.log("error", error)
    }
  };
  newFunc();

  }, []);

  const updateSelected = (music) => {
    setSelectedMusic(music)
  };

const handleFormView = (music) => {
  if( !music.artist) setSelectedMusic(null)
  setIsFormOpen(!isFormOpen);
};

const createMusic = async( formData ) => {
  try {
    const newTrack = await trackService.create(formData);

    setMusicListNew([newTrack, ...musicListNew]);
    setIsFormOpen(false);
  } catch (error) {
    console.log("error", error);
  }
};


const handleUpdateMusic = async( formData, petId) => {
  try {
      
const updateMusic = await trackService.update( formData, petId);

if (updateMusic.error) {
  throw new Error(updateMusic.error);
}

const updateList = musicListNew.map((music) => {
  return music._id === updateMusic._id ? updateMusic : music
});
setMusicListNew(updateList);
setIsFormOpen(false);
setSelectedMusic(updateMusic)

  } catch (error) {
      console.log("error", error)
  }
}

const handleRemoveMusic = async (musicId) => {
  console.log("Deleting pet with ID:", musicId); // Debugging line
  try {
      await trackService.deleteMusic(musicId); // Call deletePet

      const newMusicList = musicListNew.filter((music) => music._id !== musicId); // Filter out deleted pet
      setMusicListNew(newMusicList); // Update state
      setSelectedMusic(null);
      setIsFormOpen(false);
  } catch (error) {
      console.log("Error deleting pet:", error); // Log any error
  }
};

  return (
   < > 
   < TrackList musicListNew={musicListNew}
   updateSelected= {updateSelected}
   handleFormView={handleFormView}
   isFormOpen= {isFormOpen}
   />

   { isFormOpen ? (
    < MusicForm createMusic={createMusic}
    selectedMusic={selectedMusic}
    handleUpdateMusic = {handleUpdateMusic}/>
   ): (
     < MusicDetails selectedMusic={selectedMusic}
     handleFormView={handleFormView}
     handleRemoveMusic={handleRemoveMusic}
     />
   )}

   </>
  )
};

export default App;