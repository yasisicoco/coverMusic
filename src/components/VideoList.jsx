import VideoItem from "./VideoItem";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const VideoList = () => {
  const nav = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          nav("/");
        }}
        text={"test"}
        type={"test"}
      />
    </div>
  );
};

export default VideoList;
