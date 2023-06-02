import { Container, Divider, Grid, Typography, useMediaQuery, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

import { Images } from '@/components/Images';
import theme from '@/config/theme';

const StyledLink = styled('a')(({ theme: muiTheme }) => ({
  color: blue[400],
  marginLeft: muiTheme.spacing(1),
}));

export default function Footer() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer tw="mx-auto w-full bg-gradient-to-r from-slate-900 to-sky-800 z-10">
      <Container maxWidth={false}>
        <Grid container spacing={4} py={4}>
          <Grid item container xs={12} justifyContent="space-between" rowSpacing={0}>
            <Grid item>
              <Typography variant="body1" tw="text-xl font-normal md:text-3xl">
                coolsky.com
              </Typography>
            </Grid>
            <Grid item>
              <img width={isMobile ? 80 : 160} src={Images.Logo} alt="logo" />
            </Grid>
            <Grid item xs={12} mt={isMobile ? 4 : 1}>
              <Typography variant="body1">
                API powered by
                <StyledLink
                  href="https://www.weatherapi.com/"
                  title="Free Weather API"
                  target="_blank"
                >
                  WeatherAPI.com
                </StyledLink>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Icons powered by
                <StyledLink
                  href="http://www.gstatic.com/index.htm"
                  title="Gstatic (Google)"
                  target="_blank"
                >
                  Gstatic (Google)
                </StyledLink>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider tw="bg-slate-400" />
            <Typography tw="mt-6" textAlign="right">
              © 2023 coolsky.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
