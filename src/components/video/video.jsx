import styled from "styled-components";
import { themeData } from "../../data/themeData";
import ReactPlayer from "react-player";
const Videos = (children) => {
  return (
    <VideoFrame>
      <Player
        url={themeData[children].video}
        playsinline
        loop
        playing
        muted
        className="video"
        height="150vh"
        width="100vw"
        playbackRate="0.7"
      ></Player>
    </VideoFrame>
  );
};

const VideoFrame = styled.div`
  z-index: 2;
`;

const Player = styled(ReactPlayer)`
  object-fit: cover;
  width: 100vw;
  height: 150vh;
  margin-top: -20vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  z-index: 0;
`;

export default Videos;
