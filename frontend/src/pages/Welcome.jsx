import "./Welcome.css";

function Welcome({ onBegin }) {
  return (
    <div className="welcome-page">
      <video
        className="welcome-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/zera-welcome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="welcome-overlay"></div>

      <div className="welcome-content">
        <p className="welcome-label">WELCOME TO ZERA</p>

        <h1>Step Into the Future</h1>

        <p className="welcome-description">
          Explore technology, intelligence, and innovation through a new
          digital experience.
        </p>

        <button className="welcome-button" onClick={onBegin}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}

export default Welcome;