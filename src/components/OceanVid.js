import MeditationGuide from "./MeditationGuide";

function OceanVideo() {
  return (
    <>
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source src="ocean.mp4" type="video/mp4" />
        </video>
      </div>
      <MeditationGuide />
    </>
  );
}

export default OceanVideo;
