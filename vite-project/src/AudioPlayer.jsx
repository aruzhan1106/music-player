import useAudio from "./useAudio";
import { Slider } from "antd";
//import {useIPFS} from './useIPFS'
import "./AudioPlayer.css";
import albumcover from './assets/lana.jpg'
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";


const Player = ({ url }) => {
  //   const {resolveLink} = useIPFS();
  //   const [
  //     playing,
  //     duration,
  //     toggle,
  //     toNextTrack,
  //     toPrevTrack,
  //     trackProgress,
  //     onSearch,
  //     onSearchEnd,
  //     onVolume,
  //     trackIndex
  //   ] = useAudio(url);


  //   const minSec = (secs) => {
  //     const minutes = Math.floor(secs / 60);
  //     const returnMin = minutes < 10 ? `0${minutes}` : minutes;
  //     const seconds = Math.floor(secs % 60);
  //     const returnSec = seconds < 10 ? `0${seconds}` : seconds;

  //     return `${returnMin}:${returnSec}`;
  //   };

  return (
    <>
      <div className="buttons" style={{ width: "300px", justifyContent: "start" }}>
        <img className="cover" src={albumcover} alt="currentCover" />
        <div>
          <div className="songTitle">Off to the Races</div>
          <div className="songAlbum">Born To Die</div>
        </div>
      </div>
      <div>
        <div className="buttons">
          <StepBackwardOutlined className="forback" />
          <PlayCircleFilled className="pauseplay" />
          <StepForwardOutlined className="forback" />
        </div>
        <div className="buttons">
          00:00
          <Slider
            className="progress"
          />
          00:00
        </div>
      </div>
      <div className="soundDiv">
        <SoundOutlined />
        <Slider className="volume" />
      </div>
    </>
  );
};

export default Player;