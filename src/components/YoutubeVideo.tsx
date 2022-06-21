import React, { FC } from 'react';

export type YouTubeVideoProps = {
  embedId: string;
  mobileRatio: number;
  desktopRatio: number;
};

export const YoutubeVideo: FC<YouTubeVideoProps> = ({
  embedId,
  mobileRatio,
  desktopRatio,
}) => {
  return (
    <>
      <div className="youtube">
        <div className="youtube-video">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            loading="lazy"
          />
        </div>
      </div>
      <style jsx>{`
        .youtube {
          position: relative;
          aspect-ratio: ${mobileRatio};
        }

        .youtube iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: middle;
        }

        @media (min-width: 768px) {
          .youtube {
            aspect-ratio: ${desktopRatio};
          }
        }
      `}</style>
    </>
  );
};
