import React, { useEffect, useState } from "react";

function YouTubePlayer() {
  const [player, setPlayer] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Load the YouTube IFrame API script asynchronously
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function will be called when the API is ready.
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("player", {
        videoId: "Sb3h_d_jG-A",
        playerVars: {
          autoplay: 0, // Do not autoplay; wait for user interaction.
          playsinline: 1,
          vq: "hd1080",
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
        },
      });
    };
  }, []);

  const handlePlay = () => {
    if (player) {
      player.unMute();
      player.playVideo();
      setIsStarted(true);
    }
  };

  return (
    <div className="relative">
      {!isStarted && (
        <button
          onClick={handlePlay}
          className="absolute z-20 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Click to Play Video with Audio
        </button>
      )}
      <div id="player" className="w-full h-full"></div>
    </div>
  );
}

export default YouTubePlayer;
