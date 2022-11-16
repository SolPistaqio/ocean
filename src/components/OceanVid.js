import MeditationGuide from "./MeditationGuide";
import { useWindowDimensions } from "../hooks/WindowSize.js";

function OceanVideo() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="video-wrapper">
        {width > 767 ? (
          <video autoPlay muted loop>
            <source src="ocean.mp4" type="video/mp4" />
          </video>
        ) : (
          ""
        )}
      </div>
      <MeditationGuide />
    </>
  );
}

export default OceanVideo;
