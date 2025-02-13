// import React, { useEffect, useState } from "react";

// function YouTubePlayer() {
//   const [player, setPlayer] = useState(null);
//   const [isStarted, setIsStarted] = useState(false);

//   useEffect(() => {
//     // Load the YouTube IFrame API script asynchronously
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // This function will be called when the API is ready.
//     window.onYouTubeIframeAPIReady = () => {
//       const ytPlayer = new window.YT.Player("player", {
//         videoId: "Sb3h_d_jG-A",
//         playerVars: {
//           autoplay: 0, // Do not autoplay; wait for user interaction.
//           playsinline: 1,
//           vq: "hd1080",
//         },
//         events: {
//           onReady: (event) => {
//             setPlayer(event.target);
//           },
//         },
//       });
//     };
//   }, []);

//   const handlePlay = () => {
//     if (player) {
//       player.unMute();
//       player.playVideo();
//       setIsStarted(true);
//     }
//   };

//   return (
//     <div className="relative">
//       {!isStarted && (
//         <button
//           onClick={handlePlay}
//           className="absolute z-20 px-4 py-2 bg-blue-600 text-white rounded-md"
//         >
//           Click to Play Video with Audio
//         </button>
//       )}
//       <div id="player" className="w-full h-full"></div>
//     </div>
//   );
// }

// export default YouTubePlayer;

// Updated YouTube IFrame API with Autoplay and Sound in React.js

import React, { useEffect } from "react";

const YouTubePlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player("youtube-player", {
        videoId: "Sb3h_d_jG-A",
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: "Sb3h_d_jG-A",
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(100);
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Ensures continuous loop
            }
          },
        },
      });
    };
  }, []);

  return (
    <div
      style={{
        // position: "fixed",
        // top: 0,
        // left: 0,
        width: "100vw",
        height: "100vh",
        // zIndex: -1,
      }}
    >
      <div id="youtube-player" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default YouTubePlayer;
