// @ts-ignore
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import { Theme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import type { SxProps } from '@mui/system';

function getRatio(ratio = '1/1') {
  return {
    '4/3': 'calc(100% / 4 * 3)',
    '3/4': 'calc(100% / 3 * 4)',
    '6/4': 'calc(100% / 6 * 4)',
    '4/6': 'calc(100% / 4 * 6)',
    '16/9': 'calc(100% / 16 * 9)',
    '16/10': 'calc(100% / 16 * 10)',
    '9/16': 'calc(100% / 9 * 16)',
    '21/9': 'calc(100% / 21 * 9)',
    '9/21': 'calc(100% / 9 * 21)',
    '1/1': '100%',
  }[ratio];
}

export type ImageRato =
  | '4/3'
  | '3/4'
  | '6/4'
  | '4/6'
  | '16/9'
  | '9/16'
  | '16/10'
  | '21/9'
  | '9/21'
  | '1/1';

type IProps = BoxProps & LazyLoadImageProps;

interface ImageProps extends IProps {
  sx?: SxProps<Theme>;
  ratio?: ImageRato;
  disabledEffect?: boolean;
  placeholderSrc?: string;
}

const Image = ({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  placeholderSrc,
  ...other
}: ImageProps) => {
  if (ratio) {
    return (
      <Box
        component="span"
        sx={{
          width: 1,
          lineHeight: 0,
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          pt: getRatio(ratio),
          '& .wrapper': {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            position: 'absolute',
            backgroundSize: 'cover !important',
          },
          ...sx,
        }}
      >
        <Box
          component={LazyLoadImage}
          wrapperClassName="wrapper"
          effect={disabledEffect ? undefined : effect}
          placeholderSrc={
            placeholderSrc
              ? placeholderSrc
              : 'https://zone-assets-api.vercel.app/assets/img_placeholder.svg'
          }
          sx={{ width: 1, height: 1, objectFit: 'cover' }}
          {...other}
        />
      </Box>
    );
  }

  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        '& .wrapper': { width: 1, height: 1, backgroundSize: 'cover !important' },
        ...sx,
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        effect={disabledEffect ? undefined : effect}
        placeholderSrc={
          placeholderSrc
            ? placeholderSrc
            : 'https://zone-assets-api.vercel.app/assets/img_placeholder.svg'
        }
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
        {...other}
      />
    </Box>
  );
};

export default Image;
