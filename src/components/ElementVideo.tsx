import React, { FC, useEffect, useRef, useState } from 'react';
import { PrevIcon } from './PrevIcon';
import { PlayIcon } from './PlayIcon';
import { NextIcon } from './NextIcon';
import { PauseIcon } from './PauseIcon';

type ElementVideoProps = {
  videoSource: string;
  mobileRatio: number;
  desktopRatio: number;
};

export const ElementVideo: FC<ElementVideoProps> = ({
  videoSource,
  mobileRatio,
  desktopRatio,
}) => {
  const [playState, setPlayState] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    video.current;
  });

  const handlePrev = () => {
    if (video.current) {
      video.current.currentTime -= 10;
    }
  };

  const onPlay = () => {
    setPlayState(!playState);
  };

  useEffect(() => {
    if (video.current) {
      playState ? video.current.play() : video.current.pause();
    }
  }, [playState]);

  const handleNext = () => {
    if (video.current) {
      video.current.currentTime += 10;
    }
  };

  const handleOnTimeUpdate = () => {
    if (video.current) {
      const progress =
        (video.current.currentTime / video.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const handleProgressBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (video.current) {
      const manualChange = Number(event.target.value);
      video.current.currentTime = (video.current.duration / 100) * manualChange;
    }
  };

  return (
    <>
      <div className="video-element">
        <div className="controls">
          <i
            onClick={handlePrev}
            className="control-icon"
            aria-label="previous"
          >
            <PrevIcon />
          </i>
          <i onClick={onPlay} className="control-icon" aria-label="play">
            {playState ? <PauseIcon /> : <PlayIcon />}
          </i>
          <i onClick={handleNext} className="control-icon" aria-label="next">
            <NextIcon />
          </i>
        </div>
        <video
          width={500}
          height={300}
          className="video"
          ref={video}
          onTimeUpdate={handleOnTimeUpdate}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="progress">
          <input
            type="range"
            min="0"
            max="100"
            className="video-progress"
            value={videoProgress}
            onChange={handleProgressBar}
          />
        </div>
      </div>
      <style jsx>{`
        .video-element {
          position: relative;
          aspect-ratio: ${mobileRatio};
        }

        .video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: middle;
          z-index: 1;
        }

        .controls {
          position: absolute;
          inset: 0;
          justify-content: center;
          align-content: center;
          z-index: 2;
          color: white;
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .control-icon {
          cursor: pointer;
        }

        .control-icon:hover {
          transform: scale(1.5);
          transition: transform 0.5s;
        }

        .progress {
          position: absolute;
          inset-block-end: 0;
          inset-inline-start: 0;
          inset-inline-end: 0;
          padding: 15px;
          z-index: 3;
        }

        .video-progress {
          width: 100%;
        }

        @media (min-width: 768px) {
          .video-element {
            aspect-ratio: ${desktopRatio};
          }
        }
      `}</style>
    </>
  );
};
