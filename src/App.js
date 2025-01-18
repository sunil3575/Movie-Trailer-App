
import { useState } from 'react';
import './App.css';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

function App() {
  const [video, setVideo]=useState("");
  const [videoURL, setVideoURL]=useState('https://www.youtube.com/watch?v=7E-cwdnsiow')

  function handlesearch()
  {
    movieTrailer(video).then((res)=>{
      setVideoURL(res);
    });
  }
  return (
    <div className="App">
      <div className='search-box'>
        <label className='labelclass'>
          Search for any movie/shows:{" "}
        </label>
        <input type='text' onChange={(event)=>{
          setVideo(event.target.value)}}></input>
          <button className='btn' onClick={()=>{
            handlesearch()
          }}>Search</button>

      </div>
      <div className='video'>
      <ReactPlayer url={videoURL} height="600px" width="100%" controls={true}></ReactPlayer>
   </div>
    </div>
  );
}

export default App;
