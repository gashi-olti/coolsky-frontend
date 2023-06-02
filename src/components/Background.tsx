import * as React from 'react';
import { Box, styled } from '@mui/material';

interface Props {
  src: string;
  alt?: string;
  children: React.ReactNode;
}

const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: `blur(5px) brightness(50%)`,
  position: 'absolute',
}));

export default function Background({ src, children }: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <div tw="w-full h-full bg-gray-900 relative">
      {src ? (
        <StyledVideo autoPlay loop muted ref={videoRef}>
          <source src={src} type="video/mp4" />
        </StyledVideo>
      ) : (
        <Box tw="w-full h-full absolute bg-gradient-to-r from-sky-800 to-slate-900" />
      )}

      <Box sx={{ width: 1, height: 1, position: 'relative', zIndex: 2 }}>{children}</Box>
    </div>
  );
}
