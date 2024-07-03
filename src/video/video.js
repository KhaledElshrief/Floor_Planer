import React from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = ({...props}) => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://res.cloudinary.com/daesz5k6b/video/upload/v1699797976/pwgvvms4yjtqvo1t7anj.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        {...props}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  );
};

export default VideoBackground;
